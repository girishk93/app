import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../../services/supabase';
import { useRouter, useSegments } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';

type AuthContextType = {
    session: Session | null;
    loading: boolean;
};

const AuthContext = createContext<AuthContextType>({ session: null, loading: true });

// This hook can be used to access the user info.
export function useAuth() {
    return useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(session: Session | null, loading: boolean) {
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        if (loading) return;

        const inAuthGroup = segments[0] === '(auth)' || segments.includes('login') || segments.includes('signup');
        const isPublic = segments.includes('login') || segments.includes('signup');

        if (!session && !isPublic) {
            // If the user is not signed in and the initial segment is not anything in the auth group.
            router.replace('/login');
        } else if (session && isPublic) {
            // If the user is signed in and the initial segment is in the auth group.
            router.replace('/');
        }
    }, [session, loading, segments]);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSession = async () => {
            const { data } = await supabase.auth.getSession();
            setSession(data.session);
            setLoading(false);
        };
        fetchSession();

        const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
            setSession(session);
            setLoading(false);
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    useProtectedRoute(session, loading);

    return (
        <AuthContext.Provider value={{ session, loading }}>
            {children}
        </AuthContext.Provider>
    );
}
