import styles from "./ButtonsContainer.module.css";
function ButtonsContainer() {
  let buttonNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.buttonsContainer}>
        {buttonNames.map((buttonName) => (
          <button className={styles.button}>{buttonName}</button>
        ))}
      </div>
    </>
  );
}

export default ButtonsContainer;
