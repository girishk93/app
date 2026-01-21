import { useRouter } from 'expo-router';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { ensureLocalUser } from '../features/auth/userUtils';
import TaskInput from '../features/tasks/TaskInput';
import { createTask } from '../features/tasks/TaskService';
import { useFocusStore } from '../features/focus/useFocusStore';
import { isReviewNeeded } from '../features/review/ReviewService';

export default function HomeScreen() {
    const router = useRouter();
    const [streak, setStreak] = useState(0);
    const [taskTitle, setTaskTitle] = useState('');
    const startSessionStore = useFocusStore(s => s.startSession);

    useEffect(() => {
        let subscription: any;

        const setupUser = async () => {
            // Check for review
            if (await isReviewNeeded()) {
                router.replace('/review');
                return;
            }

            const user = await ensureLocalUser();
            setStreak(user.currentStreak);

            subscription = user.observe().subscribe(u => {
                setStreak(u.currentStreak);
            });
        };

        setupUser();

        return () => {
            if (subscription) subscription.unsubscribe();
        };
    }, []);

    const handleStartFocus = async () => {
        let taskId: string | undefined;

        if (taskTitle.trim()) {
            const newTask = await createTask(taskTitle.trim());
            taskId = newTask.id;
        }

        startSessionStore(25, taskId, taskTitle.trim());
        router.push('/focus');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ready to Focus?</Text>

            <View style={styles.streakContainer}>
                <Text style={styles.streakCount}>{streak}</Text>
                <Text style={styles.streakLabel}>Day Streak</Text>
            </View>

            <TaskInput onTaskChange={setTaskTitle} />

            <Pressable style={styles.button} onPress={handleStartFocus}>
                <Text style={styles.buttonText}>Start 25m Session</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0f172a',
    },
    title: {
        fontSize: 32,
        color: '#f8fafc',
        marginBottom: 40,
        fontWeight: 'bold',
    },
    streakContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    streakCount: {
        fontSize: 64,
        color: '#fbbf24',
        fontWeight: 'bold',
    },
    streakLabel: {
        color: '#94a3b8',
        fontSize: 16,
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    button: {
        backgroundColor: '#3b82f6',
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 999,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});
