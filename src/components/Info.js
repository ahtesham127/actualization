import React from 'react'
import bg_logo from "../assets/bg_logo.png";
const Info = () => {
  return (
    <div className='info  '>
        <img src={bg_logo} className="animate__animated "/>
        <div className='content animate__animated animate__zoomIn'>
            <h2>Actualization</h2>
            <p>"The process of making something happen and become real"</p>

        </div>
    </div>
  )
}

export default Info