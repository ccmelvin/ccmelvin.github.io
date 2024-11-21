import { useState } from 'react';
import { LoginForm, FormState, Validator } from '../types/forms';

const loginValidator: Validator<LoginForm> = (values) => {
  const errors: { email?: string; password?: string } = {};
  if (!values.email.value) errors.email = 'Email is required';
  if (!values.password.value) errors.password = 'Password is required';
  return errors;
};

export const useLoginForm = () => {
  const [formState, setFormState] = useState<FormState<LoginForm>>({
    values: {
      email: { value: '', touched: false },
      password: { value: '', touched: false },
    },
    isSubmitting: false,
    errors: {},
  });

  const validateForm = () => {
    const errors = loginValidator(formState.values);
    setFormState((prevState) => ({
      ...prevState,
      errors,
    }));
    return Object.keys(errors).length === 0;
  };

  return { formState, setFormState, validateForm };
};
