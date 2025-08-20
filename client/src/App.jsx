import axios from "axios";
import { useEffect, useRef } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";;
import Dashboard from "./pages/Dashboard";
import About from "./pages/About"
import Nav from "./components/Navigation";
import Observations from "./pages/Observations";

function App() {

  return (
    <div className="p-6">   
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/About" element={<About />} />
          <Route path="/Observations" element={<Observations />} />
        </Routes>
        <Nav />
    </div>
  );
}  


export default App;
