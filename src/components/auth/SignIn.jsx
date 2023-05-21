
import React from 'react'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase";

const SignIn = ({email, setEmail, pass, setPass}) => {
   /* const [email, setEmail]= useState('');
    const [pass, setPass]= useState('');*/

    const SignIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
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

