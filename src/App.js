import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Actividades from "./components/pages/Actividades";
import Grupos from "./components/pages/Grupos";
import SobreNosotros from "./components/pages/SobreNosotros";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/us" element={<SobreNosotros />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/grupos" element={<Grupos />} />
          <Route path="/us" element={<SobreNosotros />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
