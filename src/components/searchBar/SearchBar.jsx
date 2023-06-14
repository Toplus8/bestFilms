import React from 'react'


const SearchBar = ({setFindedItem}) => {
  
  
function searchFilms(e) {
  let filmsFinded = e.toLowerCase()
  setFindedItem(filmsFinded)
 
}
 
  return (
    <div>
      <input type='search' placeholder='Busca tu película' onKeyUp={(e) => searchFilms(e.target.value)} ></input> &nbsp;
    </div>
    
  )
}

export default SearchBar