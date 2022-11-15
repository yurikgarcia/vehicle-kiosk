import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login }   from './components/login/login'
import { Forms } from './components/forms/forms'
import "./App.css";

export const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/vehicle" element={<Forms />} />
      </Routes>
    </Router>
  );
};
