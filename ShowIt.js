import React, { useState, useEffect } from "react";
import Replys from "./Replys";

const ShowIt = () => {
  const [flag, setFlag] = useState(false);

  function Verdadero(props) {
    return (
      <div>
        <h2>
          {" "}
          <Replys />
          {props.a}
        </h2>
      </div>
    );
  }
  function Falso(props) {
    return (
      <div>
        <h2> {props.h}</h2>
      </div>
    );
  }
  return (
    <>
      {flag ? <Verdadero a={flag} /> : <Falso h={flag} />}
      <div>
        <a onClick={() => setFlag(!flag)}>Reply </a>
      </div>
    </>
  );
};

export default ShowIt;
