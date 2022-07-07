import React, {useRef, useEffect, useState} from "react";
import tablet from "../assets/Tablet.svg";
import dairy from "../assets/Diary.svg"

const OurServices = () => {
    const [offset, setOffset] = useState(0);
    
    const ref = useRef(null);
    const addclass=()=>{
        const sections = ref.current; // corresponding DOM node
        sections.className = "active";
     }  

     useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        addclass()
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [offset]);
    
  return (
    <div className="ourServices">
     <div className="content">
           <h1  className="animate__animated animate__backInUp">Our Services</h1> 
           <div className="sections" ref={ref}>
              <img className="animate__animated animate__zoomIn tabletimg" src={tablet} />
              <img className="animate__animated animate__zoomIn dairyimg" src={dairy} />
           </div>
     </div>
    </div>
  );
};

export default OurServices;
