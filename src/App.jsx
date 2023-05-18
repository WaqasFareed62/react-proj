import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Static from "./components/Static";
import Slider from "./components/slider";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Static />
      <Slider />
      <Slider />
    </>
  );
}

export default App;
