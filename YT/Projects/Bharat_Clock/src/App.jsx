import AppName from "./components/Appname";
import AppBody from "./components/AppBody";
import AppTime from "./components/AppTime";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
function App() {
  return (
    <div className="container text-center">
      <AppName></AppName>
      <AppBody></AppBody>
      <AppTime></AppTime>
    </div>
  );
}

export default App;
