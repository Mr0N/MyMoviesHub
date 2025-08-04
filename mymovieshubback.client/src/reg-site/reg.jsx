import React from "react";
import "./reg.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import CloseIcon  from "../tools-site/icons-site/close-icon-site";
import { left } from "@popperjs/core";


let change = () => {
   let modal = document.querySelector(".modal-window-reg");
   modal.classList.toggle("hide-reg");
   let obj = document.querySelector(".modal-window-background-reg");
   obj.classList.toggle("hide-reg");
}
let MessageError = ()=>{
   return <p className="error error-message-reg"></p>;
}
let reg = () => {
   return (<div>
      <p><a onClick={change} className="upper-text whitesmoke link-reg" href="#">Регистрация</a></p>
      <div className="modal-window-background-reg hide-reg">

      </div>
      <div className="modal-window-reg hide-reg">
         <div className="speed-reg">
            <span className="bold-reg">Быстрая регистрация</span>
            <span className="close-registration" onClick={change}>
               <CloseIcon/>
            </span>
         </div>
         <hr  className="hr-reg"/>
         <form method="get" className="form-reg">
            <div>
               <label>Твой email <span className="star">*</span></label>
               <input className="form-control" type="input" name="email" />
               <MessageError/>
            </div>
            <div>
               <label>Твой логин <span className="star">*</span></label>
               <input className="form-control" type="input" name="login" />
               <MessageError/>
            </div>
            <div>
               <label>Пароль <span className="star">*</span></label>
               <input className="form-control" type="input" name="password" />
               <MessageError/>
            </div>
            <div>
               <input name="form-check-input rules-check-box" type="checkbox" />
               <label for="rules-check-box"> Я согласен с <a href="#" target="_blank">правилами сайта</a></label>
            </div>
            <input className="btn-reg btn btn-primary" type="submit" value="Зарегистрироваться" />
         </form>
         <hr className="hr-reg"/>
         <p>У тебя уже есть аккаунт?<a  href="#">Заходи!</a></p>
      </div>
   </div>)
}
export default reg;