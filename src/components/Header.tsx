import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../assets/images/icon/logo.png'
import Button from './Button';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Header: React.FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
    setShowLoginForm(false);
  };

  const closeForms = () => {
    setShowLoginForm(false);
    setShowRegisterForm(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href=''><img src={logo} alt="Логотип" /></a>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="#about" className={styles.navItem}>О нас</a></li>
          <li><a href="#features" className={styles.navItem}>Возможности</a></li>
          <li><a href="#partners" className={styles.navItem}>Партнёры</a></li>
          <li><a href="#contacts" className={styles.navItem}>Контакты</a></li>
        </ul>
      </nav>
      <div className={styles.actions}>
        <Button onClick={handleLoginClick}>Вход</Button>
        <Button onClick={handleRegisterClick}>Регистрация</Button>
      </div>
      {showLoginForm && (
        <div className={styles.formContainer}>
          <LoginForm />
          <Button onClick={closeForms}>Закрыть</Button>
        </div>
      )}
      {showRegisterForm && (
        <div className={styles.formContainer}>
          <RegisterForm />
          <Button onClick={closeForms}>Закрыть</Button>
        </div>
      )}
    </header>
  );
};

export default Header;
