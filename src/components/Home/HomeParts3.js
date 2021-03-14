import React from "react";
import style from "./HomeParts3.module.css";
import cardImg from "../../assets/card2.png";

const HomeParts3 = () => {
  const bracket = "}";
  return (
    <div className={style.homeParts3}>
      <div className={style.bracket}>
        <div className={style.inform}>
          <h1>{bracket}</h1>
          <h2>Свяжитесь с нами</h2>
        </div>
        <div className={style.cardImgBg}>
          <div
            className={style.cardImg}
            style={{ backgroundImage: `url(${cardImg})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HomeParts3;
