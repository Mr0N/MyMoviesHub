import React from "react";
import "./list.css";
import Btn from "../button-site/btn";

let List = ({ items,category }) => {
    let array = items;
    return <div
        className="container-list" >
        <ul className="ul-list">
            {array.map((a, index) => {
                return <li key={index}>
                    <Btn value={a.value} category={category} name={a.name} />
                    </li>
            })}
        </ul>
    </div>
}
export default List;