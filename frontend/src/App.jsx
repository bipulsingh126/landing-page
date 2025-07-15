import Home from "./page/Home";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./page/Portfolio";
import Services from "./components/Services";
import Feature4 from "./components/Feature4";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Feature4 />} />
    </Routes>
  );
}


export default App;
