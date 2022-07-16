import React, { useEffect, useState } from "react";
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
    sliderCount: 0,
  });

  let changeSlider = (e) => {
   
    let elementAll = document.querySelectorAll(".blocksection");
    if (state.sliderCount + 1 == pageArray.length) {
      setState((pre) => ({ ...pre, activeMenu: pageArray[0], sliderCount: 0 }));
    } else if (pageArray[state.sliderCount] == "OurServices") {
      if (elementAll.length - 1 == servicesViewRef) {
        elementAll[0].classList.add("active");
        setState((pre) => ({
          ...pre,
          activeMenu: pageArray[pre.sliderCount],
          sliderCount: pre.sliderCount++,
        }));
        servicesViewRef = 1;
      } else {
        servicesViewRef = servicesViewRef + 1;
        for (var i = 0; i < elementAll.length; i++) {
          if (i == servicesViewRef) {
            elementAll[i].classList.add("active");
          } else {
            elementAll[i].classList.remove("active");
          }
        }
      }
    } else {
      setState((pre) => ({
        ...pre,
        activeMenu: pageArray[pre.sliderCount],
        sliderCount: pre.sliderCount++,
      }));
    }
  };

  const setMenu = (value, index) => {
    setState((pre) => ({
      ...pre,
      activeMenu: value,
      sliderCount: index,
    }));
  };

  let servicesViewRef = React.useRef(0).current;
  const updateServices = (val = 0) => {
    servicesViewRef = val;
  };
  const activeComponent = {
    "Info": <Info />,
    "OurServices": <OurServices updateServices={updateServices} />,
    "AboutUs": <About />,
    "Contact": <Contact />,
  };
  let pageArray = ["Info", "OurServices", "AboutUs", "Contact"];

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
          <img alt="" src={logo} />
        </div>

        {pageArray?.map((item, i) => {
          return (
            <span
              key={i}
              onClick={() => setMenu(item, i)}
              className={`${state.activeMenu === item ? "active" : ""}`}
            >
              {item}
            </span>
          );
        })}
      </header>

      <div className="mainContainer">
        {activeComponent[state.activeMenu]}
        <div className="" onClick={(e) => changeSlider(e)}>
          <img src={mouseImage} className="mousePointer" />
        </div>
      </div>
    </>
  ) : (
    <LoaderData />
  );
};

export default Main;
