import React from "react";
import "./log-reg.css";
import CloseIcon from "../tools-site/icons-site/close-icon-site";

let showModal = () => {
    let modals = document.querySelectorAll(".login-modal-reg");
    for (let obj of modals) {
        obj.classList.toggle("hide-log");
    }
}

let login = () => {
    return (
        <div className="log-reg">
            <p className="item-reg whitesmoke"><a onClick={showModal} className="upper-text whitesmoke" href="#">Вход</a></p>

            <div className="hide-log login-modal-reg background">
            </div>
            <div className="hide-log login-modal-reg login-mod">
                <div className="upperBlock">
                <div onClick={showModal} className="close-reg">
                    <CloseIcon />
                </div>
                <h3 style={{textTransform:"uppercase",
                            fontSize:"15px",
                            fontWeight:"bold",
                            padding:"0 0 0 0"
                }}>Вход на сайт</h3>
                </div>
                <hr />
                <div>

                    <form>
                        <div className="login-reg">
                            <form action="get">
                                <div>
                                    <div className="input-login-form">
                                        <input  className="input-form form-control" placeholder="Логин или email" name="login" id="login-reg-site"></input>
                                        <input  className="input-form form-control" placeholder="Пароль" name="pass" id="pass-reg-site"></input>
                                    </div>
                                    <div className="bottom-login-reg">
                                        <a className="textColor" style={{paddingTop:"0",top:"0"}} href="#">Затерялся пароль?</a>
                                        <div>
                                            <input className="form-check-input" id="dontremember" name="check" type="checkbox" />
                                            <label className="form-check-label" for="dontremember" >Не запоминать меня</label>
                                        </div>
                                        <input style={{backgroundColor:"#00a0b0",
                                                     border:"1px solid #0098a7"
                                        }} className="btn" type="submit" value="Войти" />
                                    </div>
                                    <hr />
                                    <div className="log-form-why">
                                        <p>Ты еще не с нами?</p>
                                        <p><a style={{top:"0"}} className="textColor" href="#">Регистрируйся!</a></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default login;