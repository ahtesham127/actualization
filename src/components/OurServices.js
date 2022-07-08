import React from "react";
import tablet from "../assets/Tablet.svg";
import dairy from "../assets/Diary.svg"
import mobile from "../assets/Mobile.svg"

const OurServices = () => {
  return (
    <div className="ourServices">
     <div className="content">
      <section className="blocksection page1">
        <div className="sections">
          <div  className="animate__animated animate__backInUp" >
            <h1 >Our Services</h1> 
          </div>
        </div>
      </section>
      
      <section className="blocksection page2">
        <div className="sections">
          <img className="animate__animated animate__zoomIn tabletimg" src={tablet} />
          <img className="animate__animated animate__zoomIn dairyimg" src={dairy} />
          <div  className="animate__animated animate__zoomIn title1" >
            <h1 >Our Services</h1> 
          </div>
        </div>
      </section>

      <section className="blocksection page3">
        <div className="sections">
          <img className="animate__animated animate__zoomIn tabletimg mobileimg" src={mobile} />
          <div  className="animate__animated animate__zoomIn title1 smartimg" >
            <img className="animate__animated animate__zoomIn tabletimg smartimg_Inner" src={tablet} />

          </div>
        </div>
      </section>


      <section className="blocksection page4">
        <div className="sections">
          <img className="animate__animated animate__zoomIn tabletimg" src={tablet} />
          <img className="animate__animated animate__zoomIn dairyimg" src={dairy} />
        </div>
      </section>


     </div>
    </div>
  );
};

export default OurServices;
