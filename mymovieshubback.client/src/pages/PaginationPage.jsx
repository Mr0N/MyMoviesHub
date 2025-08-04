import React from "react";
import { useParams } from "react-router-dom";
import Pagination from "../component/pagination-site/pagination";
let PaginationPage = () => {
    let { category, subcategory } = useParams();
    return <div> 
      
     <p>{category}   {subcategory}</p>
   
     <Pagination/>
     
    </div>
}
export default PaginationPage;