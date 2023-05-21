import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider } from "react-router-dom";
import { router } from "./routes/Index.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
