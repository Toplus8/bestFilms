import React from 'react'
import { useState} from 'react'

const SearchBar = ({setFindedItem}) => {
  //const resultado = animales.filter(animal => animal != 'oso');
  
  
function searchFilms(e) {
  let filmsFinded = e.toLowerCase()
  setFindedItem(filmsFinded)
 
}
 
  return (
    <div>
      <input type='search' placeholder='Busca tu película' onKeyUp={(e) => searchFilms(e.target.value)} ></input> &nbsp;
    </div>
    /*{ e=> setFilms(films.filter(film => film.original_title =e.target.value))} */
  )
}

export default SearchBar