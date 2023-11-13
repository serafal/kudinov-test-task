import React from "react";
import "./Header.css"
import HeaderBanner from "../../data/imgs/Banner image.png"
import AvatarImg from "../../data/imgs/Avatar profile.png"
import MesageIcon from "../../data/other/Icon.png"
import PhoneIcon from "../../data/other/Phone.png"


export default function Header() {



  return (
  <div className="Header">
    <img src={HeaderBanner} className="HeaderBanner"></img>
    <div className="Avatar">
      <img src={AvatarImg} alt="" className="AvatarImg"/>
      <div className="AvatarNameBox">
        <h3 className="AvatarName">Ricardo Cooper</h3>
      </div>
      <div className="headerButtons">
        <button><img src={MesageIcon} className="Button-Mesage"alt=""/>    Mesage</button>
        <button><img src={PhoneIcon} className="Button-Call" alt="" />    Call</button>
      </div>
    </div>
  </div>
  );
}
