import React from 'react'
import { useState, useEffect} from 'react'
import getData from '../helpers/getData'
import AuthDetails from '../components/auth/AuthDetails'
import Films from '../components/films/Films'
import SignIn from '../components/auth/SignIn'
import FilmDetailed from './FilmDetailed'
const Home = () => {
  
    const [films, setFilms] = useState([])
    const [findedItem, setFindedItem] = useState("")
    const [email, setEmail]= useState('');
    const [pass, setPass]= useState('');
    const [authUser, setAuthUser] = useState(null);
    
        
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
   /*< FilmDetailed films = { films } /> SE PUEDE USAR ESTO AQUI PARA COGER DATOS PERO NO MOSTRARLOS??*/
   
     return (
       
         <div className='container'>
          {/*Esto es para comprobar si funciona o no el acceso*/}
           < SignIn  email = { email } setEmail = { setEmail } pass = { pass } setPass = { setPass } /> 
          {/*Esto es para comprobar si funciona o no el acceso*/}
           < AuthDetails authUser = { authUser } setAuthUser = { setAuthUser } />
           < Films films = { films } setFilms = { setFilms } findedItem = { findedItem } setFindedItem = { setFindedItem } />
           <br />
         </div>
        
     )
    
}

export default Home
