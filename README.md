# Focus App 🚀

A high-performance, offline-first productivity application built with Expo and WatermelonDB. Focus App helps users manage their time effectively through focused work sessions, session tracking, and social accountability.

## ✨ Features

- **🎯 Focus Sessions**: Time-boxed work sessions (default 25m) to help you stay productive.
- **✅ Task Integration**: Create and link sessions to specific tasks to track focus time per activity.
- **🔥 Streaks**: Stay motivated with daily streak tracking.
- **📊 Progress Reviews**: Automated review system to analyze and improve focus habits.
- **🤝 Social Connectivity**: Connect with friends and share progress (Work in Progress).
- **📶 Offline-First**: Fully functional offline with seamless sync powered by WatermelonDB and Supabase.

## 🛠 Tech Stack

- **Framework**: [Expo](https://expo.dev/) (React Native)
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based navigation)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Local Database**: [WatermelonDB](https://nozbe.github.io/WatermelonDB/) with SQLite
- **Backend/Sync**: [Supabase](https://supabase.com/)
- **Languages**: TypeScript, JavaScript

## 📂 Project Structure

```text
src/
├── app/            # Expo Router screens (routes)
├── db/             # WatermelonDB schema, models, and setup
└── features/       # Feature-based architecture
    ├── auth/       # Authentication logic
    ├── focus/      # Focus session logic and store
    ├── tasks/      # Task management components and services
    ├── streaks/    # Streak calculation logic
    └── social/     # Friend connections and social features
```

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn
- [Expo Go](https://expo.dev/expo-go) app on your mobile device (for development)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx expo start
   ```

4. Scan the QR code with Expo Go to run on your device, or press `i` for iOS simulator / `a` for Android emulator.

## 🛠 Development

- **Schema Changes**: If you modify the database schema in `src/db/schema.ts`, remember to handle migrations for existing users.
- **Models**: Database models are located in `src/db/models/`.

## 📄 License

[MIT](LICENSE)
