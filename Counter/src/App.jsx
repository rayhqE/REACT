import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [Counter, setCounter] = useState(0);

  // let Counter = 5;

  const addValue = () => {
    if (Counter < 20) {
      Counter = Counter + 1;
    }
    setCounter(Counter);
  };
  const removevalue = () => {
    if (Counter > 0) {
      Counter = Counter - 1;
    }
    setCounter(Counter);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {Counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removevalue}>Remove Value</button>
    </>
  );
}

export default App;
