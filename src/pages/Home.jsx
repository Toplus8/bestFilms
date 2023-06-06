import React from 'react'
import { useState, useEffect} from 'react'
import getData from '../helpers/getData'
import AuthDetails from '../components/auth/AuthDetails'
import Films from '../components/films/Films'
import SignIn from '../components/auth/SignIn'
import FilmDetailed from './FilmDetailed'
import './home.css'

const Home = () => {
  
    const [films, setFilms] = useState([])
    const [findedItem, setFindedItem] = useState("")
    /*const [email, setEmail]= useState('');
    const [pass, setPass]= useState('');*/
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
     
     return (
       
         <div className='container'>
           <div className='authDetails'>
            < AuthDetails authUser = { authUser } setAuthUser = { setAuthUser } />
           </div>
           
          
          {authUser ? (
            <>
              < Films films = { films } setFilms = { setFilms } findedItem = { findedItem } setFindedItem = { setFindedItem } />
              <br />
            </>
      ) : (
        <h2 className='advise'>Para disfrutar de todo el contenido que ofrece la aplicación regístrese o acceda con su perfil.</h2>
      )}
           
         </div>
        
     )
    
}

export default Home
