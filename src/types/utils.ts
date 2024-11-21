// src/types/utils.ts

// Type for a function that handles asynchronous operations and errors
export type AsyncHandler<T> = (args: T) => Promise<void>;

// Type for a general-purpose error handler
export interface ErrorHandler {
  handleError: (error: Error) => void;
}

// Example type for paginated API responses
export interface PaginatedResponse<T> {
  data: T[];
  currentPage: number;
  totalPages: number;
}

// Example type for a key-value pair (could be useful in various contexts)
export interface KeyValuePair<K, V> {
  key: K;
  value: V;
}
