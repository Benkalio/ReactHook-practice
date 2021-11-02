import React, { useState } from "react";
function App() {
  let [count, changeCount] = useState(1);

  function sub() {
    changeCount(count--);
  }

  function add() {
    changeCount(count++);
  }

  function multiply() {
    changeCount(multiply * 2);
  }

  function remainder() {}

  function divide() {}

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={sub}>-</button>
      <button onClick={add}>+</button>
      <button onClick={multiply}>x</button>
      <button onClick={remainder}>%</button>
      <button onClick={divide}>/</button>
    </div>
  );
}
export default App;
