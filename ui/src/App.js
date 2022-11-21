import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/login/login";
import { Forms } from "./components/forms/forms";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Data } from "./components/data/data";



export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/vehicle" element={<Forms />} />
        <Route path="/data" element={<Data />} />
        <Route path="*" element={<Forms />} />
      </Routes>
    </Router>
  );
};
