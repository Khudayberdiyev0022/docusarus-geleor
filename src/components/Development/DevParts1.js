import React from "react";
import style from "./DevParts1.module.css";
import resurs from "../../assets/resurs.png";

const DevParts1 = () => {
  return (
    <div className={style.parts1} id="one">
     <div className={style.container}>
     <div className={style.resursGroup}>
        <p>Создание инфраструктуры для разработки</p>
        <h1>Строим и поддерживаем</h1>
        <p className={style.platforms}>платформы и сервисы</p>
      </div>
      <img className={style.imgResurs} src={resurs} alt="resurs" />
      
     </div>
     <div className={style.resursGroupBottom}>
        <h2>Об услуге</h2>
        <p>Строим и поддерживаем платформы виртуализации, оркестрации контейнеров, а также различные инфраструктурные сервисы для разработки. Используем открытое ПО актуальных версий.</p>
      </div>
    </div>
  );
};

export default DevParts1;
