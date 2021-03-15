import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <ul>
          <li>
            <h6>© 2021 Гелеор</h6>
          </li>
          <li>
            <h6>
              <a href="www.uz">Политика конфиденциальности</a>
            </h6>
          </li>
          <li>
            <h6>
              Иллюстрации
              <a href="https://stories.freepik.com">Freepik Stories</a>
            </h6>
          </li>
          <li>
            <h6>
              Разработка дизайна сайта
              <a href="https://www.behance.net/gromova1_10792">
                Анастасия Громова
              </a>
            </h6>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
