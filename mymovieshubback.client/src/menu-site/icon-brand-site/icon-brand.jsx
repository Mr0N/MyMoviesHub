import React,{Component} from "react";


export default class IconBrand extends Component 
{
    
    render()
    {
        let {pathToUri,width,heigth} = this.props;
        return <div 
                style={{backgroundImage:`url(${pathToUri})`,
                        width:width+'px',
                        height:heigth+'px',
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        fill:"green"
                    }}>
                </div>
       
    }
}