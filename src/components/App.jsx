import React, { useState } from "react";

let count = 0;

function App() {
  const state = useState();
  function increase() {
    count++;
  }

  return (
    <div className="container">
      <h1></h1>
    </div>
  );
}

export default App;
