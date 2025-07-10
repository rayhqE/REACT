import styles from "./Item.module.css";

function Item({ foodItems }) {
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg - span"]}>{foodItems}</span>
    </li>
  );
}
export default Item;
