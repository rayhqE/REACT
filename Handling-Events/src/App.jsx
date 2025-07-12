import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = ["Dal", "Green Vegies", "Roti", "Mutton", "Chicken"];

  let textToShow = "Food item entered by user";

  const handleOnChange = (event) => {
    console.log(event.target.value);
    textToShow = event.target.value;
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
