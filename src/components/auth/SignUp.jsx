import { useState } from "react"
import React from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"

const SignUp = () => {
    const [email, setEmail]= useState('');
    const [pass, setPass]= useState('');

    const SignUp = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential)=> {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        });
    }
  return (
    <div className='sign-in-container'>
        <form onSubmit={SignUp}>
            <h2>Registro de nuevo usuario</h2>
            <input type="email" placeholder='Introduzca su nombre' value={ email } onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder='Introduzca su contraseña' value={ pass } onChange={(e) => setPass(e.target.value)}></input>
            <button type="submit">Registrarse</button>
        </form>    
    </div>
  )
}

export default SignUp