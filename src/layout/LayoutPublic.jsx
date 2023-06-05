import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import { AuthContextProvider } from "../context/AuthContext";


const LayoutPublic = () => {
  return (
    <AuthContextProvider>
      < Nav />
      <main className="container">
        <Outlet />
      </main>
      < Footer />
    </AuthContextProvider>
  );
};

export default LayoutPublic;