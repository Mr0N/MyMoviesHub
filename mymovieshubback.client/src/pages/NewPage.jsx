import React  from "react";
import Head from "../header-site/head"
import Menu from "../menu-site/menu"
import { useLocation } from "react-router-dom";
let NewPage = ()=>{
      const location = useLocation();

  // Функція для парсингу query string
  const queryParams = new URLSearchParams(location.search);
  const txt = queryParams.get('txt'); // тут буде "32332" якщо URL /new?txt=32332
    return <div style={{height:"1000px",
                    width:"500px",
                    backgroundColor:"white",
                    paddingTop:"500px"
    }}>
    
        {txt}
    </div>
}
export default NewPage;