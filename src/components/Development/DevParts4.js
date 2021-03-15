import React from "react";
import style from "./DevParts4.module.css";

const DevParts4 = () => {
  return (
    <div className={style.parts4} id="four">
      <div className={style.capabilities}>
        <h1>Стоимость</h1>
      </div>
      <div className={style.cost}>
        <p>
          В основном зависит от желаемого уровня автоматизации и особенностей
          Вашего приложения. Ниже приведены <b>примеры расчета стоимости </b> проектов.
          Для обсуждения именно Вашего проекта, пожалуйста, свяжитесь с нами.
        </p>
        <button type="button">Узнать стоимость</button>
      </div>
    </div>
  );
};

export default DevParts4;
