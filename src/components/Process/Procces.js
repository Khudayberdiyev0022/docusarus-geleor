import React from "react";
import Style from "./ProccesParts/Procces.module.css";
import Proc2 from "./ProccesParts/Proc2";
import Proc3 from "./ProccesParts/Proc3";
import Proc5 from "./ProccesParts/Proc5";
import DevParts4 from "../Development/DevParts4";
import DevParts5 from "../Development/DevParts5";
import Proc5Mobile from "./ProccesParts/Proc5Mobile";
import Proc4 from "./ProccesParts/Proc4";
// import Proc4Mobile from "./ProccesParts/Proc4Mobile";
import Procces1 from "./ProccesParts/Proc1";

const Procces = () => {
  return (
    <div className={Style.main}>
      <div className={Style.inMain}>
        <Procces1 />
        <Proc2 />
        <Proc3 />
        <Proc4 />
        {/* <Proc4Mobile /> */}
        <DevParts4 />
        <Proc5 />
        <Proc5Mobile />
        <DevParts5 />
      </div>
    </div>
  );
};

export default Procces;
