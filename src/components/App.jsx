import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  function increase() {
    setCount(count++);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button>-</button>
      <button>/</button>
      <button>x</button>
    </div>
  );
}
export default App;
