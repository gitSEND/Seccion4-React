// Functional Component
// import React, { Fragment } from "react";
import React from "react";

const PrimeraApp = ({ saludo = "Hola mundo" }) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>Mi primera aplicacion</p>
    </>
  );
};

export default PrimeraApp;
