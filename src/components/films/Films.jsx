import React, { useEffect } from 'react'
import { useState } from 'react'
import getData from '../../helpers/getData'
import FilmCard from '../filmCard/FilmCard'
import films from './films.css'
import SearchBar from '../searchBar/SearchBar'
import { Link } from "react-router-dom";

const Films = ({films, findedItem, setFindedItem}) => {
  
  return (
    <div>
      < SearchBar films ={ films } findedItem = { findedItem } setFindedItem = { setFindedItem }/>
      < br/>
      <div className='filmContainer'>
      {films.filter((film) =>
          film.original_title.toLowerCase().includes(findedItem.toLowerCase())
        )
        .map((film) => (
            <div key={film.original_title} className='cardFilm'>
           < FilmCard card={film}/>  
            </div>
      ))}
      
    </div>
    </div>
    
  )
}

export default Films

/*Ejemplo de como es el link a películas <Link to="/peliculas/">< FilmCard card={film}/></Link> */
