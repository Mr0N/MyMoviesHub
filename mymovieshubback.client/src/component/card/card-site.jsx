import React, { useRef, useState, useEffect } from "react";
import "./card-site.css";
import preview from "../../assets/preview.svg";
import anime from "../../assets/card/anime.svg"
import cartoons from "../../assets/card/cartoons.svg"
import movies from "../../assets/card/movies.svg"
import serials from "../../assets/card/serials.svg"
import InfoIcon from "../icon-site/info-icon";
import StarsRow from "./starRow";
import { left } from "@popperjs/core";



let BaseData = ({ color, name, icon, show, onMouseEnter, onMouseLeave }) => {

    return <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div style={{ backgroundColor: `${color}` }} className="card-block">
            <p className={!show ? "card-site-hide" : ''}>{name}</p>

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
let ShowInfo = React.forwardRef((props, ref) => {
    let Element = props.InfoIcon;
    return <div ref={ref} className="modal-show-info" >
        <div className="info-icon-modal-window">
            <div className="info-icon-modal-infoicon">
                <Element show={true} />
            </div>
        </div>
        <a className="blue-color">Title</a>
        <span className="modal-row">
            <p>Рейтинг фильма:</p>
            <p className="blue-color">5.43</p>
            <p className="blue-color">(2)</p>
        </span>
        <div><StarsRow value={2} /></div>
        <p className="description-card-site">
            Когда у Кэтрин диагностируют неизлечимую болезнь, её муж Генри обещает похоронить супругу в лесу рядом с домом, где она выросла. Однако после внезапной смерти жены мужчина нарушает обещание и под давлением её влиятельного отца Гэри возвращает тело в город....

        </p>
        <div className="genre-card-site modal-row">
            <p>Жанр:</p>
            <span className="blue-color">Фэнтези</span>
        </div>
        <div className="director-card-site modal-row">
            <p>Режисер:</p>
            <span className="blue-color">Валерио Мастерио</span>
        </div>
        <div className="starring-card-site modal-row">
            <p>В ролях:</p>
            <span className="blue-color">Валерио Мастерио</span>
        </div>
        <div className="rating-card-site modal-row">
            <p>IMDb</p>
            <p>5.9</p>
            <p>(252)</p>
        </div>
    </div>
})
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
    let modalWindow = useRef();
    useEffect(() => {

        let rectCurrentModalWindow = customWindow.current.getBoundingClientRect();

        //let infoOfCustomElement = customWindow.current.getBoundingClientRect();
        let widthWindow = window.outerWidth;
        //  console.log(`widthWindow:${widthWindow} Element:${widthWindow - rectCurrentModalWindow.right}}`);
        // let equalsResult = widthWindow-(rectCurrentModalWindow.right+rectCurrentModalWindow.width);
        //let beginElement = infoOfCustomElement.left;
        //let endElement = beginElement + (rectCurrentModalWindow.width+(rectCurrentModalWindow.width/100)*40);
        //let percent = (endElement / 100) * 30;
        let rigthElement = widthWindow - rectCurrentModalWindow.right;
        let percent = widthWindow / 100;
        let percentDeviation = rigthElement / percent;
        if (percentDeviation > 50)
            setLeftPosition(100);
        else setLeftPosition(-130);
    }, []);

    return <div
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className="card-container" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>

        <div ref={customWindow} className="card-header">
            <div onMouseEnter={() => setCard(true)} onMouseLeave={() => setCard(false)}>
                <div>
                    {objShow ? <ElementInfo />
                        : <ElementInfo show={true} />}
                </div>
                <div style={{ left: `${leftPosition}%`, top: "-32%" }} ref={cardHeaderRef} className={objCardHeader ? `show-info` : `show-info card-site-hide`}>
                    <ShowInfo ref={modalWindow} InfoIcon={ElementInfo} height={`${widthModalWindow}px`} width={`${widthModalWindow}px`} />
                </div>
            </div>


        </div>
        <div className="card-trailer" onMouseLeave={() => setViewTrailer(false)} >
            <div className="card-trailer-container">
                <div className={objShow ? "card-opacity  card-header-icon-trailer" : "card-header-icon-trailer"} onMouseEnter={() => setViewTrailer(true)} >
                    <img className="card-icon-trailer" src={preview}></img>
                </div>
                <div className={objViewTrailer ? "card-trailer-site card-opacity" : "card-trailer-site card-hide"}>
                    <p style={{
                        textTransform: "upper",
                        color: "white",
                        fontSize: "12px",
                        left:"0"
                    }} >Смотреть трейлер</p>
                </div>
            </div>
        </div>
        <div className="card-icon">
            <img className={`card-icon-img ${!objShow ? "card-hide" : ""}`} src={preview}></img>
        </div>
        <div className="card-footer">
            <p className="card-footer-txt">1 сезон, 6 серия</p>

        </div>
    </div>
}
class Data {
    movies = false;
    anime = false;
    cartoons = false;
    serials = false;
}
export { MoviesCard, SerialsCard, AnimeCard, CartoonsCard };