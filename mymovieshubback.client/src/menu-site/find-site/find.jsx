import React, { Component } from "react";
import "./find.css"
import IconFind from "../../assets/find.svg";
import onClickOutside from 'react-onclickoutside';
import { left } from "@popperjs/core";

class Find extends Component {
    state = {
        showFindTool: false,
        sizeInput: 70,
        tips:[
            {
              /*  title: "Фрилансеры",
                original: "Frelancers",
                year: 2012,
                rating: 6.45,
                id: 123 */
            }
        ]
    };
    constructor(props) {
        super(props);
        this.sleep = this.sleep.bind(this);
        this.getWidth = this.getWidth.bind(this);
        let { findTool, hideTool } = this.props;
        this.hideTool = hideTool;
        this.SearchFilm = this.SearchFilm.bind(this);
        this.InputFilm = this.InputFilm.bind(this);
        this.FindIcon = this.FindIcon.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.SetDataToTips = this.SetDataToTips.bind(this);
        this.widthInput = 0;
        this.findToolShow = findTool;
    }
    componentDidCatch(error, info) {
        document.writeln(`Error caught by ErrorBoundary:${error} ${info}`);
    }
    async moveInput() {

       // for (let i = 70; i >= 10; i--) {
        ///    this.setState({ sizeInput: i });
        //    await this.sleep(1);
        //}

    }
    async showMenu() {
        this.findToolShow();
      //  await this.moveInput();
        this.getWidth();
        this.setState({ showFindTool: true });

    }


    //Собитія яке визивається якщо клікнули поза елементом
    handleClickOutside = () => {
        if (this.state.showFindTool) {
            this.hideFindBar();
        }

    };
    //Метод sleep
    sleep(time) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), time);
        })
    }
    async hideFindBar() {
       // for (let i = 10; i <= 70; i++) {
       //     this.setState({ sizeInput: i });
      //      await this.sleep(1);
        //}

        this.setState({ showFindTool: false, sizeInput: 70 })
        this.hideTool();

    }
    getWidth() {
        this.widthInput = document.body.offsetWidth - ((document.body.offsetWidth / 100) * 30);
    }
    SearchFilm() {
        return <p onClick={() => this.showMenu()}
            style={{
                display:
                    `${this.state.showFindTool ? "none" : "flex"}`
            }}
            className={`find-white`}>Поиск фильмов и сериалов</p>

    }

    SetDataToTips(query){
        fetch(`/api/tips?query=${encodeURIComponent(query)}`)
        .then(a=>a.json())
        .then(a=>{
            this.setState({tips:a});
        })
        .catch(()=>{
            console.log("exception");
        })
    }
    InputFilm() {
       
        let widthInput = ((window.outerWidth / 100) * 65);
        return <> 
        <input style={{
            display: this.state.showFindTool ? "flex" : "none",
            position: "relative"
            ,
            flexGrow: "1",
            color:"white",
            width: this.state.showFindTool ? `${widthInput}px` : "0"
        }} onChange={(e)=>this.SetDataToTips(e.target.value)} className="input-find inputText-find" type="textbox"></input>
        <div style={{
            display: this.state.showFindTool ? "flex" : "none"
        }} className="tips-find">        
            <ul>
                <li>
                   
                   {this.state.tips.map(a=>{
                        return <> <p className="link-find">
                        {a.title}
                      </p>
                        <p className="text-find">
                            ({a.original},{a.year})
                        </p>
                        <div className="rating-find">{a.rating}</div>
                    </>
                   })}
                </li>
                
            </ul>
            <button>Смотреть все результаты (еще 95 совпадений)</button>
        </div>

        </>
       
    }
    FindIcon() {
        return <div onClick={() => this.showMenu()} style={{
            backgroundImage: `url('${IconFind}')`,
            height: "20px",
            width: "20px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
        }}
            className="find-tool-icon">

        </div>
    }
    render() {
        let objStyle = {};
        if (!this.state.showFindTool) {
            objStyle.left = "70%";
        }
        else{
            objStyle.left = "10%";
        }
        return <div style={
            objStyle
        } className="container-find">
            <div className="cont-find">
                {this.FindIcon()}
                {this.InputFilm()}
                {this.SearchFilm()}
            </div>
        </div>
    }
}

export default onClickOutside(Find);