import axios from "axios";
import { useEffect } from "react";
import './App.css'
import { Routes, Route } from "react-router-dom";
import { useState } from 'react'

function Home() {
  return <h1 className="text-2xl font-bold">Home Page</h1>;
}

function App() {
  useEffect(() => {
    axios.get("http://localhost:5000/api/test").then(res => console.log(res.data)).catch(err => console.error(err));
    
    axios.get('http://localhost:5000/api/env').then(res => console.log(res.data)).catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Tailwind is working!
      </h1>
      <p className="text-lg text-gray-700">
        Check your browser console for API test responses.
      </p>
    </div>
  );
}

export default App;
