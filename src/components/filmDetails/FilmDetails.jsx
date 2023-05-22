import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const FilmDetails = ({film}) => {
   
  return (
    <div>
        <h2>{film.original_title}</h2>
        <img src={`https://image.tmdb.org/t/p/w780${film.poster_path}`}></img>
        <p> {film.overview} </p>
        <p> Valoración: {film.vote_average} </p>
        <Link to="/">Volver a la página inicial</Link> 
    </div>
  )
}

export default FilmDetails