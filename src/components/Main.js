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
    sliderCount: 0,
    viewCount: 1
  });

  const setMenu = (value, index) => {
    setState((pre) => ({
      ...pre,
      activeMenu: value,
      sliderCount: index
    }));
  };

  const activeComponent = {
    Info: <Info />,
    "Our Services": <OurServices />,
    "About Us": <About />,
    Contact: <Contact />,
  };
  let pageArray = ["Info", "Our Services", "About Us", "Contact"];

  const changeSlider = () => {
    let elementAll = document.querySelectorAll(".blocksection");
    if (state.sliderCount == 3) {
      setState(pre => ({ ...pre, activeMenu: pageArray[0], sliderCount: 0 }))
    }
    else if (state.sliderCount == 1) {
      if (elementAll.length == state.viewCount) {
        elementAll[0].classList.add('active')
        setState((pre) => ({
          ...pre,
          activeMenu: pageArray[state.sliderCount],
          sliderCount: state.sliderCount++,
          viewCount: 1
        }));
      }
      else {
        elementAll[state.viewCount - 1].classList.remove('active')
        elementAll[state.viewCount].classList.add('active')
        setState(pre => ({ ...pre, viewCount: state.viewCount++ }))
      }
    }
    else {
      setState((pre) => ({
        ...pre,
        activeMenu: pageArray[state.sliderCount],
        sliderCount: state.sliderCount++
      }));
    }
  }

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
    }, 0);
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
        <img src={mouseImage} className="mousePointer" onClick={(() => changeSlider())} />
      </div>
    </>
  ) : (
    <LoaderData />
  );
};

export default Main;
