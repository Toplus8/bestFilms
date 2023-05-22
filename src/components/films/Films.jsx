import React, { useEffect } from 'react'
import { useState } from 'react'
import getData from '../../helpers/getData'
import FilmCard from '../filmCard/FilmCard'
import films from './films.css'
import SearchBar from '../searchBar/SearchBar'
import { Link } from "react-router-dom";
/*import FilmDetails from '../filmDetails/FilmDetails'*/


const Films = ({films, findedItem, setFindedItem}) => {
  
  return (
    <div>
      < SearchBar films ={ films } findedItem = { findedItem } setFindedItem = { setFindedItem } />
      < br/>
      <div className='filmContainer'>
      { /*Esto hace funcionar el buscador */
      films.filter((film) =>
          film.original_title.toLowerCase().includes(findedItem.toLowerCase())
        )
        .map((film) => (
          <div key={film.id} className='cardFilm'>
            <Link to={`/peliculas/${film.id}`}> < FilmCard card={film} /> </Link>
           
          {/*Esto es para ver si funciona < FilmDetails film={film} /> */}
          </div>
            
      ))}
      
      </div>
    </div>
    
  )
}

export default Films

/*Ejemplo de como es el link a películas <Link to="/peliculas/${film.id}">< FilmCard card={film}/></Link> */
