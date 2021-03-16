import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import LogoMenu from "./NavbarParts/LogoMenu";
import ServiceMenu from "./NavbarParts/ServiceMenu";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [logoClicked, setLogoClicked] = useState(false);
  const [serviceClicked, setServiceClicked] = useState(false);

  const [service, setService] = useState(false);
  const [building, setBuilding] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
    const interval = setInterval(() => {
      if (window.location.pathname === "/") {
        setService(false);
        setBuilding(false);
      } else if (window.location.pathname === "/service") {
        setService(true);
        setBuilding(false);
      } else if (window.location.pathname === "/building") {
        setService(false);
        setBuilding(true);
      }
    }, 100);
    return () => {
      clearInterval(interval);
    };
  });
  const navbarLaptop = () => {
    return (
      <div className={style.navbarLaptop}>
        <h1
          onClick={() => {
            setLogoClicked(!logoClicked);
            setServiceClicked(false);
          }}
        >
          гелеор
        </h1>
        {service && logoClicked && (
          <h3>
            <Link to="/">Главная</Link> / Создание инфраструктуры для разработки
          </h3>
        )}
        {building && logoClicked && (
          <h3 style={{ wordWrap: "10px" }}>
            <Link to="/">Главная / </Link> Построение процессов CI/CD
          </h3>
        )}
        <div className={style.links}>
          <Link
            to="/service"
            onClick={() => {
              setServiceClicked(!serviceClicked);
              setLogoClicked(false);
            }}
          >
            Услуги
          </Link>
          <Link to="/about">О нас</Link>
          <Link to="/contact">Контакты</Link>
        </div>
      </div>
    );
  };
  const navbarPhone = () => {
    return (
      <div className={style.navbarPhone}>
        <div className={style.visible}>
          <h1>
            <Link to="/">гелеор</Link>
          </h1>
          {clicked ? (
            <IoCloseSharp onClick={() => setClicked(false)} />
          ) : (
            <FiMenu onClick={() => setClicked(true)} />
          )}
        </div>
        <div
          className={
            clicked
              ? `${style.invisible} ${style.clicked}`
              : `${style.invisible} ${style.nonClicked}`
          }
        >
          <div className={style.container}>
            <div
              className={
                clicked
                  ? `${style.links} ${style.clicked}`
                  : `${style.links} ${style.nonClicked}`
              }
            >
              <Link to="/service" onClick={() => setClicked(false)}>
                Услуги
              </Link>
              <Link to="/about" onClick={() => setClicked(false)}>
                О нас
              </Link>
              <Link to="/contact" onClick={() => setClicked(false)}>
                Контакты
              </Link>
            </div>
            <div className={style.button}>
              <h1>Задать вопрос</h1>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={
        scroll
          ? `${style.main} ${style.scrolled}`
          : `${style.main} ${style.notScrolled}`
      }
    >
      {navbarLaptop()}
      {navbarPhone()}
      {logoClicked && <LogoMenu />}
      {serviceClicked && <ServiceMenu />}
    </div>
  );
}

export default Navbar;
