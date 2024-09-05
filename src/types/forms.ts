// src/types/forms.ts

// Example type for a generic form field
export interface FormField<T> {
    value: T;
    error?: string; // Optional error message
    touched: boolean;
  }
  
  // Example type for a login form's data
  export interface LoginForm {
    email: FormField<string>;
    password: FormField<string>;
  }
  
  // Example type for a registration form's data
  export interface RegistrationForm {
    name: FormField<string>;
    email: FormField<string>;
    password: FormField<string>;
    confirmPassword: FormField<string>;
  }
  
  // Example type for a form's overall state
  export interface FormState<T> {
    values: T;
    isSubmitting: boolean;
    errors: { [K in keyof T]?: string };
  }
  
  // Example type for form validation function
  export type Validator<T> = (values: T) => { [K in keyof T]?: string };
  