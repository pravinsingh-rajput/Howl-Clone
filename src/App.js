import "./App.css";
import Navbar from "./component/navbar/Navbar.js";
import Home from "./component/home/Home.js";
import Client from "./component/client/Client.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Client />
    </div>
  );
}

export default App;
