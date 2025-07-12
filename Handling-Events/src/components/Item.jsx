import styles from "./Item.module.css";

function Item({ foodItems, handleBuyButton }) {
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItems}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button> 
    </li>
  );
}
export default Item;
