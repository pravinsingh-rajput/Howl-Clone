import "./App.css";
import Navbar from "./component/navbar/Navbar.js";
import Home from "./component/home/Home.js";
import Client from "./component/client/Client.js";
import Contact from "./component/contact/Contact.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Client />
      <Contact />
    </div>
  );
}

export default App;
