import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="animate__animated animate__fadeIn">
        <h1>Contact Us</h1>
        <p>Lorem Ipsum is simply dummy text typesetting industry.</p>
        <div className="formMain">
        <div className="row">
          <div className="col-lg-6">
            <input type="text" placeholder="Name" className="form-control"/>
          </div>
          <div className="col-lg-6">
            <input type="email" placeholder="Email"  className="form-control"/>
          </div>
          <div className="col-lg-12">
            <input type="email" placeholder="Subject"  className="form-control"/>
          </div>
          <div className="col-lg-12">
            <textarea placeholder="Message"  className="form-control"/>
          </div>
          <div className="col-lg-12">
            <button className="btn btn_submit">Send Message</button>
          </div>
        </div>
      </div>
      </div>

    
    </div>
  );
};

export default Contact;
