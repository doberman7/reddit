import React from "react";
import { useState } from "react";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

const Detail = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        <CaretUpOutlined />
      </button>
      <p>Votes {count} </p>

      <button onClick={() => setCount(count - 1)}>
        <CaretDownOutlined />
      </button>
    </div>
  );
};

export default Detail;
