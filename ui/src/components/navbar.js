import { useContext }from "react";
import { useNavigate } from "react-router-dom";
import { VehicleContext } from "./VehicleContext";
import AppBar from "@mui/material/AppBar";
import { Box, Grid } from "@mui/material/";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import shark from "./image/shark.png";

// import shark from './images/shark';

export const Navbar = () => {
  
  const navigate = useNavigate();

 const isAuthenticated = localStorage.getItem("admin");
 console.log("isAuth", isAuthenticated);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="static">
        <Toolbar sx={{ width: "100%" }}>
          <Box sx={{ width: "45%" }}>
            { isAuthenticated === 'true' ? (
              <>
            <Button
              onClick={() => navigate("/history")}
              variant="h6"
              component="div"
              >
              History Log
            </Button>
            <Button
              onClick={() => navigate("/data")}
              variant="h6"
              component="div"
              sx={{}}
              >
              Analytics
            </Button>
            <Button
              onClick={() => navigate("/about")}
              variant="h6"
              component="div"
              sx={{}}
              >
              About
            </Button>
              
                </>
          
             ) : null} 
          </Box>
          <Box 
          onClick={() => navigate("/vehicles")}
          
            sx={{width: '45%',cursor:"pointer" }}>
              <img
                src={shark}
                alt="shark"
                style={{ width: "100px", paddingRight: "43%" }}
                
              />
          </Box>

          <Button 
          onClick={() => navigate("/login")}
          color="inherit"
          >Login</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
};
