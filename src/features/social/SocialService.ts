export const inviteFriend = async () => {
    // TODO: Implement Deep Linking via expo-linking
    // Generates a URL like: focusapp://invite?user=123
    console.log("Generating invite link...");
    return "focusapp://invite?code=12345";
};

export const getSharedGoals = async () => {
    // Fetch from Supabase (backend)
    return [
        { userId: 'friend_1', streak: 5, status: 'FOCUSING' },
        { userId: 'friend_2', streak: 12, status: 'IDLE' },
    ];
};
