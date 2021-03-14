import React from "react";
import style from "./DevParts3.module.css";
import chat from '../../assets/chat.png'
import deal from '../../assets/deal.png'
import development from '../../assets/development.png'

const DevParts3 = () => {
  return (
    <div className={style.parts3}>
      <div className={style.capabilities}>
        <h1>Как мы работаем</h1>
      </div>
      <div className={style.worksGroup}>
          <div className={style.worksLeft}>
              <h2>Определение задачи и поиск решения</h2>
              <div className={style.workCards}>
                  <img src={chat} alt="chat" />
                  <p>Обсуждаем вашу задачу</p>
              </div>
              <div className={style.workCards}>
                  <img src={deal} alt="deal" />
                  <p>Обследуем инфраструктуру разработки</p>
              </div>
              <div className={style.workCards}>
                  <img src={development} alt="development" />
                  <p>Предлагаем решение, озвучиваем сроки и стоимость</p>
              </div>
          </div>
          <div className={style.worksRight}>
              <div className={style.workBlocks}>
                  <div className={style.square}><p>01</p></div>
                  <p className={style.textRight}>Определение задачи и поиск решения</p>
              </div>
              <div className={style.workBlocks}>
                  <div className={style.square}><p>02</p></div>
                  <p className={style.textRight}>Проработка решения</p>
              </div>
              <div className={style.workBlocks}>
                  <div className={style.square}><p>03</p></div>
                  <p className={style.textRight}>Внедрение решения</p>
              </div>
              <div className={style.workBlocks}>
                  <div className={style.square}><p>04</p></div>
                  <p className={style.textRight}>Эксплуатация</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default DevParts3;
