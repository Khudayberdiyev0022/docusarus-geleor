import React from "react";
import style from "./HomeParts2.module.css";
import arrowRight from "../../assets/arrow-right.svg";

const HomeParts2 = () => {
  return (
    <div className={style.homeParts2}>
      <div className={style.container}>
        <div className={style.readMore}>
          <p>
            <span>#</span> Внедряем конвейеры для автоматической сборки,
            тестирования и развёртывания приложения;
          </p>
          <p>
            <span>#</span> Помогаем с эксплуатацией приложения.;
          </p>
          <button>
            Узнать больше <img src={arrowRight} alt="arrowRight" />
          </button>
        </div>
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
            Узнать больше <img src={arrowRight} alt="arrowRight" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeParts2;
