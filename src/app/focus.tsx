import { useEffect } from 'react';
import { View, Text, StyleSheet, Alert, BackHandler } from 'react-native';
import { useRouter } from 'expo-router';
import { useFocusStore } from '../features/focus/useFocusStore';

export default function FocusScreen() {
    const router = useRouter();
    const { timeLeft, isFocusing, startSession, stopSession, tick, taskTitle } = useFocusStore();

    useEffect(() => {
        // Auto-start for now if not running (or could be passed params)
        if (!isFocusing) {
            startSession(25); // Default 25m
        }

        const interval = setInterval(() => {
            tick();
        }, 1000);

        return () => clearInterval(interval);
    }, [isFocusing]);

    // Handle Android Back Button
    useEffect(() => {
        const backAction = () => {
            handleGiveUp();
            return true; // Prevent default behavior
        };
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
        return () => backHandler.remove();
    }, []);

    const handleGiveUp = () => {
        Alert.alert(
            "Give Up?",
            "You will lose your streak if you quit now.",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "I Give Up", style: "destructive", onPress: () => {
                        stopSession();
                        router.back();
                    }
                }
            ]
        );
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.statusText}>FOCUS MODE ACTIVE</Text>

            <View style={styles.timerContainer}>
                <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
            </View>

            {taskTitle ? (
                <Text style={styles.taskTitle}>{taskTitle}</Text>
            ) : (
                <Text style={styles.subText}>Don't leave the app.</Text>
            )}

            <Text style={styles.giveUpText} onPress={handleGiveUp}>Give Up</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000', // Pitch black for focus
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusText: {
        color: '#ef4444', // Red warning
        fontWeight: 'bold',
        letterSpacing: 2,
        marginBottom: 40,
    },
    timerContainer: {
        marginBottom: 40,
    },
    timerText: {
        color: '#ffffff',
        fontSize: 80,
        fontWeight: '200',
        fontVariant: ['tabular-nums'],
    },
    taskTitle: {
        color: '#f8fafc',
        fontSize: 24,
        fontStyle: 'italic',
        marginBottom: 80,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    subText: {
        color: '#64748b',
        marginBottom: 80,
    },
    giveUpText: {
        color: '#ef4444',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});
