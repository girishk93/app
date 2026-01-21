import { database } from '../../db';
import User from '../../db/models/User';

export const LOCAL_USER_ID = 'local_user';

export const ensureLocalUser = async (): Promise<User> => {
    try {
        const usersCollection = database.get<User>('users');
        try {
            const user = await usersCollection.find(LOCAL_USER_ID);
            return user;
        } catch (e) {
            // User not found, create one
            let newUser: User;
            await database.write(async () => {
                newUser = await usersCollection.create(u => {
                    u._raw.id = LOCAL_USER_ID; // Force ID
                    u.email = 'local@user.com';
                    u.currentStreak = 0;
                    u.totalFocusMinutes = 0;
                });
            });
            return newUser!;
        }
    } catch (error) {
        console.error('Error ensuring local user:', error);
        throw error;
    }
};
