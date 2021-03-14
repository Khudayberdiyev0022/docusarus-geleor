import React from "react";
import { Link } from "react-router-dom";
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
              <Link href="www.uz">Политика конфиденциальности</Link>
            </h6>
          </li>
          <li>
            <h6>
              Иллюстрации
              <Link to="https://stories.freepik.com">Freepik Stories</Link>
            </h6>
          </li>
          <li>
            <h6>
              Разработка дизайна сайта
              <Link to="https://www.behance.net/gromova1_10792">
                Анастасия Громова
              </Link>
            </h6>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
