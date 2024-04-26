import React from "react";
import FlixImage from "../FlixImage/FlixImage";
import LOGO from "../../assets/images/flix_logo.png";
import "./header.css"; 

function Header() {
  return (
    <div className="header-container">
      <FlixImage
        alt="Movie Fix Logo"
        mobSrc={LOGO}
        deskSrc={LOGO}
        height={34}
        width={124}
        className="logo"
      ></FlixImage>
    </div>
  );
}

export default Header;
