import React from "react";

export default function Paginado ({dogsForPage, allDogs, paginado}){
    const pageNumber = [];

    for(let i=0; i<=Math.ceil(allDogs/dogsForPage); i++){
        pageNumber.push(i+1)
    }
    return(
        <nav>
        <ul className="paginado">
        {pageNumber&&pageNumber.map(number =>(
            <li className="number" key={number}>
                <a href={number} onClick={()=>paginado(number)}>{number}</a>
            </li>
        ))}
        </ul>
        </nav>
    )
}