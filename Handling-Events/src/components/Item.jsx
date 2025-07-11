import styles from "./Item.module.css";

function Item({ foodItems }) {
  function onClickCheck(event) {
    console.log(event);

    console.log(`${foodItems} being bought`);
  }
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItems}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => onClickCheck(event)}
      >
        Buy
      </button>
    </li>
  );
}
export default Item;
