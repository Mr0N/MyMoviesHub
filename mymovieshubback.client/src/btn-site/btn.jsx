import React from "react";
import "../btn-site/btn.css"

let btn = ({name,image})=>{
   return(<div  className="btn-site">
      <img src={image}></img>
      <div className="title-btn">
         {name}
      </div>
   </div>)
}
export default btn;