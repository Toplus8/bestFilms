import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/*probando conexión para firebase */

import firebaseConfig from './firebaseConfig.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <firebaseAppProvider firebaseConfig ={firebaseConfig} >
    <App />
    </firebaseAppProvider>
    
  </React.StrictMode>,
)
