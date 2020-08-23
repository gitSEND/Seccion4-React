import React, { useState } from "react";
import PropTypes from "prop-types";

// snipets => rafc: crea las 2 importaciones

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    // setCounter(counter + 1); // 1er forma
    setCounter((c) => c + 1); // 2da forma
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}> +1 </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
