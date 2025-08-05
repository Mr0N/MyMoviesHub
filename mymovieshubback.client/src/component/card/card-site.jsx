import React, { useRef, useState, useEffect } from "react";
import "./card-site.css";
import preview from "../../assets/preview.svg";
import anime from "../../assets/card/anime.svg"
import cartoons from "../../assets/card/cartoons.svg"
import movies from "../../assets/card/movies.svg"
import serials from "../../assets/card/serials.svg"
import InfoIcon from "../icon-site/info-icon";
let BaseData = ({ color, name, icon, show, onMouseEnter, onMouseLeave }) => {

    return <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div style={{ backgroundColor: `${color}` }} className="card-block">
            <p className={!show ? "card-site-hide" : ""}>{name}</p>

            {show ? <img className="card-icon-data" src={icon}></img> : <InfoIcon style={{ height: "20px", width: "20px" }} className="card-info card-icon-data" />}
        </div>

    </div>
}
let Anime = ({ show, onMouseEnter, onMouseLeave }) => {
    return <BaseData onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} color="#696969" name="Аниме" show={show} icon={anime} />
}
let Cartoons = ({ show, onMouseEnter, onMouseLeave }) => {
    return <BaseData onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} color="#216d2b" name="Мультфильмы" show={show} icon={cartoons} />
}
let Serials = ({ show, onMouseEnter, onMouseLeave }) => {
    return <BaseData onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} color="#df565a" name="Сериалы" show={show} icon={serials} />
}
let Movies = ({ show, onMouseEnter, onMouseLeave }) => {
    return <BaseData onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} color="#00a0b0" name="Фильмы" show={show} icon={movies} />
}
let AnimeCard = ({ backgroundImg }) => {
    let data = new Data();
    data.anime = true;
    return <Card backgroundImg={backgroundImg} data={data} />
}
let CartoonsCard = ({ backgroundImg }) => {
    let data = new Data();
    data.cartoons = true;
    return <Card backgroundImg={backgroundImg} data={data} />
}
let SerialsCard = ({ backgroundImg }) => {
    let data = new Data();
    data.serials = true;
    return <Card backgroundImg={backgroundImg} data={data} />
}
let MoviesCard = ({ backgroundImg }) => {
    let data = new Data();
    data.movies = true;
    return <Card backgroundImg={backgroundImg} data={data} />
}
let ShowInfo = ({ width, height }) => {
    return <div className="modal-show-info" style={{ height: height, width: width }}>
        <a className="blue-color">Title</a>
        <span className="modal-row">
            <p>Рейтинг фильма:</p>
            <p>5.43</p>
            <p>(2)</p>
        </span>
        <div>Зірки</div>
        <p className="description-card-site">Description</p>
        <div className="genre-card-site modal-row">
            <p>Жанр:</p>
            <span>Фэнтези</span>
        </div>
        <div className="director-card-site modal-row">
            <p>Режисер:</p>
            <span>Валерио Мастерио</span>
        </div>
        <div className="starring-card-site modal-row">
              <p>В ролях:</p>
            <span>Валерио Мастерио</span>
        </div>
        <div className="rating-card-site modal-row">
            <p>IMDb</p>
            <p>5.9</p>
            <p>(252)</p>
        </div>
    </div>
}
let Card = ({ backgroundImg, data }) => {
    let [objShow, setShow] = useState(false);
    let [objViewTrailer, setViewTrailer] = useState(false);
    let [objCardHeader, setCard] = useState(false);
    let [leftPosition, setLeftPosition] = useState(100);
    let cardHeaderRef = useRef();

    let ElementInfo = null;
    if (data.anime)
        ElementInfo = Anime;
    else if (data.movies)
        ElementInfo = Movies;
    else if (data.serials) ElementInfo = Serials;
    else if (data.cartoons) ElementInfo = Cartoons;
    let widthModalWindow = 250;
    let customWindow = useRef();
    useEffect(() => {
        let widthWindow = window.innerWidth;
        let infoOfElement = customWindow.current.getBoundingClientRect();
        let beginElement = infoOfElement.left;
        let endElement = beginElement + widthModalWindow;
        let percent = (endElement / 100) * 30;
        if ((endElement + percent) > widthWindow)
            setLeftPosition(-70);
        else setLeftPosition(100);
    }, []);

    return <div
        style={{ height: "250px", width: "166px", backgroundImage: `url(${backgroundImg})` }}
        className="card-container" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>

        <div ref={customWindow} className="card-header">

            {objShow ? <ElementInfo onMouseEnter={() => setCard(true)} onMouseLeave={() => setCard(false)} /> : <ElementInfo onMouseEnter={() => setCard(true)} onMouseLeave={() => setCard(false)} show={true} />}
            <div style={{ left: `${leftPosition}%` }} ref={cardHeaderRef} className={objCardHeader ? `show-info` : `show-info card-site-hide`}>
                <ShowInfo height="200px" width={`${widthModalWindow}px`} />
            </div>

        </div>
        <div className="card-trailer" onMouseLeave={() => setViewTrailer(false)} >
            <div className={objShow ? "card-opacity" : ""} onMouseEnter={() => setViewTrailer(true)} className="card-header-icon-trailer">
                <img className="card-icon-trailer" src={preview}></img>
            </div>
            <div className={objViewTrailer ? "card-trailer-site card-opacity" : "card-trailer-site card-hide"}>
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
class Data {
    movies = false;
    anime = false;
    cartoons = false;
    serials = false;
}
export { MoviesCard, SerialsCard, AnimeCard, CartoonsCard };