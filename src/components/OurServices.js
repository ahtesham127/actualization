import React,{ useEffect, useRef, useState, useMemo } from "react";
import tablet from "../assets/Tablet.svg";
import dairy from "../assets/Diary.svg";
import mobile from "../assets/Mobile.svg";

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

  const scrollfun = ()=>{
    //element.classList.add("active");
    if(isInViewport1){
        const element = ref1.current; 
        element.classList.remove("active")
       element.classList.add("active")
     
    }
    else if(isInViewport2){
        const element = ref2.current; 
        element.classList.remove("active")
        element.classList.add("active");
    }

    else if(isInViewport3){
        const element = ref3.current; 
        element.classList.remove("active")
        element.classList.add("active");
    }
    
  }
  return (
    <div className="ourServices" onScroll={()=>scrollfun()}>
      <div className="content">
        <section className="blocksection page1">
          <div className="sections" >
            <div className="animate__animated animate__backInUp">
              <h1>Our Services</h1>
            </div>
          </div>
        </section>

        <section className="blocksection page2">
          <div className="sections"  ref={ref1}>
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

        <section className="blocksection page3">
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

        <section className="blocksection page4" >
          <div className="sections"  ref={ref3}>
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
      </div>
    </div>
  );
};

export default OurServices;
