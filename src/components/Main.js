import React, { useEffect, useState } from "react";
import { Header, Footer } from "react-fullpage";
import "../styles/main.css";
import OurServices from "./OurServices";
import Section from "./Section";
import mouseImage from "../assets/Mouse.svg"
import logo from "../assets/logo.png"
import Info from "./Info";

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
    "Info": <Info/>,
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
        <div className="logo">
        <img src={logo}/>
        </div>
    
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

      <div className="mainContainer">
        {activeComponent[state.activeMenu]}
        <img src={mouseImage}  className="mousePointer"/>
      </div>
    </>
  );
};

export default Main;
