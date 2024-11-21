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
      console.log('Form submitted with values:', formState.values);
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label className={styles.labelEmail}>Email:</label>
        <input
          className={styles.inputEmail}
          type="email"
          name="email"
          value={formState.values.email.value}
          onChange={handleChange}
        />
        {formState.errors.email && <span className={styles.errorEmail}>{formState.errors.email}</span>}
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.labelPassword}>Password:</label>
        <input
          className={styles.inputPassword}
          type="password"
          name="password"
          value={formState.values.password.value}
          onChange={handleChange}
        />
        {formState.errors.password && <span className={styles.errorPassword}>{formState.errors.password}</span>}
      </div>

      <button className={styles.submitLoginButton} type="submit" disabled={formState.isSubmitting}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
