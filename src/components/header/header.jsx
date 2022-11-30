import React from "react";
import "./header.css";
import CTA from "./cta";
import ME from "../../assets/bgRemoved/me2.png";
import HeaderSocial from "./HeaderSocial";

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5 className="text-light"><span className="p">Hello I'm</span></h5>
        <h1><span className="myName">Ankit Sharma</span></h1>
        <h5 className="text-light"><span className="t">FullStack web and React-Native Developer</span></h5>
        <CTA />
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt=""/>
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
