import React, { useState } from "react";
import  "./toggle.css";
import Image from "../assets/moon-sun.svg"

let sleep = async (time)=>{
   return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },time)
    });
};
let toogleOn = async ()=>{
   let selectToogle =  document.querySelector(".slider");
  
   for(let i=0;i <= 50;i++)
    {
        await sleep(2);
        selectToogle.style.left =`${i}%`;
    }
}
let toogleOff = async ()=>{
   let selectToogle =  document.querySelector(".slider");
    let togls = document.querySelector(".toggle-toggle");
   let decimal = togls.scrollWidth/100;
   let  begin = 100-((selectToogle.scrollWidth/decimal));
   console.log(begin);
   for(let i=begin;i >= 0;i--)
    {
        
        await sleep(1);
        selectToogle.style.left =`${i}%`;
    }
}
let Toggle = ({on,off})=>{


    let [isOn, setIsOn] = useState(false);
    let toogleOffAsync = async ()=>{
       await toogleOff();
       setIsOn(false);
    }
    let toogleOnAsync = async()=>{
       await toogleOn()
       setIsOn(true);
    };
    let change = async ()=>{
        if(isOn){
            
            await toogleOffAsync();
            on();
        }
        else{
            await toogleOnAsync();
            off();
        }
    }

     
    return (
        <div>
            <div onClick={change} 
            className="toggle-toggle sun-background-toggle"
            style={{backgroundImage:`url("${Image}")`,
                    backgroundPositi3on:'center',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:"cover"}}>
                
                 <div  className="slider slider-on">  
                 </div>
            </div>
        </div>
    );
}
export default Toggle;
