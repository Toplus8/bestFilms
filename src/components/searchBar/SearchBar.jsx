import React from 'react'

const SearchBar = ({films, setFilms}) => {
  //const resultado = animales.filter(animal => animal != 'oso');

function handleKeyPress(e) {
  let prueba = films.filter(element =>element.original_title.includes(e))
  /*setFilms(films.filter(film => film.original_title =e))*/
  console.log( prueba )
}
 
  return (
    <div>
      <input type='search' placeholder='Busca tu película' onKeyDown={(e) => handleKeyPress(e.target.value)} ></input> &nbsp;
    </div>
    /*{ e=> setFilms(films.filter(film => film.original_title =e.target.value))} */
  )
}

export default SearchBar