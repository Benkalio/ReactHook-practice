import React, { useState } from "react";

function App() {
  let [double, setDoubling] = useState(1);

  function subtract() {
    setDoubling(double--);
  }

  function multi() {
    setDoubling(double * 2);
  }

  function add() {
    setDoubling(double++);
  }

  return (
    <div>
      <h1>{double}</h1>
      <button onClick={subtract}>-</button>
      <button onClick={multi}>x</button>
      <button onClick={add}>+</button>
    </div>
  );
}
export default App;
