import React from "react";
import { useState } from "react";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

const Votes = (props) => {
  let num = { ...props };
  const originalKarma = num.ups;
  const [karma, setKarma] = useState(num.ups);

  const plusKarma = () => {
    //sumarle solo un punto al karma
    karma >= originalKarma + 1 ? karma : setKarma(karma + 1);
  };
  const lessKarma = () => {
    //restarle solo un punto al karma
    karma <= originalKarma - 1 ? karma : setKarma(karma - 1);
  };

  return (
    <div>
      <button onClick={plusKarma}>
        <CaretUpOutlined />
      </button>
      <p>Karma {karma} </p>

      <button onClick={lessKarma}>
        <CaretDownOutlined />
      </button>
    </div>
  );
};

export default Votes;
