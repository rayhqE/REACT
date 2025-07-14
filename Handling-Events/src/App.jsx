import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let foodItems = ["Dal", "Green Vegies", "Roti", "Mutton", "Chicken"];

  let textState = useState("Food item entered by user");
  let textToShow = textState[0];
  let setTextState = textState[1];
  console.log(`current value:${textToShow}`);

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItem items={foodItems}></FoodItem>
      </Container>
    </>
  );
}

export default App;
