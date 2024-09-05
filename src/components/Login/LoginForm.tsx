import React from 'react';
import { useLoginForm } from '../../hooks/useLoginForm';
import styles from './LoginForm.module.css';

const LoginForm: React.FC = () => {
  const { formState, setFormState, validateForm } = useLoginForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: {
          ...prevState.values[name as keyof typeof prevState.values],
          value,
          touched: true,
        },
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, handle form submission
      console.log('Form submitted with values:', formState.values);
      // Reset form or redirect user after successful login
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formState.values.email.value}
          onChange={handleChange}
        />
        {formState.errors.email && <span>{formState.errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formState.values.password.value}
          onChange={handleChange}
        />
        {formState.errors.password && <span>{formState.errors.password}</span>}
      </div>

      <button type="submit" disabled={formState.isSubmitting}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
