import React, { useState } from 'react';
import styles from './LoginForm.module.css';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Почта:
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </label>
      <label>
        Пароль:
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </label>
      <button type="submit">Вход</button>
      <p className={styles.forgotPassword}>Забыли пароль?</p>
    </form>
  );
};

export default LoginForm;
