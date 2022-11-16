import { React, useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import { YuriksStates } from "./yuriksStates";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import logo from "../image/logo.svg";
import { height } from "@mui/system";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   field: {
//     marginTop: 20,
//     marginBottom: 20,
//   },
// });



export const Forms = () => {
  const [failedRegister, setFailedRegister] = useState(false)
  const [vehicle, setVehicle] = useState({
    first_name: "",
    last_name: "",
    plate: "",
    drivers_license: "",
    state: "",
    make: "",
    model: "",
  });

 const fullDl = vehicle.state + vehicle.drivers_license

  const postUser = () => {
    console.log('posting user')
    setFailedRegister(false);
      const {  first_name,
      last_name,
      plate,
      drivers_license,
      state,
      make,
      model} = vehicle
    if (
      first_name === "" ||
      last_name === "" ||
      plate === "" ||
      drivers_license === "" ||
      state === "" ||
      make === "" || 
      model === '' 
      ) {
        setFailedRegister(true)
        alert('Please fill out all fields.')
        return
      }
      console.log(vehicle)

  }
 

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 1,
        }}
      >
        <h1> Inspection Gate Kiosk </h1>
        <img src={logo} alt="Security Forces Logo" />
      </Box>
      <Box
        sx={{
          display: "grid",
          boxShadow: 3,
          gap: 1,
        }}
      >
        <Container>
          <form
            noValidate
            autoComplete="off"
            // onSubmit={handleSubmit}
            sx={{
              display: "grid",
              boxShadow: 3,
              gap: 1,
              m: 1,
            }}
          >
            <h2> Personal Information </h2>
            <TextField
              required
              onChange={(e) =>
                setVehicle((prev) => {
                  return { ...prev, first_name: e.target.value };
                })
              }
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="firstName"
              error={failedRegister}
              helperText="Please enter your first name"
              sx={{ boxShadow: 2 }}
            />
            <TextField
              onChange={(e) =>
                setVehicle((prev) => {
                  return { ...prev, last_name: e.target.value };
                })
              }
              required
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lastName"
              error={failedRegister}
              helperText="Please enter your first name"
              sx={{ boxShadow: 2 }}
            />
            <h2> Vehicle Information </h2>
            <TextField
            error={failedRegister}
              onChange={(e) =>
                setVehicle((prev) => {
                  return { ...prev, plate: e.target.value };
                })
              }
              required
              id="plate"
              label="Plate Number"
              name="Plate Number"
              sx={{ boxShadow: 2 }}
            />

            <TextField
              error={failedRegister}
              sx={{ width: 150 }}
              variant="outlined"
              fullWidth
              required
              id="state"
              label="State"
              name="state"
              defaultValue=""
              select
              onChange={(e) => {
                setVehicle((prev) => {
                  return { ...prev, state: e.target.value };
                });
              }}
            >
              <MenuItem value="AL">Alabama</MenuItem>
              <MenuItem value="AK">Alaska</MenuItem>
              <MenuItem value="AZ">Arizona</MenuItem>
              <MenuItem value="AR">Arkansas</MenuItem>
              <MenuItem value="CA">California</MenuItem>
              <MenuItem value="CO">Colorado</MenuItem>
              <MenuItem value="CT">Connecticut</MenuItem>
              <MenuItem value="DE">Delaware</MenuItem>
              <MenuItem value="DC">District of Columbia</MenuItem>
              <MenuItem value="FL">Florida</MenuItem>
              <MenuItem value="GA">Georgia</MenuItem>
              <MenuItem value="GU">Guam</MenuItem>
              <MenuItem value="HI">Hawaii</MenuItem>
              <MenuItem value="ID">Idaho</MenuItem>
              <MenuItem value="IL">Illinois</MenuItem>
              <MenuItem value="IN">Indiana</MenuItem>
              <MenuItem value="IA">Iowa</MenuItem>
              <MenuItem value="KS">Kansas</MenuItem>
              <MenuItem value="KY">Kentucky</MenuItem>
              <MenuItem value="LA">Louisiana</MenuItem>
              <MenuItem value="ME">Maine</MenuItem>
              <MenuItem value="MD">Maryland</MenuItem>
              <MenuItem value="MA">Massachusetts</MenuItem>
              <MenuItem value="MI">Michigan</MenuItem>
              <MenuItem value="MN">Minnesota</MenuItem>
              <MenuItem value="MS">Mississippi</MenuItem>
              <MenuItem value="MO">Missouri</MenuItem>
              <MenuItem value="MT">Montana</MenuItem>
              <MenuItem value="NE">Nebraska</MenuItem>
              <MenuItem value="NV">Nevada</MenuItem>
              <MenuItem value="NH">New Hampshire</MenuItem>
              <MenuItem value="NJ">New Jersey</MenuItem>
              <MenuItem value="NM">New Mexico</MenuItem>
              <MenuItem value="NY">New York</MenuItem>
              <MenuItem value="NC">North Carolina</MenuItem>
              <MenuItem value="ND">North Dakota</MenuItem>
              <MenuItem value="OH">Ohio</MenuItem>
              <MenuItem value="OK">Oklahoma</MenuItem>
              <MenuItem value="OR">Oregon</MenuItem>
              <MenuItem value="PA">Pennsylvania</MenuItem>
              <MenuItem value="PR">Puerto Rico</MenuItem>
              <MenuItem value="RI">Rhode Island</MenuItem>
              <MenuItem value="SC">South Carolina</MenuItem>
              <MenuItem value="SD">South Dakota</MenuItem>
              <MenuItem value="TN">Tennessee</MenuItem>
              <MenuItem value="TX">Texas</MenuItem>
              <MenuItem value="UT">Utah</MenuItem>
              <MenuItem value="VT">Vermont</MenuItem>
              <MenuItem value="VA">Virginia</MenuItem>
              <MenuItem value="WA">Washington</MenuItem>
              <MenuItem value="WV">West Virginia</MenuItem>
              <MenuItem value="WI">Wisconsin</MenuItem>
              <MenuItem value="WY">Wyoming</MenuItem>
              <MenuItem value="AA">Armed Forces Americas</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>

            {/* <TextField
              //   error={failedRegister}
              sx={{ width: 150 }}
              variant="outlined"
              fullWidth
              required
              id="state"
              label="State"
              name="state"
              defaultValue=""
              select
              onChange={(e) => {
                setVehicle((prev) => {
                  return { ...prev, state: e.target.value };
                });
              }}
            >
              <YuriksStates
              onClick={ (e) =>
                setVehicle((prev) => {
                  return { ...prev, state: e.target.value };
                })
              }
              />
            </TextField> */}

            <TextField
            error={failedRegister}
              onChange={(e) =>
                setVehicle((prev) => {
                  return { ...prev, drivers_license: e.target.value };
                })
              }
              required
              id="dl"
              label="Driver's License Number"
              name="Driver's License Number"
            />
            <TextField
            error={failedRegister}
              onChange={(e) =>
                setVehicle((prev) => {
                  return { ...prev, make: e.target.value };
                })
              }
              required
              id="make"
              label="Make"
              name="make"
            />
            <TextField
            error={failedRegister}
              onChange={(e) =>
                setVehicle((prev) => {
                  return { ...prev, model: e.target.value };
                })
              }
              required
              id="model"
              label="Model"
              name="model"
            />
            <Button variant="contained" onClick={postUser}>
              {" "}
              Print Pass{" "}
            </Button>
          </form>
        </Container>
      </Box>
    </>
  );
};
