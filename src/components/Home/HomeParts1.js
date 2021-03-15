import React from "react";
import style from "./HomeParts1.module.css";
import illustration from "../../assets/illustration.png";

const HomeParts1 = () => {
  const bracket = "{";
  return (
    <div className={style.homeParts1}>
      <div className={style.container}>
        <div className={style.vectorBg}>
          <div className={style.capabilities}>
            <h1>Профессиональные практики DevOps</h1>
            <p>Мы строим инфраструктуру и автоматизируем разработку</p>
            <div className={style.btnGroups}>
              <button className={style.btnBlue} type="button">
                Презентация
              </button>
              <button className={style.btnLight} type="button">
                Задать вопрос
              </button>
            </div>
          </div>
          <img className={style.img} src={illustration} alt="illustration" />
        </div>
        <div className={style.bracket}>
          <h1>{bracket}</h1>
          <h2>Мы предлагаем услуги в двух направлениях</h2>
        </div>
        <div className={style.processor}>
          <h3>Построение процессов CI/CD</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeParts1;
