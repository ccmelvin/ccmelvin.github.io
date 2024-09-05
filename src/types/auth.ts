// src/types/auth.ts

// Type for user authentication status
export interface AuthStatus {
    isAuthenticated: boolean;
    user: User | null;
  }
  
  // Type for user credentials used during login
  export interface Credentials {
    email: string;
    password: string;
  }
  
  // Type for the user object (can be imported from `api.ts` if already defined there)
  export interface User {
    id: number;
    name: string;
    email: string;
    avatarUrl?: string;
  }
  
  // Type for authentication context (if using Context API)
  export interface AuthContextType {
    authStatus: AuthStatus;
    login: (credentials: Credentials) => Promise<void>;
    logout: () => void;
  }
  