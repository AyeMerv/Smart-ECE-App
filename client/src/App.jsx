import axios from "axios";
import { useEffect } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";;
import Dashboard from "./pages/Dashboard";
import About from "./pages/About"
import Nav from "./components/Navigation";

function App() {

  useEffect(() => {
    axios.get("http://localhost:5000/api/test").then(res => console.log(res.data)).catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">   
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Nav />
    </div>
  );
}  


export default App;
