// src/types/notifications.ts

// Enum for notification types
export enum NotificationType {
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info',
  }
  
  // Type for a single notification
  export interface Notification {
    id: string; // Unique identifier
    type: NotificationType;
    message: string;
    duration?: number; // Optional duration in milliseconds
  }
  
  // Example type for a notification context (if using Context API)
  export interface NotificationContextType {
    notifications: Notification[];
    addNotification: (notification: Notification) => void;
    removeNotification: (id: string) => void;
  }
  