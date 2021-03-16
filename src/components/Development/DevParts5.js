import React from "react";
import style from "./DevParts5.module.css";

const DevParts5 = () => {
  return (
    <div id="six" className={style.parts5}>
      <div className={style.capabilities}>
        <h1>Остались вопросы?</h1>
        <h2>Свяжитесь с нами!</h2>
      </div>
      <form>
        <div className={style.buttons}>
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Телефон" />
          <button type="button">Заказать звонок</button>
        </div>
        <p>
          Нажимая на кнопку “Заказать звонок”, вы соглашаетесь с условиями
          <a href="https://google.com">политики конфиденциальности</a>
        </p>
      </form>
    </div>
  );
};

export default DevParts5;
