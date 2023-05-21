import React from 'react'
import SignUp from '../components/auth/SignUp'
import { Link } from "react-router-dom";


const Register = ({email, setEmail, pass, setPass}) => {
  return (
    <div>
        <SignUp email = { email } setEmail = { setEmail } pass = { pass } setPass = { setPass } />

        <Link to="/">Volver a la página inicial</Link> 
    </div>
  )
}

export default Register