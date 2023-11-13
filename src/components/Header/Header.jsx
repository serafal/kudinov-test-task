import React from "react";
import "./Header.css"
import HeaderBanner from "../../data/imgs/Banner image.png"


export default function Header() {



  return (
  <div className="Header">
    <img src={HeaderBanner} className="HeaderBanner"></img>
  </div>
  );
}
