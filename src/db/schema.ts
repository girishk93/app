import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'users',
      columns: [
        { name: 'email', type: 'string' },
        { name: 'current_streak', type: 'number' },
        { name: 'total_focus_minutes', type: 'number' },
        { name: 'last_review_date', type: 'number', isOptional: true },
        { name: 'settings_json', type: 'string', isOptional: true },
      ],
    }),
    tableSchema({
      name: 'focus_sessions',
      columns: [
        { name: 'user_id', type: 'string' },
        { name: 'start_time', type: 'number' },
        { name: 'end_time', type: 'number', isOptional: true },
        { name: 'duration_minutes', type: 'number' },
        { name: 'status', type: 'string' }, // 'COMPLETED', 'FAILED', 'ABANDONED'
        { name: 'linked_task_id', type: 'string', isOptional: true },
        { name: 'synced', type: 'boolean' },
      ],
    }),
    tableSchema({
      name: 'tasks',
      columns: [
        { name: 'user_id', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'completed', type: 'boolean' },
        { name: 'linked_session_id', type: 'string', isOptional: true },
        { name: 'due_date', type: 'number', isOptional: true },
      ],
    }),
    tableSchema({
      name: 'social_connections',
      columns: [
        { name: 'requester_id', type: 'string' },
        { name: 'receiver_id', type: 'string' },
        { name: 'status', type: 'string' }, // 'PENDING', 'ACCEPTED'
      ],
    }),
  ],
})
