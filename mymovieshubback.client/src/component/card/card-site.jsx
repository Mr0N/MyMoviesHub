import React, { useRef, useState,useEffect } from "react";
import "./card-site.css";
import preview from "../../assets/preview.svg";
import anime from "../../assets/card/anime.svg"
import cartoons from "../../assets/card/cartoons.svg"
import movies from "../../assets/card/movies.svg"
import serials from "../../assets/card/serials.svg"
import InfoIcon from "../icon-site/info-icon";
let BaseData = ({color,name,icon,show})=>{
   
    return <div>
        <div style={{backgroundColor:`${color}`}} className="card-block">
            <p className={!show ? "card-site-hide":""}>{name}</p>
            {show ? <img className="card-icon-data" src={icon}></img>:<InfoIcon style={{ height: "20px", width: "20px" }} className="card-info card-icon-data" />}    
        </div>
        
    </div>
}
let Anime = ({show}) => {
    return   <BaseData color="#696969" name="Аниме" show={show} icon={anime}/>
}
let Cartoons = ({show}) => {
     return   <BaseData color="#216d2b" name="Мультфильмы"  show={show}  icon={cartoons}/>
}
let Serials = ({show}) => {
    return   <BaseData color="#df565a" name="Сериалы"  show={show}  icon={serials}/>
}
let Movies = ({show}) => {
    return   <BaseData color="#00a0b0" name="Фильмы" show={show}  icon={movies}/>
}
let AnimeCard = ({ backgroundImg }) => {
    let data = new Data();
    data.anime = true;
    return <Card backgroundImg={backgroundImg} data={data} />
}
let CartoonsCard = ({ backgroundImg }) => {
        let data = new Data();
    data.cartoons = true;
    return <Card backgroundImg={backgroundImg}  data={data}/>
}
let SerialsCard = ({ backgroundImg }) => {
        let data = new Data();
    data.serials = true;
    return <Card backgroundImg={backgroundImg} data={data}/>
}
let MoviesCard = ({ backgroundImg }) => {
        let data = new Data();
    data.movies = true;
    return <Card backgroundImg={backgroundImg} data={data}/>
}
let ShowInfo = ()=>
    {
        return <div>
             <a className="blue-color">Title</a>
        </div>
    }
let Card = ({ backgroundImg,data}) => {
    let [objShow, setShow] = useState(false);
    let [objViewTrailer, setViewTrailer] = useState(false);
    let [objCardHeader,setCard] = useState(false);
    let [tooltipPosition, setTooltipPosition] = useState("right");
    let cardHeaderRef = useRef();

    let ElementInfo = 0;
    if(data.anime)
        ElementInfo = Anime;
    else if(data.movies) 
        ElementInfo = Movies;
    else if(data.serials) ElementInfo = Serials;
    else if(data.cartoons) ElementInfo = Cartoons;
    let dragLeave = ()=>{
         setCard(false);
    }




    return <div
        style={{ height:"250px",width:"166px",backgroundImage:`url(${backgroundImg})` }}
        className="card-container" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
         
            <div onMouseEnter={()=>setCard(true)} onMouseLeave={dragLeave}  className="card-header">
            {objShow ? <ElementInfo show={false}/>:<ElementInfo show={true}/>}
                <div ref={cardHeaderRef} className={objCardHeader ? `show-info show-info-${tooltipPosition}`: `show-info card-site-hide`}>
                   <ShowInfo/>
                </div>
            </div>
            <div className="card-trailer" onMouseLeave={() => setViewTrailer(false)} >
                <div className={objShow ? "card-opacity" : ""} onMouseEnter={() => setViewTrailer(true)} className="card-header-icon-trailer">
                    <img className="card-icon-trailer" src={preview}></img>
                </div>
                <div class={objViewTrailer ? "card-trailer-site card-opacity" : "card-trailer-site card-hide"}>
                    <p style={{
                        textTransform: "upper",
                        color: "white",
                        fontSize: "10px"
                    }} >Смотреть трейлер</p>
                </div>
            </div>
            <div className="card-icon">
                <img className={`card-icon-img ${!objShow ? "card-hide" : ""}`} src={preview}></img>
            </div>
            <div className="card-footer">4</div>
    </div>
}
class Data
{
    movies = false;
    anime = false;
    cartoons=false;
    serials=false;
}
export { MoviesCard, SerialsCard, AnimeCard, CartoonsCard };