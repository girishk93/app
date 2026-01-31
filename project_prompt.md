# Prompt: Focus App Re-implementation (JavaScript)

Recreate the "Focus App" - a productivity application built with Expo and WatermelonDB - using **JavaScript** instead of TypeScript.

## Technical Stack
- **Framework**: Expo (SDK 54+) with Expo Router (v6).
- **Language**: JavaScript (ES6+).
- **Navigation**: Expo Router (File-based routing, `src/app` directory).
- **Database**: WatermelonDB (`@nozbe/watermelondb`) with SQLite adapter for local-first persistence.
- **Backend/Auth**: Supabase (`@supabase/supabase-js`) for cloud synchronization and user authentication.
- **State Management**: Zustand for light global UI state.
- **Styling**: NativeWind (Tailwind CSS for React Native).

## Core Features
1. **Focus Sessions**: Timer-based sessions that track focused work time.
   - Statuses: `COMPLETED`, `FAILED`, `ABANDONED`.
   - Ability to link a session to a specific task.
2. **Task Management**: Simple TODO style tasks.
3. **Streak Tracking**: Calculate and display daily focus streaks.
4. **Cloud Sync**: WatermelonDB synchronization with Supabase.

## Database Schema (WatermelonDB)
Define the following tables in `src/db/schema.js`:
- **users**: `email` (string), `current_streak` (number), `total_focus_minutes` (number), `last_review_date` (number), `settings_json` (string).
- **focus_sessions**: `user_id` (string), `start_time` (number), `end_time` (number), `duration_minutes` (number), `status` (string), `linked_task_id` (string), `synced` (boolean).
- **tasks**: `user_id` (string), `title` (string), `completed` (boolean), `linked_session_id` (string), `due_date` (number).
- **social_connections**: `requester_id` (string), `receiver_id` (string), `status` (string).

## Critical Configurations
1. **Babel**: Configure `babel.config.js` to support legacy decorators (`@babel/plugin-proposal-decorators` with `legacy: true`) and class properties (required for WatermelonDB models).
2. **SQLite Adapter**: In the database initialization, ensure `jsi: false` is set in the `SQLiteAdapter` configuration to maintain compatibility with **Expo Go**.
3. **Expo Config**: Add `scheme: "focusapp"` (or similar) to `app.json` to support deep linking and prevent production crashes.
4. **Project Structure**:
   - `src/app/`: Expo Router screens.
   - `src/db/`: WatermelonDB schema, models (using JS classes and decorators), and initialization.
   - `src/store/`: Zustand stores.
   - `src/components/`: Reusable UI components.

## Implementation Instructions
- Convert all TypeScript models and schema definitions to standard JavaScript.
- Use Babel decorators for WatermelonDB model fields (e.g., `@field`, `@text`, `@date`).
- Ensure the app is optimized for a "local-first" experience using WatermelonDB.
