import React, { useState } from 'react';
import styles from './RegisterForm.module.css';

const RegisterForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ fullName, email, occupation, password, confirmPassword, phoneNumber });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        ФИО:
        <input 
          type="text" 
          value={fullName} 
          onChange={(e) => setFullName(e.target.value)} 
          required 
        />
      </label>
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
        Занятость:
        <input 
          type="text" 
          value={occupation} 
          onChange={(e) => setOccupation(e.target.value)} 
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
      <label>
        Пароль:
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
        />
      </label>
      <label>
        Номер телефона:
        <input 
          type="tel" 
          value={phoneNumber} 
          onChange={(e) => setPhoneNumber(e.target.value)} 
          required 
        />
      </label>
      <button type="submit">Регистрация</button>
    </form>
  );
};

export default RegisterForm;
