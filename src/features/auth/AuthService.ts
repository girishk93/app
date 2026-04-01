import { supabase } from '../../services/supabase';
import { disposableDomains } from './disposableDomains';

export const AuthService = {
    async signIn(email: string, pass: string) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password: pass,
        });
        if (error) throw error;
        return data;
    },

    async signUp(email: string, pass: string) {
        // 1. Validate Email Domain
        const domain = email.split('@')[1];
        if (disposableDomains.includes(domain)) {
            throw new Error('Temporary email providers are not allowed.');
        }

        // 2. Attempt Signup
        const { data, error } = await supabase.auth.signUp({
            email,
            password: pass,
        });

        if (error) {
            // Check for user already exists error (Supabase usually returns generic message for security, 
            // but in dev mode or with specific settings it might be explicit. 
            // However, usually 'User already registered' comes with status 400 or 422)
            if (error.message.includes('already registered') || error.message.includes('already exists')) {
                throw new Error('An account with this email already exists.');
            }
            throw error;
        }

        return data;
    },

    async signOut() {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
    },

    validateEmail(email: string) {
        // Basic format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return { valid: false, error: 'Invalid email format' };

        // Disposable domain check
        const domain = email.split('@')[1];
        if (disposableDomains.includes(domain)) {
            return { valid: false, error: 'Temporary email providers are not allowed.' };
        }

        return { valid: true };
    }
};
