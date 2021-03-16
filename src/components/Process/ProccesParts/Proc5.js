import React, { Fragment, useState } from "react";
import Style from "./Proc5.module.css";
import { comp } from "./ExtraCards/Components3";
import ExtraCard2 from "./ExtraCards/ExtraCard2";
import down from "../../../assets/down.png";
import up from "../../../assets/up.png";
import s from "../../../assets/s.png";

const Proc5 = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  return (
    <div className={Style.main}>
      <div className={Style.inMain}>
        <div className={Style.map}>
          <div className={Style.inMap}>
            {comp.map((card, index) => {
              return (
                <div key={index} className={Style.cardMap}>
                  <ExtraCard2
                    card={card}
                    one={one}
                    two={two}
                    three={three}
                    four={four}
                  />
                </div>
              );
            })}
          </div>
          <div className={Style.menu}>
            <div className={Style.card}>
              <div className={Style.head}>
                <div
                  className={Style.icon}
                  style={{ backgroundImage: `url(${s})` }}
                ></div>
                <p>Малый проект</p>
                <h2>300 тыс.руб</h2>
                <p>примерная стоимость</p>
                <h4>40 тыс.руб/мес.</h4>
                <p>последующая поддержка</p>
              </div>
              <div className={Style.sec}>
                <div className={Style.menuTitle} onClick={() => setOne(!one)}>
                  <p>Сервисы:</p>
                  <div
                    className={Style.check}
                    style={{ backgroundImage: `url(${one ? up : down})` }}
                  ></div>
                </div>
                {one && (
                  <Fragment>
                    <p>Приложения на PHP </p>
                    <p>Микросервисы на Golang </p>
                    <p>Микросервисы на Java </p>
                    <p>Cервисы на Python</p>
                  </Fragment>
                )}
              </div>
              <div className={Style.sec}>
                <div className={Style.menuTitle} onClick={() => setTwo(!two)}>
                  <p>Состав разработки:</p>
                  <div
                    className={Style.check}
                    style={{ backgroundImage: `url(${two ? up : down})` }}
                  ></div>
                </div>
                {two && (
                  <Fragment>
                    <p>Разработчиков</p>
                    <p>SRE-инженера</p>
                    <p>Архитектор</p>
                  </Fragment>
                )}
              </div>
              <div className={Style.sec}>
                <div
                  className={Style.menuTitle}
                  onClick={() => setThree(!three)}
                >
                  <p>CI/CD:</p>
                  <div
                    className={Style.check}
                    style={{ backgroundImage: `url(${three ? up : down})` }}
                  ></div>
                </div>
                {three && (
                  <Fragment>
                    <p>prod-окружение</p>
                    <p>dev/динамический-dev </p>
                    <p>stage-окружение</p>
                    <p>QA-окружение</p>
                    <p>Интеграционные тесты</p>
                  </Fragment>
                )}
              </div>
              <div className={Style.sec}>
                <div className={Style.menuTitle} onClick={() => setFour(!four)}>
                  <p>Инфраструктура:</p>
                  <div
                    className={Style.check}
                    style={{ backgroundImage: `url(${four ? up : down})` }}
                  ></div>
                </div>
                {four && (
                  <Fragment>
                    <p>MySQL Galera </p>
                    <p>Redis</p>
                    <p>Кластер Vault </p>
                    <p>Docker-registry</p>
                    <p>СУБД с автофейловером </p>
                    <p>Кластеры Kubernetes (ВМ)</p>
                    <p>KV-хранилище</p>
                    <p>СУБД на bare metal</p>
                    <p>Платформа виртуализации с API</p>
                    <p>Мониторинг</p>
                    <p>EFK</p>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proc5;
