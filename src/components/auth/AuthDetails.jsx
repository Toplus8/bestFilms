import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import './authDetails.css'

const AuthDetails = ({ authUser, setAuthUser }) => {
  

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <div className="accountDetails">
          <p>{`Bienvenido ${authUser.email}`}</p>
          <button onClick={userSignOut}>Cerrar sesión</button>
        </div>
      ) : (
        <p>Sesión no iniciada, ¿desea acceder? pulse <Link to="/acceso">aquí</Link>.
        Si no tiene cuenta aún pulse <Link to="/registro">aquí</Link> para registrarse.</p>
      )}
    </div>
  );
};

export default AuthDetails;