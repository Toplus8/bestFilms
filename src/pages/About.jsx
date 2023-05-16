import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div>
        <h1>About</h1>
      </div>
      <div>
        <Link to="/">Volver al menu</Link>
      </div>
    </>
  );
}

export default About;
