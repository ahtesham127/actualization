import React from "react";
import tablet from "../assets/Tablet.svg";
import dairy from "../assets/Diary.svg";
import mobile from "../assets/Mobile.svg";
import laptop from "../assets/Laptop.svg";
import glass from "../assets/Magnifying_glass.svg";
import gear from "../assets/Gear.svg";
import stats from "../assets/Stats.svg";
import groupTwo from "../assets/group_2.png";
import group_3_larger from "../assets/group_3_larger.png";
import groupThree from "../assets/group_3.png";

const OurServices = ({ updateServices }) => {

  let sections = document.getElementsByTagName("section");
  let currentSectionIndex = React.useRef(0);
  
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const tabletImg = windowWidth >= 1800 ? group_3_larger : groupTwo;
  const tabletImgClass = windowWidth >= 1800 ? "tabletimg_prev_big" : "tabletimg_prev";
  const mobileClass = windowWidth >= 1800 ? "mobileClass_big" : "mobileImg";

  React.useEffect(() => {
    document.addEventListener("wheel", (e) => {
      if (e.wheelDeltaY > 0 && currentSectionIndex.current - 1 >= 0) {
        // wheel up
        currentSectionIndex.current -= 1;
        for (let i = 0; i < sections.length; i++) {
          if (i === currentSectionIndex.current) {
            sections[i].classList.add("active");
          } else {
            sections[i].classList.remove("active");
          }
        }
        updateServices(currentSectionIndex.current)
      } else if (e.wheelDeltaY < 0 && currentSectionIndex.current + 1 < sections.length) {
        // wheel down
        currentSectionIndex.current = currentSectionIndex.current !== sections.length ? currentSectionIndex.current + 1 : currentSectionIndex.current;
        for (let i = 0; i < sections.length; i++) {
          if (i === currentSectionIndex.current) {
            sections[i].classList.add("active");
          } else {
            sections[i].classList.remove("active");
          }
        }
        updateServices(currentSectionIndex.current)
      }
    });

  }, [sections, updateServices])
  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  return (
    <div className="ourServices">
      <div className="content">
        <section className="blocksection page1 active" data-section="0">
          <div className="sections">
            <div className="animate__animated animate__fadeInUp">
              <h1 className="maintitle">Our Services</h1>
            </div>
          </div>
        </section>

        <section className="blocksection page2" data-section="1">
          <div className="container">
            <div className="sections">
              <img
                alt=""
                className="animate__animated animate__zoomIn tabletimg"
                src={tablet}
              />
              <img
                alt=""
                className="animate__animated animate__zoomIn dairyimg"
                src={dairy}
              />
              <div className="animate__animated animate__zoomIn title1">
                <h1>Services</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="blocksection page3" data-section="2">
          <div className="container">
            <div className="sections" >
              <img
                alt=""
                className={tabletImgClass}
                src={tabletImg}
                style={{}}
              />
              {/* <picture>
                <source media="(min-width:1200px and max-width: 1400px)" srcSet={groupTwo} className="tabletimg_prev"/>
                <source media="(min-width: 1500px and max-width: 2000px)" srcSet={group_3_larger}  />
                <img src={group_3_larger} className="" alt="Chris standing up holding his daughter Elva" />
              </picture> */}

      
              <img
                alt=""
                className={`${mobileClass}`}
                src={mobile}
              />
              {/* <div className="animate__animated animate__zoomIn smartimg">
                <img
                  alt=""
                  className="animate__animated smartimg_Inner"
                  src={tablet}
                />

                <img
                  alt=""
                  className="animate__animated smartimg_Inner_b"
                  src={dairy}
                />

                <div className="animate__animated smallservice">
                  <h1>Our Services</h1>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section className="blocksection page4" data-section="3">
          <div className="container">
            <div className="sections" >
              <img
                alt=""
                className=" section_old"
                src={groupThree}
                style={{ marginTop: "45px", marginLeft: "-19px" }}
              />
              <img
                alt=""
                className="animate__animated animate__zoomIn laptopImg"
                src={laptop}
              />

              <div className="fade-in-image">
                <h1>Develop</h1>
                <p>
                  From Web Apps to Mobile, we develop what your business needs
                  to run better.
                </p>
              </div>

              {/* <div className="animate__animated animate__zoomIn laptopimg_inner">
                <img
                  alt=""
                  className="animate__animated tabletimg mobileimg mobileimg_b"
                  src={mobile}
                />
                <div className="animate__animated smartimg">
                  <img
                    alt=""
                    className="animate__animated laptopsmartimg_Inner"
                    src={tablet}
                  />

                  <img
                    alt=""
                    className="animate__animated laptopsmartimg_Inner_b"
                    src={dairy}
                  />

                  <div className="animate__animated smallservice">
                    <h1>Our Services</h1>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section className="blocksection page5" data-section="4">
          <div className="container">
            <div className="sections" >
              <div className="optimize" >
                <img
                  alt=""
                  className="animate__animated animate__zoomIn opt_laptopimg"
                  src={laptop}
                />

                <div className="opt_fade-in-image">
                  <h1>Develop</h1>
                  <p>
                    From Web Apps to Mobile, we develop what your business needs
                    to run better.
                  </p>
                </div>

                <div className="animate__animated animate__zoomIn opt_laptopimg_inner">
                  <img
                    alt=""
                    className="animate__animated tabletimg mobileimg mobileimg_b"
                    src={mobile}
                  />
                  <div className="animate__animated smartimg">
                    <img
                      alt=""
                      className="animate__animated opt_laptopsmartimg_Inner"
                      src={tablet}
                    />

                    <img
                      alt=""
                      className="animate__animated opt_laptopsmartimg_Inner_b"
                      src={dairy}
                    />

                    <div className="animate__animated smallservice">
                      <h1>Our Services</h1>
                    </div>
                  </div>
                </div>

                <img
                  alt=""
                  className="animate__animated animate__zoomIn opt_glass"
                  src={glass}
                />

                <img
                  alt=""
                  className="animate__animated animate__zoomIn grea_a"
                  src={gear}
                />

                <img
                  alt=""
                  className="animate__animated animate__zoomIn grea_b"
                  src={gear}
                />

                <img
                  alt=""
                  className="animate__animated animate__zoomIn opt_status"
                  src={stats}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurServices;
