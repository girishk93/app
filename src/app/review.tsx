import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { getDailySummary, markReviewComplete } from '../features/review/ReviewService';

export default function ReviewScreen() {
    const router = useRouter();
    const [stats, setStats] = useState<{ totalMinutes: number, sessionCount: number, streak: number } | null>(null);

    useEffect(() => {
        getDailySummary().then(setStats);
    }, []);

    const handleDismiss = async () => {
        await markReviewComplete();
        router.replace('/');
    };

    if (!stats) return <View style={styles.container}><Text style={styles.text}>Loading...</Text></View>;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Daily Review</Text>
            <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>

            <View style={styles.statBox}>
                <Text style={styles.statValue}>{stats.totalMinutes}</Text>
                <Text style={styles.statLabel}>Focus Minutes</Text>
            </View>

            <View style={styles.statBox}>
                <Text style={styles.statValue}>{stats.sessionCount}</Text>
                <Text style={styles.statLabel}>Sessions</Text>
            </View>

            <View style={styles.statBox}>
                <Text style={styles.statValue}>{stats.streak}</Text>
                <Text style={styles.statLabel}>Current Streak</Text>
            </View>

            <Pressable style={styles.button} onPress={handleDismiss}>
                <Text style={styles.buttonText}>Close Day</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f172a',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        color: '#f8fafc',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    date: {
        fontSize: 18,
        color: '#94a3b8',
        marginBottom: 40,
    },
    statBox: {
        alignItems: 'center',
        marginBottom: 32,
    },
    statValue: {
        fontSize: 48,
        color: '#3b82f6',
        fontWeight: 'bold',
    },
    statLabel: {
        color: '#cbd5e1',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    text: {
        color: '#fff',
    },
    button: {
        backgroundColor: '#10b981', // Emerald
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 999,
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});
