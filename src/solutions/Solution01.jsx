import { useState } from "react";
const Solution01 = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prevCountAdd1) => prevCountAdd1 + 1);
  };

  const subtract = () => {
    setCount((prevCountSubtract1) => prevCountSubtract1 - 1);
  };

  return (
    <div>
      <button onClick={add} type="add">
        add 1
      </button>
      <br />
      <p>{count}</p>
      <button onClick={subtract} type="subtract">
        subtract 1
      </button>
    </div>
  );
};

export default Solution01;
