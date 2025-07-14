import { useState } from "react";
import Item from "./Item.JSX";
function FoodItem({ items }) {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (items, event) => {
    let newItems = [...activeItems, items];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((items) => (
        <Item
          key={items}
          foodItems={items}
          bought={activeItems.includes(items)}
          handleBuyButton={(event) => onBuyButton(items, event)}
        ></Item>
      ))}
    </ul>
  );
}
export default FoodItem;
