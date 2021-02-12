import React, { useState, useEffect } from "react";
import Replys from "./Replys";

const ShowIt = () => {
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);

  function Verdadero(props) {
    console.log(true);
    return (
      <div>
        <h2>
          {" "}
          <Replys />
          Verdadero
          {props.a}
        </h2>
      </div>
    );
  }
  function Falso(props) {
    console.log(false);
    return (
      <div>
        <h2>Falso {props.h}</h2>
      </div>
    );
  }
  return (
    <>
      {flag ? <Verdadero a={flag} /> : <Falso h={flag} />}
      <div>
        <a onClick={() => setFlag(!flag)}>Click me </a>
      </div>
    </>
  );
};

export default ShowIt;
