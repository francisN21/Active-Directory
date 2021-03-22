import logo from "./logo.svg";
import "./App.css";
import Employees from "./Components/Employee/Employees";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <div className="row">
        <Nav sticky="top" />
      </div>

      <div className="content-container">
        <Employees />
      </div>
    </div>
  );
}

export default App;
