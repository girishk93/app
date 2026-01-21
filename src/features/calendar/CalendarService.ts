export const fetchCalendarEvents = async () => {
    // TODO: Implement Google/Outlook OAuth
    // Requires: 
    // 1. expo-auth-session
    // 2. Google Cloud Console Client ID
    // 3. Azure Portal Client ID for Graph API

    return [
        { id: '1', title: 'Meeting with Team', start: Date.now() + 3600000, end: Date.now() + 7200000 },
        { id: '2', title: 'Deep Work Slot', start: Date.now() + 10800000, end: Date.now() + 14400000 },
    ];
};

export const syncCalendarToFocus = async (eventId: string) => {
    // Logic to create a FocusSession from a calendar event
};
