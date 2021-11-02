import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  function increase() {
    setCount(count++);
  }

  function decrease() {
    setCount(count--);
  }

  function divide() {
    setCount(count / 2);
  }

  function multiply() {
    setCount(count * 2);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={divide}>/</button>
      <button onClick={multiply}>x</button>
    </div>
  );
}
export default App;
