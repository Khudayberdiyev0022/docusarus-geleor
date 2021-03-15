import React from "react";
import Style from "./Proc1.module.css";
import img from "../../../assets/Frame.png";

const Procces1 = () => {
  const a = "{";
  const b = "}";

  return (
    <div className={Style.main}>
      <div className={Style.inMain}>
        <div className={Style.flex}>
          <div className={Style.text}>
            <h2>Построение процессов CI/CD</h2>
            <p>
              <span className={Style.span}> Автоматизируем {a} </span>
              <br />
              <span>#</span>разарботку <br />
              <span>#</span>запуск <br />
              <span>#</span> эксплуатацию{" "}
              <span className={Style.span}>{b}</span>
            </p>
          </div>
          <div
            className={Style.img}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Procces1;
