import React, { createContext, useState } from 'react'

export const authContext = createContext(null);

export const AuthContextProvider = ({children}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass]= useState('');
    const [authUser, setAuthUser] = useState(null);
    return (
    <authContext.Provider value ={[email, setEmail, pass, setPass, authUser, setAuthUser]}>
        {children}
    </authContext.Provider>
)
}

