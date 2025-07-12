import Item from "./Item.JSX";
function FoodItem({ items }) {
  return (
    <ul className="list-group">
      {items.map((items) => (
        <Item
          key={items}
          foodItems={items}
          handleBuyButton={() => console.log(`${items} being bought`)}
        ></Item>
      ))}
    </ul>
  );
}
export default FoodItem;
