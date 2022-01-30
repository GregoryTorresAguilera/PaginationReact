import { useState } from "react";
import "./Pagination.css";

export default function Pagination({ getCharacters,getLocations,totalPages }) {
  const [actualPage, setActualPage] = useState(1);

  const pages = totalPages.pages;

  const changePage = (actualPage) => {
    setActualPage(actualPage);
    if(getCharacters) {
      getCharacters(actualPage)
    } else {
      getLocations(actualPage)
    }

  }
  return (

   
    

    <div className="pagination">
      {actualPage > 1 ? <button className="button" onClick={() => changePage(actualPage - 1)}>⬅</button> : <button hidden></button> }
  
      <span> {actualPage} </span>
      {actualPage < pages ? <button className="button" onClick={() => changePage(actualPage + 1)}>➡</button> : <button hidden></button> }
      
    </div>
  );
}