import React, { useState, useEffect } from 'react'
import FilmDetails from '../components/filmDetails/FilmDetails'
import { useParams } from 'react-router-dom';
import getDataById from '../helpers/getDataById';

const FilmDetailed = () => {
  
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    getData();
  }, [id]);
  
 const getData = () => {
  getDataById(id)
  .then((movie) => {
    setMovie(movie);
  })
  .catch((error) => console.error(error));
 };
  
  return (
    <div>
     < FilmDetails data = { movie } />
    </div>
  )
}

export default FilmDetailed

/*const FilmDetailed = ({films}) => {
  
  const { id } = useParams();
  /*console.log(id)
  const filmSelected = films.find( film => film.id === id )
    
  /*const params = useParams(); /*Sirve para consumir el Id 
  
  return (
    <div>
      hola
     < FilmDetails film = { filmSelected } />
    </div>
  )
} */