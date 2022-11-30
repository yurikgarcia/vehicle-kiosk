import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import flash from "../image/flash.png";
import { VehicleContext } from "../VehicleContext";

export const Login = () => {
  const { API, setUser, setIsAuthenticated } = useContext(VehicleContext);
  // console.log(API);
  const [login, setLogin] = useState({
    user_name: "",
    password: "",
  });
  const navigate = useNavigate();

  const postLogin = () => {
    fetch(`${API}/users/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify(login),
    })
      .then((res) => {
        
        if (res.status === 200) {
          return res.json();
        } else {
          alert("You're an imposter!");
        }
      })
      .then((data) => {
        localStorage.setItem("user", 'Bearer ' + data.token);
        localStorage.setItem('admin', data.user.admin)
        console.log('sign in data', data);
        setUser(data);
        setIsAuthenticated(data.user.admin);
      })
      .then(navigate("/vehicles"));
  };



  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#1769aa",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            //backgroundColor: '#212121',
          }}
        >
          <Box
            sx={{ backgroundColor: "#212121", borderRadius: "20px", pl: 1.5 }}
          >
            {/* <img src={logo} alt='logo' style={{ width: '20rem' }} /> */}
          </Box>
          {/* {failedLogin && (
            <span>
              <Typography
                component='span'
                variant='h5'
                align='center'
                color='error'
              >
                Failed to login, Retry or Sign up
              </Typography>
            </span>
          )} */}
          <Box
            sx={{ backgroundColor: "#FAFAFF", borderRadius: 3, px: 4, py: 4 }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
              <img
                style={{ width: "100px", margin: "10px" }}
                src={flash}
                alt="Security Forces Flash"
              />
            </Box>

            <TextField
              // error={failedLogin}
              margin="normal"
              required
              fullWidth
              id="user_name"
              label="User Name"
              name="user_name"
              autoComplete="Username"
              autoFocus
              onChange={(e) => {
                setLogin((prev) => {
                  return { ...prev, user_name: e.target.value };
                });
              }}
            />
            <TextField
              // error={failedLogin}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                setLogin((prev) => {
                  return { ...prev, password: e.target.value };
                });
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  // postLogin();
                }
              }}
            />
          </Box>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="medium"
            sx={{
              borderRadius: "30px",
              width: 200,
            }}
            onClick={() => postLogin()}
          >
            Login
          </Button>
          {/* <Button
            fullWidth
            variant="contained"
            color="primary"
            size="medium"
            sx={{
              borderRadius: "30px",
              width: 200,
              display: "flex",
              justifyContent: "center",
            }}
            // onClick={() => navigate('/signup')}
          >
            Login as Guest 
          </Button> */}

          {/* {!apiRes.ok ? (
            <Box sx={{ m: 2, width: '100%' }}>
              <Typography variant='h5' component='h5' sx={{ color: 'white' }}>
                Connecting to Database
              </Typography>
              <LinearProgress />
            </Box>
          ) : null} */}
        </Box>
      </Container>
    </Box>
  );
};
