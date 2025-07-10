import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = ["dal", "Green Vegies", "Roti", "Mutton", "CHicken"];
  return (
    <>
      <div>Healthy Foods</div>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItem items={foodItems}></FoodItem>
    </>
  );
}

export default App;
