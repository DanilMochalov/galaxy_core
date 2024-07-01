import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/images/logo.png'
import Button from './Button.tsx';


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Логотип" />
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
        <Button>Вход</Button>
        <Button>Регистрация</Button>
      </div>
    </header>
  );
};

export default Header;
