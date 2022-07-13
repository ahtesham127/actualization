import React,{ useEffect, useRef, useState, useMemo } from "react";
import tablet from "../assets/Tablet.svg";
import dairy from "../assets/Diary.svg";
import mobile from "../assets/Mobile.svg";
import laptop from "../assets/Laptop.svg";

const OurServices = ({ ref, executeScroll }) => {
  // const handleScroll = event => {

  //     var element = document.getElementById("secone");

  //     console.log('scrollTop: ', event.currentTarget.scrollTop);
  //     console.log('offsetHeight: ', event.currentTarget.offsetHeight);
  //     if( event.currentTarget.offsetHeight == 526 ){
  //         element.classList.add("active");

  //     }
  //   };

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInViewport1 = useIsInViewport(ref1);
  const isInViewport2 = useIsInViewport(ref2);
  const isInViewport3 = useIsInViewport(ref3);

  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting)
        ),
      []
    );

    useEffect(() => {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return isIntersecting;
  }

  const scrollfun = () => {
    //element.classList.add("active");
    // if(isInViewport1){
    //     const element = ref1.current;
    //     element.classList.remove("active")
    //    element.classList.add("active")
    // }
    // else if(isInViewport2){
    //     const element = ref2.current;
    //     element.classList.remove("active")
    //     element.classList.add("active");
    // }
    // else if(isInViewport3){
    //     const element = ref3.current;
    //     element.classList.remove("active")
    //     element.classList.add("active");
    // }
  };
  let sections = document.getElementsByTagName("section");
  // tracks index of current section
  let currentSectionIndex = 0;

  document.addEventListener("wheel", (e) => {
    if (e.wheelDeltaY > 0 && currentSectionIndex - 1 >= 0) {
      // wheel up
      sections[currentSectionIndex].classList.remove("active");
      currentSectionIndex--;
      sections[currentSectionIndex].classList.add("active");
    } else if (e.wheelDeltaY < 0 && currentSectionIndex + 1 < sections.length) {
      // wheel down
      sections[currentSectionIndex].classList.remove("active");
      currentSectionIndex++;
      sections[currentSectionIndex].classList.add("active");
    }
  });
  return (
    <div className="ourServices">
      <div className="content">
        <section className="blocksection page1 active" data-section="0">
          <div className="sections">
            <div className="animate__animated animate__backInUp">
              <h1 className="maintitle">Our Services</h1>
            </div>
          </div>
        </section>

        <section className="blocksection page2" data-section="1">
          <div className="sections" ref={ref1}>
            <img
              className="animate__animated animate__zoomIn tabletimg"
              src={tablet}
            />
            <img
              className="animate__animated animate__zoomIn dairyimg"
              src={dairy}
            />
            <div className="animate__animated animate__zoomIn title1">
              <h1>Our Services</h1>
            </div>
          </div>
        </section>

        <section className="blocksection page3" data-section="2">
          <div className="sections" ref={ref2}>
            <img
              className="animate__animated animate__zoomIn tabletimg mobileimg"
              src={mobile}
            />
            <div className="animate__animated animate__zoomIn title1 smartimg">
              <img
                className="animate__animated animate__zoomIn tabletimg smartimg_Inner"
                src={tablet}
              />
            </div>
          </div>
        </section>

        <section className="blocksection page4" data-section="3">
          <div className="sections" ref={ref3}>
            <img
              className="animate__animated animate__zoomIn tabletimg"
              src={tablet}
            />
            <img
              className="animate__animated animate__zoomIn dairyimg"
              src={dairy}
            />
          </div>
        </section>
        <section className="blocksection page4" data-section="4">
          <div className="sections" ref={ref3}>
            <img
              className="animate__animated animate__zoomIn laptopimg"
              src={laptop}
            />

            <div className="fade-in-image">
              <h1>Develop</h1>
              <p>
                From Web Apps to Mobile, we develop what your business needs to
                run better.
              </p>
            </div>

            <div className="animate__animated animate__zoomIn smartimg">
              <img className="animate__animated mobileimg" src={mobile} />

              <div className="animate__animated title1 smartimg">
                <img
                  className="animate__animated smartimg_Inner"
                  src={tablet}
                />
                <img
                  className="animate__animated smartimg_Inner_b"
                  src={dairy}
                />

                {/* <div className="animate__animated title1">
        <h1>Our Services</h1>
      </div> */}
              </div>
            </div>

            {/* <img
    className="animate__animated animate__zoomIn dairyimg"
    src={dairy}
  /> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurServices;
