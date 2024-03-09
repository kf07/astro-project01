import { useState } from "react";

const Counter2 = () =>  {
  const [count, setCount] = useState(0);
  console.log('render react');
  function incrementCount() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={incrementCount}>+1</button>
    </>
  );
}

export default Counter2;