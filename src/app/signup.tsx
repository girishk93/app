import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { AuthService } from '../features/auth/AuthService';
import { StatusBar } from 'expo-status-bar';

export default function SignupScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSignup = async () => {
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        // Quick client-side check before API call
        const validation = AuthService.validateEmail(email);
        if (!validation.valid) {
            setError(validation.error || 'Invalid email');
            return;
        }

        setError('');
        setLoading(true);
        try {
            await AuthService.signUp(email, password);
            // Determine next step: Usually Supabase requires email confirmation.
            // If auto-confirm is on, we are logged in.
            // We can check if we have a session or just tell user to check email.
            // For this MVP/Demo we assume we might need to check email or it just works.
            Alert.alert(
                'Account Created',
                'Please check your email to confirm your account.',
                [{ text: 'OK', onPress: () => router.replace('/login') }]
            );
        } catch (err: any) {
            setError(err.message || 'Failed to create account');
            Alert.alert('Signup Failed', err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Create Account</Text>
                        <Text style={styles.subtitle}>Join us and master your focus</Text>
                    </View>

                    {error ? <Text style={styles.errorText}>{error}</Text> : null}

                    <View style={styles.form}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="you@example.com"
                                placeholderTextColor="#9CA3AF"
                                value={email}
                                onChangeText={setEmail}
                                autoCapitalize="none"
                                keyboardType="email-address"
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Password</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Create a password"
                                placeholderTextColor="#9CA3AF"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                        </View>

                        <TouchableOpacity
                            style={[styles.button, loading && styles.buttonDisabled]}
                            onPress={handleSignup}
                            disabled={loading}
                        >
                            {loading ? (
                                <ActivityIndicator color="#FFF" />
                            ) : (
                                <Text style={styles.buttonText}>Sign Up</Text>
                            )}
                        </TouchableOpacity>
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Already have an account? </Text>
                        <Link href="/login" asChild>
                            <TouchableOpacity>
                                <Text style={styles.link}>Sign In</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111827', // Gray 900
    },
    keyboardView: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    header: {
        marginBottom: 32,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#F9FAFB', // Gray 50
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#9CA3AF', // Gray 400
    },
    form: {
        gap: 20,
    },
    inputGroup: {
        gap: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#D1D5DB', // Gray 300
    },
    input: {
        backgroundColor: '#1F2937', // Gray 800
        borderWidth: 1,
        borderColor: '#374151', // Gray 700
        borderRadius: 12,
        padding: 16,
        color: '#F9FAFB',
        fontSize: 16,
    },
    errorText: {
        color: '#EF4444', // Red 500
        marginBottom: 16,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#4F46E5', // Indigo 600
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 8,
        shadowColor: '#4F46E5', // Indigo shadow
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    buttonDisabled: {
        opacity: 0.7,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 32,
    },
    footerText: {
        color: '#9CA3AF',
    },
    link: {
        color: '#4F46E5',
        fontWeight: '600',
    },
});
