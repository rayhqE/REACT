import Item from "./Item.JSX";
function FoodItem({ items }) {
  return (
    <ul className="list-group">
      {items.map((items) => (
        <Item key={items} foodItems={items}></Item>
      ))}
    </ul>
  );
}
export default FoodItem;
