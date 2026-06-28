import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "rayyan",
    age: 21,
  };
  let newArr = [1, 2, 3, 4, 5];
  return (
    <>
      <h1 className="bg-green-500 text-black rounded-xl mb-4">Tailwind Test</h1>
      <Card
        username="rayhq3"
        btnText="Go Ahead"
        txtArea="This is a very Good article about Dogs"
        myObj={myObj}
      />
      <Card
        username="coolGuy43"
        btnText="Full Article"
        txtArea="This is a very good article about Fishes"
      />
    </>
  );
}

export default App;
