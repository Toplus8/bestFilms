
import React, { useContext } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase";
import { authContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom'

const SignIn = () => {
   /* const [email, setEmail]= useState('');
    const [pass, setPass]= useState('');*/
    const [email, setEmail, pass, setPass/*,authUser, setAuthUser*/] = useContext(authContext)
    
    const SignIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
       /* {authUser ? (
            
            alert(<Link to="/">Acceso concedido, pulse aquí para volver a Inicio</Link>)
              
            
          ) : (
            alert(<p>Usuario no encontrado, Vuelva a rellenar los campos o regístrese</p>)
          )}*/
        
        /*.then((userCredential)=> {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        });*/
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

