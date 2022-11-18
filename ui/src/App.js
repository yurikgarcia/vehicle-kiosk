import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/login/login";
import { Forms } from "./components/forms/forms";
import "./App.css";
import { Navbar } from "./components/navbar";
import Example from "./components/forms/print";


export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/print" element={<Example />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vehicle" element={<Forms />} />
      </Routes>
    </Router>
  );
};
