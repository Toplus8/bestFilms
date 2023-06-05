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
          
           < AuthDetails authUser = { authUser } setAuthUser = { setAuthUser } />
          
          {authUser ? (
            <>
              < Films films = { films } setFilms = { setFilms } findedItem = { findedItem } setFindedItem = { setFindedItem } />
              <br />
            </>
      ) : (
        <p>Por favor, regístrese para acceder a los contenidos.</p>
      )}
           
         </div>
        
     )
    
}

export default Home
