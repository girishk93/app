import { database } from '../../db';
import User from '../../db/models/User';
import FocusSession from '../../db/models/FocusSession';
import { Q } from '@nozbe/watermelondb';

export const updateStreak = async (userId: string) => {
    try {
        const user = await database.get<User>('users').find(userId);
        const lastSession = await database.get<FocusSession>('focus_sessions')
            .query(
                Q.where('user_id', userId),
                Q.where('status', 'COMPLETED'),
                Q.sortBy('end_time', Q.desc),
                Q.take(1)
            ).fetch();

        if (lastSession.length === 0) {
            // First session ever
            await database.write(async () => {
                await user.update(u => {
                    u.currentStreak = 1;
                });
            });
            return;
        }

        const lastDate = new Date(lastSession[0].endTime);
        const now = new Date();

        // Normalize to start of day
        const lastDay = new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate());
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        const diffTime = Math.abs(today.getTime() - lastDay.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        let newStreak = user.currentStreak;

        if (diffDays === 0) {
            // Same day, keep streak (already incremented/handled? or maybe don't increment if already done today?)
            // Requirement: "Daily and weekly focus streaks". Usually 1 per day.
            // If we want to just maintain the streak:
            // do nothing.
        } else if (diffDays === 1) {
            // Consecutive day
            newStreak += 1;
        } else {
            // Missed a day
            newStreak = 1; // Reset to 1 (today is the first day of new streak)
        }

        if (newStreak !== user.currentStreak) {
            await database.write(async () => {
                await user.update(u => {
                    u.currentStreak = newStreak;
                });
            });
        }

    } catch (error) {
        console.error('Error updating streak:', error);
    }
};
