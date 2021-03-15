import React from "react";
import style from "./HomeMobile.module.css";
import illustration from "../../assets/illustration.png";
import arrowRightMobile from "../../assets/arrow-right-mobile.svg";
import vector8 from '../../assets/vector8.png'
import mobileGroup from "../../assets/mobileGroup.png";



const HomeMobile = () => {
  const bracket = "{";
  const bracketCLose = "}";
  return (
    <div className={style.homeMobile}>
      <div className={style.container}>
        <h1>Профессиональные практики DevOps</h1>
        <p>Мы строим инфраструктуру и автоматизируем разработку</p>
        <img className={style.illustration} src={illustration} alt="illustration" />
        <div className={style.btnGroups}>
            <button className={style.btnBlue} type="button">
              Презентация
            </button>
            <button className={style.btnLight} type="button">
              Задать вопрос
            </button>
          </div>
          <div className={style.bracket}>
        <h1>{bracket}</h1>
        <h2>Мы предлагаем услуги в двух направлениях</h2>
      </div>
      <div className={style.processor}>
        <h3>Построение процессов CI/CD</h3>
      </div>
      <div className={style.readMore}>
          <p>
            <span>#</span> Внедряем конвейеры для автоматической сборки,
            тестирования и развёртывания приложения;
          </p>
          <p>
            <span>#</span> Помогаем с эксплуатацией приложения.;
          </p>
          <button>
            Узнать больше <img src={arrowRightMobile} alt="arrowRightMobile" />
          </button>
        </div>
        <img className={style.illustration} src={vector8} alt="vector8"  />
        <div className={style.readMoreBottom}>
          <h3>Создание инфраструктуры для разработки</h3>
          <p>
            <span>#</span> Строим инфраструктуру на базе Kubernetes, OpenStack;
          </p>
          <p>
            <span>#</span> Поддерживаем вспомогательные сервисы: БД, очередей,
            балансировки и т.д.;
          </p>
          <p>
            <span>#</span> Внедряем мониторинг и логирование;
          </p>
          <p>
            <span>#</span> Помогаем с эксплуатацией инфраструктуры.
          </p>
          <button>
            Узнать больше <img src={arrowRightMobile} alt="arrowRightMobile" />
          </button>
        </div> 
        <div className={style.bracket}>
        <h1>{bracketCLose}</h1>
        <h2>Свяжитесь с нами</h2>
      </div>
      <div className={style.homePart3mobile}>
      <div className={style.cardImgBgMobile}>
          <div
            className={style.cardImgMobile}
            style={{ backgroundImage: `url(${mobileGroup})` }}
          ></div>
        </div>
    </div>
      </div>
    </div>
  );
};

export default HomeMobile;
