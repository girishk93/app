import { database } from '../../db';
import User from '../../db/models/User';
import FocusSession from '../../db/models/FocusSession';
import { Q } from '@nozbe/watermelondb';
import { ensureLocalUser } from '../auth/userUtils';

export const isReviewNeeded = async (): Promise<boolean> => {
    const user = await ensureLocalUser();
    const now = new Date();

    // 8 PM Today
    const today8PM = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 20, 0, 0);

    if (now < today8PM) return false;

    const lastReview = user.lastReviewDate ? new Date(user.lastReviewDate) : null;

    // If no review ever, or review was before today's 8 PM cutoff (basically previous day)
    // Actually, if lastReview was *after* today's 8 PM, then we are good.

    if (!lastReview) return true;

    return lastReview < today8PM;
};

export const getDailySummary = async () => {
    const user = await ensureLocalUser();
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

    const sessions = await database.get<FocusSession>('focus_sessions')
        .query(
            Q.where('user_id', user.id),
            Q.where('start_time', Q.gte(startOfDay)),
            Q.where('status', 'COMPLETED')
        ).fetch();

    const totalMinutes = sessions.reduce((acc, s) => acc + s.durationMinutes, 0);
    const sessionCount = sessions.length;

    return {
        totalMinutes,
        sessionCount,
        streak: user.currentStreak
    };
};

export const markReviewComplete = async () => {
    const user = await ensureLocalUser();
    await database.write(async () => {
        await user.update(u => {
            u.lastReviewDate = Date.now();
        });
    });
};
