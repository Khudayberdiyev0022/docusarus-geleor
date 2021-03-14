import React from "react";
import style from "./DevParts4.module.css";

const DevParts4 = () => {
  return (
    <div className={style.parts4}>
      <div className={style.capabilities}>
        <h1>Стоимость</h1>
      </div>
      <div className={style.cost}>
        <p>
          В основном зависит от желаемого уровня автоматизации и особенностей
          Вашего приложения. Ниже приведены примеры расчета стоимости проектов.
          Для обсуждения именно Вашего проекта, пожалуйста, свяжитесь с нами.
        </p>
        <button type="button">Узнать стоимость</button>
      </div>
    </div>
  );
};

export default DevParts4;
