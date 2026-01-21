import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
    return (
        <>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="focus" options={{ gestureEnabled: false }} />
                <Stack.Screen name="review" options={{ gestureEnabled: false }} />
            </Stack>
            <StatusBar style="auto" />
        </>
    );
}
