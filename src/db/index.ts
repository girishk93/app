import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import { mySchema } from './schema'
import FocusSession from './models/FocusSession'
import User from './models/User'
import Task from './models/Task'

const adapter = new SQLiteAdapter({
    schema: mySchema,
    // (You might want to comment out migrations if you haven't created them yet)
    // migrations, 
    jsi: true, // Expo Generic (Hermes) supports JSI
    onSetUpError: error => {
        // Database failed to load -- often because of schema mismatch or corrupt DB
        // console.log(error)
    }
})

export const database = new Database({
    adapter,
    modelClasses: [
        FocusSession,
        User,
        Task,
    ],
})
