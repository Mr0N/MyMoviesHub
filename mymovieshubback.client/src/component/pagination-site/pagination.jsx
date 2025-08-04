import React from "react";
import "./pagination.css";
import { MoviesCard, SerialsCard, AnimeCard, CartoonsCard } from "../card/card-site";
import tempImage from "../../assets/temp-image.jpg";
let Pagination = () => {
    return <div className="container">
        <div className="row">

            <div className="col-2">
                <MoviesCard backgroundImg={tempImage} />
            </div>
            <div className="col-2">
                <SerialsCard backgroundImg={tempImage} />
            </div>
            <div className="col-2">
                <AnimeCard backgroundImg={tempImage} />
            </div>
            <div className="col-2">
                <CartoonsCard backgroundImg={tempImage} />
            </div>
             <div className="col-2">
                <CartoonsCard backgroundImg={tempImage} />
            </div>
            <div className="col-2">
                <CartoonsCard backgroundImg={tempImage} />
            </div>
        </div>
        <div className="row">
            <div className="col-2">
                <MoviesCard backgroundImg={tempImage} />
            </div>
            <div className="col-2">
                <SerialsCard backgroundImg={tempImage} />
            </div>
            <div className="col-2">
                <AnimeCard backgroundImg={tempImage} />
            </div>
            <div className="col-2">
                <CartoonsCard backgroundImg={tempImage} />
            </div>
            <div className="col-2">
                <CartoonsCard backgroundImg={tempImage} />
            </div>
            <div className="col-2">
                <CartoonsCard backgroundImg={tempImage} />
            </div>
        </div>
    </div>

}
export default Pagination;