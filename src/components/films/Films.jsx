import React, { useEffect } from 'react'
import { useState } from 'react'
import getData from '../../helpers/getData'


const Films = () => {

  const [films, setFilms]=useState([])  
  
  useEffect (()=> {
    getDetails();
  }, []);
  const getDetails = () => {
    getData('https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&api_key=1c8eba188e0ddf2a4dc3938ff158ec4b')
    .then((data) => {
        setFilms(data.results);
    })
      .catch((error) => console.error(error));
  }
   
  
  return (
    <div>
      {films.map((film, index) => (
            <div key={film.original_title}>
            {film.original_title}
                     
            </div>
           
        ))}
      
    </div>
  )
}

export default Films

// src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2"+data.poster_path}
//'https://api.themoviedb.org/3/movie/550?api_key=1c8eba188e0ddf2a4dc3938ff158ec4b'