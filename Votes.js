import React from "react";
import { useState } from "react";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

const Votes = (props) => {
  let num = { ...props };
  const [count, setCount] = useState(num.ups);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        <CaretUpOutlined />
      </button>
      <p>Karma {count} </p>

      <button onClick={() => setCount(count - 1)}>
        <CaretDownOutlined />
      </button>
    </div>
  );
};

export default Votes;
