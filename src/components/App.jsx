import React, { useState } from "react";

function App() {
  let [counter, changeCounter] = useState(10);

  function increase() {
    changeCounter(counter++);
  }

  function decrease() {
    changeCounter(counter--);
  }

  function multiply() {
    changeCounter(counter * 3);
  }
  return (
    <div>
      <h1>{counter}</h1>
      <h2>
        Implementing React useState method to change the state of this App
      </h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={multiply}>x</button>
    </div>
  );
}
export default App;
