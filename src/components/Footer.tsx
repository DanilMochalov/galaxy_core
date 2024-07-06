import React from "react";
import styles from './Footer.module.css';
import logo from '../assets/images/icon/logo.png';
import github from '../assets/images/icon/github.svg'
import telegram from '../assets/images/icon/telegram.svg'
import youtube from '../assets/images/icon/youtube.svg'


const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_menu}>
        <div className={styles.footer_menu_column}>
          <h3>Полезно</h3>
          <ul>
            <li><a href="https://learngitbranching.js.org/?locale=ru_RU">Обучение Git</a></li>
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
        <div>
        <a href="https://github.com/DanilMochalov"><img src={github} alt="Icon github" /></a>
        <a href="https://www.youtube.com/channel/UCJI7APV4WV0Y9Q6YN5eAVcg"><img src={youtube} alt="Icon youtube" /></a>
        <a href="https://t.me/ebmwrtIT"><img src={telegram} alt="Icon telegram" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
