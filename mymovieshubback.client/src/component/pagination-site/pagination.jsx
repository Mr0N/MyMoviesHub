import React from "react";
import "./pagination.css";
import {
  MoviesCard,
  SerialsCard,
  AnimeCard,
  CartoonsCard
} from "../card/card-site";
import tempImage from "../../assets/temp-image.jpg";

const Pagination = () => {
  return (
    <div className="container my-4">
      <div className="row g-1">
        <div className="col-12 col-sm-6 col-md-3 col-lg-2">
          <MoviesCard backgroundImg={tempImage} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-lg-2">
          <SerialsCard backgroundImg={tempImage} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-lg-2">
          <AnimeCard backgroundImg={tempImage} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-lg-2">
          <CartoonsCard backgroundImg={tempImage} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-lg-2">
          <CartoonsCard backgroundImg={tempImage} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-lg-2">
          <CartoonsCard backgroundImg={tempImage} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-lg-2">
          <MoviesCard backgroundImg={tempImage} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-lg-2">
          <SerialsCard backgroundImg={tempImage} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-lg-2">
          <AnimeCard backgroundImg={tempImage} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-lg-2">
          <CartoonsCard backgroundImg={tempImage} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-lg-2">
          <CartoonsCard backgroundImg={tempImage} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-lg-2">
          <CartoonsCard backgroundImg={tempImage} />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
