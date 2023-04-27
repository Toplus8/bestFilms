import React from 'react'
import filmCard from './filmCard.css'

const FilmCard = ({card}) => {
  return (
    <div className='filmCard'>
        <img src={`https://image.tmdb.org/t/p/w300${card.poster_path}`}></img>
        <h3>{card.original_title}</h3>
    </div>
  )
}

export default FilmCard