import axios from "axios";
import { useEffect } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";;
import { useState } from 'react';
import Dashboard from "./pages/Dashboard";
import About from "./pages/About"

function App() {

  useEffect(() => {
    axios.get("http://localhost:5000/api/test").then(res => console.log(res.data)).catch(err => console.error(err));
    axios.get('http://localhost:5000/api/env').then(res => console.log(res.data)).catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </nav>
    </div>
  );
}

export default App;
