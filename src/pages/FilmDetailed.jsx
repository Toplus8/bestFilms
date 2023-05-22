import React from 'react'
import FilmDetails from '../components/filmDetails/FilmDetails'
import { useParams } from 'react-router-dom';
import getData from '../helpers/getData';

const FilmDetailed = ({films}) => {
  
  const { id } = useParams();
  /*console.log(id)*/
  const filmSelected = films.find( film => film.id === id )
    
  /*const params = useParams(); /*Sirve para consumir el Id */
  
  return (
    <div>
      hola
     < FilmDetails film = { filmSelected } />
    </div>
  )
}

export default FilmDetailed