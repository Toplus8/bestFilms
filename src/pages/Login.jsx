import React from 'react'
import SignIn from '../components/auth/SignIn'
import { Link } from "react-router-dom";


const Login = ({email, setEmail, pass, setPass}) => {
  return (
    <div>
       <SignIn  email = { email } setEmail = { setEmail } pass = { pass } setPass = { setPass } />
       < br /> 
       <Link to="/">Volver a la página inicial</Link>    
       < br />   
       < br /> 
    </div>
  )
}

export default Login

