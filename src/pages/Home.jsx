import React from 'react'
import { useState, useEffect} from 'react'
import getData from '../helpers/getData'
import AuthDetails from '../components/auth/AuthDetails'
import Films from '../components/films/Films'
import SignIn from '../components/auth/SignIn'
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
   
     return (
       
         <div className='container'>
            <SignIn  email = { email } setEmail = { setEmail } pass = { pass } setPass = { setPass } /> {/*Esto es para comprobar si funciona o no */}
           <div></div>
           <AuthDetails authUser = { authUser } setAuthUser = { setAuthUser }/>
           
           < Films films = { films } setFilms = { setFilms } findedItem = { findedItem } setFindedItem = { setFindedItem }  />
           <br />
         </div>
        
     )
    
}

export default Home