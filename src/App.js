import React, { useState } from "react";
import "./styles.css";
import Counter from "./Counter";

export default function App() {
  return (
    <div className="App">
      <h1>My Counter App</h1>
      <Counter />
      <button style={{ width: "50%", margin: "20px" }} onClick={() => {}}>
        Reset
      </button>
    </div>
  );
}
