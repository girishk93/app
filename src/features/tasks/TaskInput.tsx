import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface TaskInputProps {
    onTaskChange: (text: string) => void;
}

export default function TaskInput({ onTaskChange }: TaskInputProps) {
    const [task, setTask] = useState('');

    const handleChange = (text: string) => {
        setTask(text);
        onTaskChange(text);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="What are you working on?"
                placeholderTextColor="#64748b"
                value={task}
                onChangeText={handleChange}
                maxLength={50}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 32,
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#1e293b',
        color: '#f8fafc',
        padding: 16,
        borderRadius: 12,
        fontSize: 16,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#334155',
    },
});
