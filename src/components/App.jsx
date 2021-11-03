import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(2);

  function increase() {
    setCount(count++);
  }

  function decrease() {
    setCount(count--);
  }

  function times() {}

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={times}>X</button>
    </div>
  );
}
export default App;
