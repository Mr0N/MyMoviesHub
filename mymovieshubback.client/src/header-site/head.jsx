import React from "react";
import Btn from "../btn-site/btn";
import "../header-site/head.css";
import Logo from "../logo-site/logo";
import Login from "../login-site/log-reg";
import Toogle from "../toggle-site/toggle";
import Reg from "../reg-site/reg";
import logo from "../assets/image.svg";
import telegramIcon from "../assets/telegram.svg";
import twitterIcon from "../assets/twitter.svg";


let show = () => {
   let panel = document.querySelector(".panel-items-header");
   if (panel.classList.contains("visible-head")) {
      panel.classList.remove("visible-head");
   }
}
let hide = () => {
   let panel = document.querySelector(".panel-items-header");
   if (!panel.classList.contains("visible-head")) {
      panel.classList.add("visible-head");
   }
}
let PanelHeader = () => {
   return <div onMouseLeave={hide} className="panel-header">
      <div className="scope-header">
         <div className="sub-scope-header">
            <img className="img-logo-header" src={logo}></img>
            <p onMouseOver={show} className="upper-text whitesmoke panel-subscripe-header upper-text">Подпишись</p>
         </div>
         <ul className="panel-items-header visible-head">
            <li><Btn image={telegramIcon} name="Telegram" /></li>
            <li><Btn image={twitterIcon} name="Твиттер" /></li>
         </ul>
      </div>
   </div>
}
let LoginBlockHeader = () => {
   return <div className="login-block-header">
      <div className="login-header">
         <Login />
      </div>
      <div className="reg-header">
         <Reg />
      </div>
      <div className="toggle-header">
         <Toogle on={on} off={off} />
      </div>
   </div>
}
let LogoHeader = () => {
   return <div className="logo-header">
      <Logo />
   </div>
}
let on = () => {
   console.log("on");
}
let off = () => {
   console.log("off");
}

let head = () => {

   return (<div className="header" style={{ height: this }}>
      <div className="left">
         <PanelHeader />
      </div>
      <div className="center">
         <LogoHeader/>
      </div>
      <div className="rigth">
         <LoginBlockHeader />
      </div>

   </div>)
}
export default head;