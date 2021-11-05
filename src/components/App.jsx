import React, { useState } from "react";

function App() {
  let [count, setCount, deCount] = useState(12);

  function increase() {
    setCount(count++);
    deCount(count * 3);
  }

  function decrease() {
    setCount(count--);
  }

  return (
    <div>
      <h1>{count}</h1>
      <h2>{deCount}</h2>
    </div>
  );
}
export default App;
