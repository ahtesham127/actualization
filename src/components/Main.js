import React, { useEffect, useState } from "react";
import { Header, Footer } from "react-fullpage";
import "../styles/main.css";
import OurServices from "./OurServices";
import Section from "./Section";

const Main = () => {
  const [state, setState] = useState({
    scroll: true,
    activeMenu: "Info",
  });

  const setMenu = (value) => {
    setState((pre) => ({
      ...pre,
      activeMenu: value,
    }));
  };

  const activeComponent = {
    "Info": <Section content={"Info"} />,
    "Our Services": <OurServices />,
    "About Us": <Section content={"About"} />,
    "Contact": <Section content={"Contact"} />,
  };
 let pageArray = ["Info", "Our Services", "About Us", "Contact"];
  useEffect(() => {
    setState((pre) => ({
      ...pre,
      activeMenu: "Info",
    }));
  }, []);

  return (
    <>
      <header>
        {pageArray?.map((item, i) => {
          return (
            <span
              key={i}
              onClick={() => setMenu(item)}
              className={`${state.activeMenu === item ? "active" : ""}`}
            >
              {item}
            </span>
          );
        })}
      </header>

      <div className="mainContainer">{activeComponent[state.activeMenu]}</div>
    </>
  );
};

export default Main;
