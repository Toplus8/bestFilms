
import React, { useContext } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
   
    const [email, setEmail, pass, setPass] = useContext(authContext)
    const navigate = useNavigate();
    const SignUp = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, pass)
        alert("Va a ser redirigido a la página de acceso")
        navigate("/acceso")
          
    }
  return (
    <div className='sign-in-container'>
        <form onSubmit={SignUp}>
            <h2>Registro de nuevo usuario</h2>
            <input type="email" placeholder='Introduzca su email' value={ email } onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder='Introduzca su contraseña' value={ pass } onChange={(e) => setPass(e.target.value)}></input>
            <button type="submit">Registrarse</button>
        </form>    
    </div>
  )
}

export default SignUp