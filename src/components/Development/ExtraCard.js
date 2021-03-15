import React, { Fragment } from "react";
import Style from "./ExtraCard.module.css";

const ExtraCard = (props) => {
  const empty = "";
  return (
    <div className={Style.main}>
      <div className={Style.inMain}>
        <div className={Style.head}>
          <div
            className={Style.icon}
            style={{ backgroundImage: `url(${props.card.icon})` }}
          ></div>
          <p>{props.card.footIcon}</p>
          <h2>{props.card.title}</h2>
          <p>{props.card.footTitle}</p>
          <h4>{props.card.foot}</h4>
          <p>{props.card.endFoot}</p>
        </div>
        <div className={Style.empty}>{empty}</div>
        <div className={Style.sec1}>
          {props.one && (
            <Fragment>
              <p>{props.card.sec11}</p>
              <div
                className={Style.chec}
                style={{ backgroundImage: `url(${props.card.sec12})` }}
              ></div>
              <div
                className={Style.chec}
                style={{ backgroundImage: `url(${props.card.sec13})` }}
              ></div>
              <div
                className={Style.chec}
                style={{ backgroundImage: `url(${props.card.sec14})` }}
              ></div>
              <div
                className={Style.chec}
                style={{ backgroundImage: `url(${props.card.sec15})` }}
              ></div>
              <div
                className={Style.chec}
                style={{ backgroundImage: `url(${props.card.sec16})` }}
              ></div>
            </Fragment>
          )}
        </div>
        <div className={Style.empty}>{empty}</div>
        <div className={Style.sec2}>
          {props.two && (
            <Fragment>
              {props.card.ab ? (
                <p>{props.card.sec21}</p>
              ) : (
                <div
                  className={Style.chec}
                  style={{ backgroundImage: `url(${props.card.sec21})` }}
                ></div>
              )}
              <div
                className={Style.chec}
                style={{ backgroundImage: `url(${props.card.sec22})` }}
              ></div>
              <div
                className={Style.chec}
                style={{ backgroundImage: `url(${props.card.sec23})` }}
              ></div>
            </Fragment>
          )}
        </div>
        <div className={Style.empty}>{empty}</div>

        <div className={Style.check}>
          {props.three && (
            <Fragment>
              <div
                className={Style.check}
                style={{ backgroundImage: `url(${props.card.sec31})` }}
              ></div>
              <div className={Style.img} style={{ height: "64px" }}>
                <div
                  style={{
                    backgroundImage: `url(${props.card.sec32})`,
                    width: "24px",
                    height: "24px",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p style={{ opacity: 0 }}>
                  Инсталляция на железных серверах проработка доменов отказа
                </p>
              </div>
              {props.card.aaa ? (
                <p>{props.card.sec33}</p>
              ) : (
                <div
                  className={Style.check}
                  style={{ backgroundImage: `url(${props.card.sec33})` }}
                ></div>
              )}
            </Fragment>
          )}
        </div>
        <div className={Style.empty}>{empty}</div>
        <div className={Style.check}>
          {props.four && (
            <Fragment>
              {props.card.aa ? (
                <p>{props.card.sec41}</p>
              ) : (
                <div
                  className={Style.check}
                  style={{ backgroundImage: `url(${props.card.sec41})` }}
                ></div>
              )}
              <div
                className={Style.check}
                style={{ backgroundImage: `url(${props.card.sec42})` }}
              ></div>
              <div
                className={Style.check}
                style={{ backgroundImage: `url(${props.card.sec43})` }}
              ></div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExtraCard;
