import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/login/login";
import { Forms } from "./components/forms/forms";
import { Navbar } from "./components/navbar";
import { Data } from "./components/data/data";
import { History } from "./components/history/history";
import { VehicleContext } from "./components/VehicleContext";

export const App = () => {
  const [visitorDetails, setVisitorDetails] = useState([]);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState();
  const API = "http://localhost:8080/api";
  useEffect(() => {
    fetch(API, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => setVisitorDetails(json));
  }, []);

  const obj = {
    visitorDetails,
    setVisitorDetails,
    API,
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
  };



  return (
    <VehicleContext.Provider value={obj}>
      <Router>
        <Navbar />
        
          <Routes>
            <Route path="/vehicles" element={<Forms />} />
           

            
              
                <Route path="/data" element={<Data />} />
                <Route path="/History" element={<History />} />
                <Route path="*" element={<Forms />} />
             
            
          
            <Route path="/login" element={<Login />} />
          </Routes>
        
      </Router>
    </VehicleContext.Provider>
  );
};
