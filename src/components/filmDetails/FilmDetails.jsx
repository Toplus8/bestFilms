import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import filmDetails from './filmDetails.css'

const FilmDetails = ({data}) => {
   
  return (
    <div>
        <h2>{data.original_title}</h2>
        <img src={`https://image.tmdb.org/t/p/w780${data.poster_path}`}></img>
        <p> {data.overview} </p>
        <p className='average'> Valoración: {data.vote_average} </p>
        <Link to="/">Volver a la página inicial</Link> 
    </div>
  )
}

export default FilmDetails