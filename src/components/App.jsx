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
    changeCount(count * 2);
  }

  function remainder() {
    changeCount(count % 3);
  }

  function divide() {
    changeCount(count / 2);
  }

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
