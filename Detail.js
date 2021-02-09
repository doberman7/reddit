import React from "react";
import { useState } from "react";

const Detail = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>UpVote</button>
      <button onClick={() => setCount(count - 1)}>Down Vote</button>
    </div>
  );
};

export default Detail;
