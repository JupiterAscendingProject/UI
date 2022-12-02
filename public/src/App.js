import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import MyForm from "./MyForm";
import Trainer from "./Trainer";
import Login from "./Login";
import AddTrainer from "./AddTrainer";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="form" element={<MyForm />} />
        <Route path="admin" element={<Admin />} />
        <Route path="/addTrainer" element={<AddTrainer />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
