import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(12);

  function increase() {
    setCount(count++);
  }

  function decrease() {
    setCount(count--);
  }

  return <div></div>;
}
export default App;
