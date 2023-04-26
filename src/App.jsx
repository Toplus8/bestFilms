import { useState } from 'react'
import Films from './components/films/Films'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Nav />
        <br />
        <Films />
        <br />
        <Footer />
      </div>
     
  )
}

export default App
