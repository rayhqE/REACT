import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";

function App() {
  let foodItems = ["dal", "Green Vegies", "Roti", "Mutton", "Chicken"];
  return (
    <Container>
      <h1 className="food-heading">Healthy Foods</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItem items={foodItems}></FoodItem>
    </Container>
  );
}

export default App;
