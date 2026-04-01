import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from '../features/auth/AuthContext';

export default function Layout() {
    return (
        <AuthProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="focus" options={{ gestureEnabled: false }} />
                <Stack.Screen name="review" options={{ gestureEnabled: false }} />
                <Stack.Screen name="login" options={{ animation: 'fade' }} />
                <Stack.Screen name="signup" options={{ animation: 'fade' }} />
            </Stack>
            <StatusBar style="light" />
        </AuthProvider>
    );
}
