import "./App.css";

import About from "./components/About/About";
import Landing from "./components/Landing/Landing";
import Tab from "./components/Tab/Tab";
import Techs from "./components/Techs/Techs";
import ImgList from "./components/ImgList/ImgList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Tab />
      <Landing />

      <About />
      <Techs />
      <ImgList />

      <Footer />
    </div>
  );
}

export default App;
