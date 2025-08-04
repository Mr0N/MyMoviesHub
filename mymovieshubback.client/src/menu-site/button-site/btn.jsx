import React, { useState, useEffect } from "react";
import "../button-site/btn.css";
import { Link } from "react-router-dom";

let vwToPx = (vw) => {
    return window.innerWidth * (vw / 100);
}
let getLength = (name) => {
    let vhToPx = vwToPx(5);
    let pixelData = name.length * 10;
    if (vhToPx < pixelData) {
        vhToPx = pixelData;
        
    }
    return vhToPx;
}
let Btn = ({ name,value,category}) => {
    let [pxLength, setLength] = useState(getLength(name));
    useEffect(() => {
        const handleResize = () => {
            setLength(getLength(name));
        };

        window.addEventListener("resize", handleResize);

        // Оновлення при монтуванні і зміні name
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [name]);


    return <Link to={`data/${category}/${value}`} style={{
        width: `120px`,
        height:"30px"
    }}
        className="btn btn-site">{name}</Link>
}
export default Btn;