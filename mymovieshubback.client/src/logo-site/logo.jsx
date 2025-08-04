import React,{Component} from "react";
import Btn from "../btn-site/btn";
import "./logo.css";
import activeLogo from "../assets/logo-activate.png";
import deactiveLogo from "../assets/logo-deactive.png";
export default class Logo extends Component
{
    constructor(){
        super();
        this.img = React.createRef();
        this.deactiveImage = this.deactiveImage.bind(this);
        this.activateImage = this.activateImage.bind(this);
    }
   
    deactiveImage() {
        this.img.current.src = activeLogo;
    }
    activateImage() {
        this.img.current.src = deactiveLogo;
    }
    render()
    {
        return (
        <div  className='img-cont-logo'>
            <img ref={this.img} onMouseOver={this.activateImage} onMouseOut={this.deactiveImage} className="image-logo active-logo" src={activeLogo}/>
        </div>
    );
    }
}

