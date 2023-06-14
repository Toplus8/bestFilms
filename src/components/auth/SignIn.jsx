
import React, { useContext } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase";
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
   
    const [email, setEmail, pass, setPass, authUser] = useContext(authContext)
    const navigate = useNavigate();

    const SignIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
        navigate("/")
           
    }
  return (
    <div className='sign-in-container'>
        <form onSubmit={SignIn}>
            <h2>Acceso usuario</h2>
            <input type="text" placeholder='Introduzca su email' value={ email } onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder='Introduzca su contraseña' value={ pass } onChange={(e) => setPass(e.target.value)}></input>
            <button type="submit">Acceder</button> 
        </form>    
    </div>
  )
}

export default SignIn

