import { useState } from 'react'
import Films from './components/films/Films'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import SearchBar from './components/searchBar/SearchBar'
import './App.css'

function App() {
  

  return (
    
      <div className='container'>
        <Nav />
        <br />
        <SearchBar />
        <br />
        <Films />
        <br />
        <Footer />
      </div>
     
  )
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