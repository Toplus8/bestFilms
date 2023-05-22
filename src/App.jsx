import { useState, useEffect} from 'react'
import Films from './components/films/Films'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import './App.css'
import getData from './helpers/getData'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import AuthDetails from './components/auth/AuthDetails'

function App() {
 /*const [films, setFilms] = useState([])
 const [findedItem, setFindedItem] = useState("")
 
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
        <SignIn />
        <AuthDetails />
        <SignUp />
        <br />
        <Films films = { films } setFilms ={ setFilms } findedItem = { findedItem } setFindedItem = { setFindedItem } />
        <br />
      </div>
     
  )*/
}

export default App

/*La página debe tener las siguientes funcionalidades: 
ruta: /
Nav en lo alto, buscador debajo centrado y películas abajo.
cada vez que buscamos en el buscador se realiza un filtrado de las películas existentes que contengan el caracter y que salga la película.
En cada película aparece el poster y su nombre. Al hacer click en la tarjeta se redirecciona a /peliculas/idPeli. Ahí aparece el poster en grande,
el título y cualquier otro dato de interés. Añadir un botón de volver al principal.
Implementar un login con firebase o de otra forma
 */