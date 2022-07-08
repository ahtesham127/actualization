import React, { useEffect, useState, useRef } from "react";
import "../styles/main.css";
import OurServices from "./OurServices";
import mouseImage from "../assets/Mouse.svg";
import logo from "../assets/logo.png";
import Info from "./Info";
import Contact from "./Contact";
import About from "./About";
import { LoaderData } from "./LoaderData";

const Main = () => {
  const [state, setState] = useState({
    scroll: true,
    activeMenu: "Info",
    isLoading: true,
  });

  const setMenu = (value) => {
    setState((pre) => ({
      ...pre,
      activeMenu: value,
    }));
  };

  const activeComponent = {
    Info: <Info />,
    "Our Services": <OurServices />,
    "About Us": <About />,
    Contact: <Contact />,
  };
  let pageArray = ["Info", "Our Services", "About Us", "Contact"];

  useEffect(() => {
    setState((pre) => ({
      ...pre,
      activeMenu: "Info",
    }));

    setTimeout(() => {
      setState((pre) => ({
        ...pre,
        isLoading: false,
      }));
    }, 5000);
  }, []);

  return !state.isLoading ? (
    <>
      <header>
        <div className="logo">
          <img src={logo} />
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
        <img src={mouseImage} className="mousePointer" />
      </div>
    </>
  ) : (
    <LoaderData />
  );
};

export default Main;
