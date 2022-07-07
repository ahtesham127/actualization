import React from "react";
import tablet from "../assets/Tablet.svg";
import dairy from "../assets/Diary.svg"

const OurServices = () => {
  return (
    <div className="ourServices">
     <div className="content">
           <h1  className="animate__animated animate__backInUp">Our Services</h1> 
           <div className="sections">
              <img className="animate__animated animate__zoomIn tabletimg" src={tablet} />
              <img className="animate__animated animate__zoomIn dairyimg" src={dairy} />
           </div>
     </div>
    </div>
  );
};

export default OurServices;
