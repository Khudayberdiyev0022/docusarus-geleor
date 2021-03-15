import React from "react";
import HomeParts1 from "./HomeParts1";
import HomeParts2 from "./HomeParts2";
import HomeParts3 from "./HomeParts3";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.home}>
      <HomeParts1 />
      <HomeParts2 />
      <HomeParts3 />
    </div>
  );
};

export default Home;
