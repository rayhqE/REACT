import styles from "./FoodInput.module.css";
function FoodInput({ handleKeyDown }) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter the Food Item here!"
        className={styles.foodInput}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}
export default FoodInput;
