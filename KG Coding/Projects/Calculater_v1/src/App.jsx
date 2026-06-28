import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  return (
    <center className="mt-5">
      <div className={styles.calculater}>
        <Display></Display>
        <ButtonsContainer></ButtonsContainer>
      </div>
    </center>
  );
}

export default App;
