# FlyBy Spotter: Live Plane Spotting and Aviation Community Website

FlyBy Spotter is a React-based web application that provides live plane spotting, airport streams, aviation galleries, and a community platform for aviation enthusiasts.

This project aims to create an engaging and interactive experience for plane spotters and aviation fans. It offers features such as live streaming from airports, a photo gallery, crew information, and a contact form for user engagement.

## Repository Structure

```
.
├── assets/                 # Compiled assets
├── public/                 # Public assets
├── server/                 # Backend server files
├── src/                    # Source code
│   ├── components/         # React components
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   ├── services/           # API and external service integrations
│   ├── styles/             # Global styles
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main App component
│   ├── firebaseConfig.ts   # Firebase configuration
│   └── main.tsx            # Entry point
├── .env                    # Environment variables (not tracked in git)
├── eslint.config.js        # ESLint configuration
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## Usage Instructions

### Installation

1. Ensure you have Node.js (v14 or later) and npm installed.
2. Clone the repository:
   ```
   git clone <repository-url>
   cd flybyspotter-website
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory and add the following:
   ```
   VITE_API_URL=http://localhost:3001
   ```
2. Update the Firebase configuration in `src/firebaseConfig.ts` with your own Firebase project details.

### Running the Application

1. Start the development server:
   ```
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```
npm run build
```

The built files will be in the `dist` directory.

### Testing

Run the test suite:

```
npm test
```

### Linting

To lint the codebase:

```
npm run lint
```

## Data Flow

The FlyBy Spotter application follows a client-server architecture with React on the frontend and an Express.js server on the backend.

1. The React frontend makes API requests to the backend server.
2. The backend server handles these requests, including fetching YouTube videos and other data.
3. The server may interact with external APIs (e.g., YouTube) to fetch data.
4. The server responds to the frontend with the requested data.
5. React components render the data and handle user interactions.

```
[Browser] <-> [React Frontend] <-> [Express Backend] <-> [External APIs]
```

## Deployment

### Prerequisites

- Node.js environment
- Firebase account (for hosting and database)

### Deployment Steps

1. Build the project:
   ```
   npm run build
   ```
2. Deploy to Firebase:
   ```
   firebase deploy
   ```

## Infrastructure

The project uses Firebase for hosting and database services. Key infrastructure components include:

- Firebase Hosting: Serves the React frontend
- Firebase Firestore: Database for storing application data
- Express.js Server: Handles backend logic and API requests

The `firebaseConfig.ts` file contains the configuration for connecting to Firebase services:

```typescript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXXXXXXXXfirebaseapp.com",
  projectId: "flybyspotter-website",
  storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  messagingSenderId: "1067058624578",
  appId: "1:1067058624578:web:2acc808f22d126fddd15db",
  measurementId: "G-VJCMBS8JGK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

Note: Ensure to replace the above configuration with your own Firebase project details when deploying.