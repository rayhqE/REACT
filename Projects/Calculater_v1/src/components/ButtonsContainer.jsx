import styles from "./ButtonsContainer.module.css";
function ButtonsContainer() {
  let buttonNames = ["c", "1", "2", "+"];
  return (
    <>
      <div className={styles.buttonsContainer}>
        <button className={styles.button}>C</button>
        <button className={styles.button}>1</button>
        <button className={styles.button}>2</button>
        <button className={styles.button}>+</button>
      </div>
    </>
  );
}

export default ButtonsContainer;
