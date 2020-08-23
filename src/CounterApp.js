import React, { useState } from "react";
import PropTypes from "prop-types";

// snipets => rafc: crea las 2 importaciones

const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    // setCounter(counter + 1); // 1er forma
    setCounter((c) => c + 1); // 2da forma
  };

  //   const handleSubtract = () => {
  //     setCounter(counter - 1);
  //   };

  //   const handleReset = () => {
  //     setCounter(value);
  //   };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}> +1 </button>
      <button onClick={() => setCounter(value)}> reset </button>
      <button onClick={() => setCounter(counter - 1)}> -1 </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
