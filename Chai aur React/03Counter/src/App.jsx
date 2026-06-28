import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 5;
  const addValue = () => {
    // counter = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const reduceValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1> Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={reduceValue}>Reduce Value {counter} </button>
    </>
  );
}

export default App;
