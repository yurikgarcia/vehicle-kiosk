import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { Box, Grid } from "@mui/material/";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import shark from "./image/shark.png";

// import shark from './images/shark';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="static">
        <Toolbar sx={{ width: "100%" }}>
          <Box sx={{ width: "45%" }}>
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
              Data
            </Button>
            <Button
              onClick={() => navigate("/about")}
              variant="h6"
              component="div"
              sx={{}}
            >
              About
            </Button>
          </Box>
          <Box 
          onClick={() => navigate("/vehicles")}
          
            sx={{width: '45%',cursor:"pointer" }}>
              <img
                src={shark}
                alt="shark"
                style={{ width: "120px", paddingRight: "43%" }}
                
              />
          </Box>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
