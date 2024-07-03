import React from "react";
import styles from './Footer.module.css';
import logo from '../assets/images/icon/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_menu}>
        <div className={styles.footer_menu_column}>
          <h3>Полезно</h3>
          <ul>
            <li><a href="https://learngitbranching.js.org/?locale=ru_RU">Обученеи Git</a></li>
            <li><a href="https://easyoffer.ru/question/1633">Вопросы с собесов</a></li>
            <li><a href="https://www.freecodecamp.org/learn/">Метериалы по ЯП</a></li>
            <li><a href="#">Link 4</a></li>
          </ul>
        </div>
        <div className={styles.footer_menu_column}>
          <h3>Интересно</h3>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
          </ul>
        </div>
        <div className={styles.footer_menu_column}>
          <h3>Бардак</h3>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footer_icons}>
        <img src={logo} alt="Logo" />
        <a href="#"><img src="icon2.png" alt="Icon 2" /></a>
        <a href="#"><img src="icon3.png" alt="Icon 3" /></a>
        <a href="#"><img src="icon4.png" alt="Icon 4" /></a>
      </div>
    </footer>
  );
};

export default Footer;
