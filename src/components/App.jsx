import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(12, 24);

  function increase() {
    setCount(count++);
  }

  function decrease() {
    setCount(count--);
  }

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
export default App;
