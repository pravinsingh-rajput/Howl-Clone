import "./App.css";
import Navbar from "./component/navbar/Navbar.js";
import Home from "./component/home/Home.js";
import Client from "./component/client/Client.js";
import Contact from "./component/contact/Contact.js";
import FooterComp from "./component/footerComp/FooterComp.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Client />
      <Contact />
      <FooterComp />
    </div>
  );
}

export default App;
