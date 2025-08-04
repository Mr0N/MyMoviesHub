import React, { useState } from "react";
import SearchPanel from "./search-panel-site/search-panel";
import "./menu.css"
import List from "./list-site/list.jsx";
import Icon from "./icon-brand-site/icon-brand";
import NetFlix from "../assets/netflix.svg";
import Find from "./find-site/find";
import { Link } from "react-router-dom";
let GetCinema = () => {
    const Cinema = [
        { name: "Вестерны", value: "westerns" },
        { name: "Семейные", value: "family" },
        { name: "Фэнтези", value: "fantasy" },
        { name: "Биографические", value: "biographical" },
        { name: "Арт-хаус", value: "art-house" },
        { name: "Боевики", value: "action" },
        { name: "Военные", value: "war" },
        { name: "Детективы", value: "detective" },
        { name: "Криминал", value: "crime" },
        { name: "Приключения", value: "adventure" },
        { name: "Драмы", value: "drama" },
        { name: "Спортивные", value: "sports" },
        { name: "Фантастика", value: "sci-fi" },
        { name: "Комедии", value: "comedy" },
        { name: "Мелодрамы", value: "melodrama" },
        { name: "Триллеры", value: "thriller" },
        { name: "Ужасы", value: "horror" },
        { name: "Мюзиклы", value: "musicals" },
        { name: "Музыкальные", value: "musical" },
        { name: "Исторические", value: "historical" },
        { name: "Документальные", value: "documentary" },
        { name: "Эротика", value: "erotica" },
        { name: "Детские", value: "kids" },
        { name: "Путешествия", value: "travel" },
        { name: "Познавательные", value: "educational" },
        { name: "Театр", value: "theater" },
        { name: "Концерт", value: "concert" },
        { name: "Стендап", value: "standup" },
        { name: "Короткометражные", value: "shorts" },
        { name: "Русские", value: "russian" },
        { name: "Украинские", value: "ukrainian" },
        { name: "Зарубежные", value: "foreign" }
    ];
    return Cinema;
}
let GetSerials = () => {
    return [
        { name: "Военные", value: "war" },
        { name: "Боевики", value: "action" },
        { name: "Арт-хаус", value: "art-house" },
        { name: "Триллеры", value: "thriller" },
        { name: "Ужасы", value: "horror" },
        { name: "Приключения", value: "adventure" },
        { name: "Семейные", value: "family" },
        { name: "Фантастика", value: "sci-fi" },
        { name: "Фэнтези", value: "fantasy" },
        { name: "Драмы", value: "drama" },
        { name: "Мелодрамы", value: "melodrama" },
        { name: "Спортивные", value: "sports" },
        { name: "Комедии", value: "comedy" },
        { name: "Детективы", value: "detective" },
        { name: "Криминал", value: "crime" },
        { name: "Исторические", value: "historical" },
        { name: "Биографические", value: "biographical" },
        { name: "Вестерны", value: "westerns" },
        { name: "Документальные", value: "documentary" },
        { name: "Музыкальные", value: "musical" },
        { name: "Реальное ТВ", value: "reality-tv" },
        { name: "Телепередачи", value: "tv-shows" },
        { name: "Стендап", value: "standup" },
        { name: "Эротика", value: "erotica" },
        { name: "Русские", value: "russian" },
        { name: "Украинские", value: "ukrainian" },
        { name: "Зарубежные", value: "foreign" }
    ];
}
let GetCartoons = () => {
    return [
        { name: "Фантастика", value: "sci-fi" },
        { name: "Фэнтези", value: "fantasy" },
        { name: "Боевики", value: "action" },
        { name: "Биографические", value: "biographical" },
        { name: "Комедии", value: "comedy" },
        { name: "Вестерны", value: "westerns" },
        { name: "Военные", value: "war" },
        { name: "Драмы", value: "drama" },
        { name: "Мелодрамы", value: "melodrama" },
        { name: "Арт-хаус", value: "art-house" },
        { name: "Детективы", value: "detective" },
        { name: "Криминал", value: "crime" },
        { name: "Триллеры", value: "thriller" },
        { name: "Исторические", value: "historical" },
        { name: "Документальные", value: "documentary" },
        { name: "Эротика", value: "erotica" },
        { name: "Сказки", value: "fairy-tales" },
        { name: "Семейные", value: "family" },
        { name: "Ужасы", value: "horror" },
        { name: "Приключения", value: "adventure" },
        { name: "Спортивные", value: "sports" },
        { name: "Познавательные", value: "educational" },
        { name: "Мюзиклы", value: "musicals" },
        { name: "Аниме", value: "anime" },
        { name: "Детские", value: "kids" },
        { name: "Для взрослых", value: "adult" },
        { name: "Мультсериалы", value: "animated-series" },
        { name: "Короткометражные", value: "shorts" },
        { name: "Полнометражные", value: "feature-length" },
        { name: "Советские", value: "soviet" },
        { name: "Русские", value: "russian" },
        { name: "Украинские", value: "ukrainian" },
        { name: "Зарубежные", value: "foreign" }
    ];
}
let GetAnime = () => {
    return [
        { name: "Военные", value: "war" },
        { name: "Драмы", value: "drama" },
        { name: "Детективы", value: "detective" },
        { name: "Триллеры", value: "thriller" },
        { name: "Комедии", value: "comedy" },
        { name: "Фантастика", value: "sci-fi" },
        { name: "Фэнтези", value: "fantasy" },
        { name: "Приключения", value: "adventure" },
        { name: "Романтические", value: "romantic" },
        { name: "Исторические", value: "historical" },
        { name: "Ужасы", value: "horror" },
        { name: "Мистические", value: "mystical" },
        { name: "Музыкальные", value: "musical" },
        { name: "Эротика", value: "erotica" },
        { name: "Боевики", value: "action" },
        { name: "Боевые искусства", value: "martial-arts" },
        { name: "Самурайский боевик", value: "samurai-action" },
        { name: "Спортивные", value: "sports" },
        { name: "Образовательные", value: "educational" },
        { name: "Повседневность", value: "slice-of-life" },
        { name: "Пародия", value: "parody" },
        { name: "Школа", value: "school" },
        { name: "Детские", value: "kids" },
        { name: "Сказки", value: "fairy-tales" },
        { name: "Кодомо", value: "kodomo" },
        { name: "Сёдзё-ай", value: "shoujo-ai" },
        { name: "Сёдзё", value: "shoujo" },
        { name: "Сёнэн", value: "shounen" },
        { name: "Сёнэн-ай", value: "shounen-ai" },
        { name: "Этти", value: "ecchi" },
        { name: "Махо-сёдзё", value: "mahou-shoujo" },
        { name: "Меха", value: "mecha" }
    ];
}


let Arrow = ({ styleData }) => {

    return <span style={styleData} className="arrow-menu" ></span>
}

let GetStyle = (action) => {
    let styleData = {
        display: "inline-block",
        transform: action() ? "rotate(180deg)" : "rotate(360deg)"
    }
    return styleData;
}

let Panel = ({ checkShowFunction, listCategory, children,findTheBestTitle,typeCinema }) => {
    return (<div className={`cinema ${checkShowFunction() ? "hide-menu" : ""}`}>
        <div className="category">
            <div className="list-category">
                <List category={typeCinema} items={listCategory} />
            </div>
            <div className="logo-category">
                {children}
            </div>
        </div>
        <div>
            <SearchPanel findTheBest={findTheBestTitle} typeCinema={typeCinema} />
        </div>


    </div>);
}
let showFindTool = () => {
    let menu = document.querySelector(".menu-item");
    if (!menu.classList.contains("showFindTool"))
        menu.classList.add("showFindTool");

}
let hideFindTool = () => {
    let menu = document.querySelector(".menu-item");
    if (menu.classList.contains("showFindTool"))
        menu.classList.remove("showFindTool");
}
let Menu = () => {
    const [obj, setHovered] = useState({ cinema: true, serials: true, cartoons: true, anime: true });

    return <div className="menu">
        <ul className="menu-item">
            <li onMouseLeave={() => setHovered({ cinema: true, serials: true, cartoons: true, anime: true })}
                onMouseEnter={() => setHovered({ cinema: false, serials: true, cartoons: true, anime: true })}>
                <p className="cinema-item item-menu">Фильмы<Arrow styleData={GetStyle(() => obj.cinema)} /></p>
                <Panel findTheBestTitle="Найти лучшие фильмы" typeCinema="cinema" checkShowFunction={() => obj.cinema}
                    listCategory={GetCinema()}>
                    <Icon pathToUri={NetFlix} width="87" heigth="25" />
                </Panel>
            </li>
            <li onMouseLeave={() => setHovered({ cinema: true, serials: true, cartoons: true, anime: true })}
                onMouseEnter={() => setHovered({ cinema: true, serials: false, cartoons: true, anime: true })}>
                <p className="serials-item item-menu">Сериалы<Arrow styleData={GetStyle(() => obj.serials)} /></p>
                <Panel findTheBestTitle="Найти лучшие сериалы" typeCinema="serials"  checkShowFunction={() => obj.serials}
                    listCategory={GetSerials()}>
                    <Icon pathToUri={NetFlix} width="87" heigth="25" />
                </Panel>
            </li>
            <li onMouseLeave={() => setHovered({ cinema: true, serials: true, cartoons: true, anime: true })}
                onMouseEnter={() => setHovered({ cinema: true, serials: true, cartoons: false, anime: true })}>
                <p className="cartoons-item item-menu">Мультфильмы<Arrow styleData={GetStyle(() => obj.cartoons)} />
                </p>
                <Panel findTheBestTitle="Найти лучшие мультфильмы" typeCinema="cartoons" checkShowFunction={() => obj.cartoons}
                    listCategory={GetCartoons()}>
                    <Icon pathToUri={NetFlix} width="87" heigth="25" />
                </Panel>
            </li>
            <li onMouseLeave={() => setHovered({ cinema: true, serials: true, cartoons: true, anime: true })}
                onMouseEnter={() => setHovered({ cinema: true, serials: true, cartoons: true, anime: false })}>
                <p className="anime-item item-menu">Аниме<Arrow styleData={GetStyle(() => obj.anime)} /></p>
                <Panel  findTheBestTitle="Найти лучшие аниме" typeCinema="anime"  checkShowFunction={() => obj.anime}
                    listCategory={GetAnime()}>
                    <Icon pathToUri={NetFlix} width="87" heigth="25" />
                </Panel>
            </li>
            <li>
                <Link to="/new" className="item-menu">Новинки</Link>
            </li>
            <li>
                <Link to="/announce" className="item-menu">Анонсы</Link>
            </li>
            <li>
                <Link to="" className="item-menu">Подборки</Link>
            </li>
        </ul>
        <div className="find-tool">
            <Find findTool={showFindTool} hideTool={hideFindTool} />
        </div>
    </div>
}
export default Menu;





