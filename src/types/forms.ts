export interface FormField<T> {
    value: T;
    error?: string;
    touched: boolean;
  }
  export interface LoginForm {
    email: FormField<string>;
    password: FormField<string>;
  }
  export interface RegistrationForm {
    name: FormField<string>;
    email: FormField<string>;
    password: FormField<string>;
    confirmPassword: FormField<string>;
  }
  export interface FormState<T> {
    values: T;
    isSubmitting: boolean;
    errors: { [K in keyof T]?: string };
  }
  export type Validator<T> = (values: T) => { [K in keyof T]?: string };
  