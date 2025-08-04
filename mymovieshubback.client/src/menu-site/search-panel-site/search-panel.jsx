import React, { useState } from "react";
import "./search-panel.css"
import Select, { components } from 'react-select';
import { useNavigate, createSearchParams } from "react-router-dom";

let Values = () => {
    let values = [

        "Военные",
        "Драмы",
        "Детективы",
        "Триллеры",
        "Комедии",
        "Фэнтези",
        "Приключения",
        "Романтические",
        "Исторические",
        "Ужасы",
        "Мистические",
        "Музыкальные",
        "Эротика",
        "Боевики",
        "Боевые искусства",
        "Самурайский боевик",
        "Спортивные",
        "Образовательные",
        "Повседневность",
        "Пародия",
        "Школа",
        "Детские",
        "Сказки",
        "Кодомо",
        "Сёдзё-ай",
        "Сёдзё",
        "Сёнэн",
        "Сёнэн-ай",
        "Этти",
        "Махо-сёдзё",
        "Меха"
    ];
    return values;
}
let Years = () => {
    let years = [];
    for (let i = 1930; i <= 2026; i++) {
        years.push(i);
    }
    return years;
}
let Option = (props) => {
    return (
        <components.Option {...props}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{props.label}</span>
                {props.isSelected && <span style={{ color: 'black', fontWeight: 'bold', paddingLeft: "15px" }}>✔️</span>}
            </div>
        </components.Option>
    );
};
let CreateSelect = (placehold, values, onChange) => {

    return <div>
        <Select options={values.map(a => {
            return { value: a, label: a }
        })}
            placeholder={placehold}
            menuPlacement="top"
            onChange={onChange}
            components={{ Option }}
            styles={{
                option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isSelected
                        ? '#505050'        // трохи світліший, коли вибрано
                        : state.isFocused
                            ? '#3a3a3a'        // при наведенні
                            : '#313131',       // звичайний фон
                    color: 'white',
                    cursor: 'pointer',
                }),
                container: (provided) => ({
                    ...provided,
                    width: 200,
                }),
                control: (provided) => ({
                    ...provided,
                    width: 200,
                }),
                menu: (provided) => ({
                    ...provided,
                    width: 200,
                    maxHeight: 174,
                    overflow: "hidden",
                    backgroundColor: '#313131'
                })
            }}
        />
    </div>
}

let SearchPanel = ({ findTheBest = 'Найти лучшее аниме', typeCinema = 'anime' }) => {

    let [cinemaData, setStateCinema] = useState({ genre: "", years: 2025 });
    let navigate = useNavigate();
    let onHandlerMove = (info) => {
        info.preventDefault();
        let params = {
            genre: cinemaData.genre,
            years: cinemaData.years,
            cinema:typeCinema
        };
        navigate({
            pathname: "/info",
            search: createSearchParams(params).toString()
        });
    }
    return <form onSubmit={onHandlerMove} className="search-panel-c">
        <div className="search-panel-item">
            <p className="search-p">{findTheBest}</p>
        </div>
        <div className="search-panel-item">
            {CreateSelect("Выберете жанр:",
                Values(), a => {
                    setStateCinema({ genre: a.value, years: cinemaData.years })
                })}
        </div>
        <div className="search-panel-item">
            {CreateSelect("За все время:", Years()
                .sort((a, b) => b - a), typeCinema,
                a => {
                    setStateCinema({ genre: cinemaData.genre, years: a.value })
                })
            }
        </div>

        <div className="search-panel-item">
            <button className="btn btn-search">Поехали!</button>
        </div>

    </form>
}
export default SearchPanel;