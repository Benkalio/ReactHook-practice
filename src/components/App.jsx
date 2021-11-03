import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(2);

  function increase() {}

  return (
    <div>
      <h1>{count}</h1>
      <button onClick="increase">+</button>
      <button onClick="decrease">-</button>
      <button onClick="times">X</button>
    </div>
  );
}
export default App;
