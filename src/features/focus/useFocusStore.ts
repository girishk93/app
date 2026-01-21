import { create } from 'zustand';
import { database } from '../../db';
import FocusSession from '../../db/models/FocusSession';
import { ensureLocalUser } from '../../features/auth/userUtils';
import { updateStreak } from '../../features/streaks/streakLogic';

interface FocusState {
    isFocusing: boolean;
    timeLeft: number;
    duration: number;
    sessionStartTime: number | null;
    taskId: string | null;
    taskTitle: string | null;
    startSession: (durationMinutes: number, taskId?: string, taskTitle?: string) => void;
    stopSession: () => void;
    completeSession: () => Promise<void>;
    tick: () => void;
}

export const useFocusStore = create<FocusState>((set, get) => ({
    isFocusing: false,
    duration: 25 * 60,
    timeLeft: 25 * 60,
    sessionStartTime: null,
    taskId: null,
    taskTitle: null,

    startSession: (minutes: number, taskId?: string, taskTitle?: string) => set({
        isFocusing: true,
        duration: minutes * 60,
        timeLeft: minutes * 60,
        sessionStartTime: Date.now(),
        taskId: taskId || null,
        taskTitle: taskTitle || null,
    }),

    stopSession: () => set({ isFocusing: false, sessionStartTime: null, taskId: null, taskTitle: null }),

    completeSession: async () => {
        const { sessionStartTime, duration, taskId } = get();
        set({ isFocusing: false, sessionStartTime: null, taskId: null, taskTitle: null });

        if (sessionStartTime) {
            try {
                await ensureLocalUser();

                await database.write(async () => {
                    await database.get<FocusSession>('focus_sessions').create(session => {
                        session.startTime = sessionStartTime;
                        session.endTime = Date.now();
                        session.durationMinutes = Math.floor(duration / 60);
                        session.status = 'COMPLETED';
                        session.synced = false;
                        session.userId = 'local_user';
                        if (taskId) session.linkedTaskId = taskId;
                    });
                });

                await updateStreak('local_user');

            } catch (error) {
                console.error('Failed to save session:', error);
            }
        }
    },

    tick: () => {
        const { timeLeft, completeSession } = get();
        if (timeLeft <= 0) {
            completeSession();
            return;
        }
        set({ timeLeft: timeLeft - 1 });
    },
}));
