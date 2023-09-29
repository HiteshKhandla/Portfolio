import React, { useState } from "react";

import "./Contact.css";
import Fade from 'react-reveal'

import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
const Contact = () => {


  //handle submit button
const handleSubmit=(e)=>{
  e.prventDefault()
}



  return (
    <>
    <Fade bottom>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  {/* <LightSpeed> */}
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="ocontact"
                      className="image"
                    />
                  {/* </LightSpeed> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              {/* <Rotate> */}
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                        <BsGithub color="black" size={30} className="ms-2" />
                        <BsFacebook color="blue" size={30} className="ms-2" />
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        // value={name}
                        // onChange={(e) => setname(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                        // value={msg}
                        // onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" type="submit" onClick={handleSubmit} >
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              {/* </Rotate> */}
            </div>
          </div>
        </div>
      </div>
      </Fade>
    </>
  );
};

export default Contact;
 