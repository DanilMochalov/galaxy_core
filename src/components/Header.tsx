import React from 'react';
import './Header.css'; // если вы планируете использовать стили


const Header = () => {
  return (
    <header className="header">
      <div>
        <img></img>
      </div>
      <div>
        <ul>
          <li>О нас</li>
          <li>Возможности</li>
          <li>Партнёры</li>
          <li>Контакты</li>
        </ul>
      </div>
      <div>
      <button>
        Вход
      </button>
      <button>
        Регистрация
      </button>
      </div>
    </header>
  );
};

export default Header;
