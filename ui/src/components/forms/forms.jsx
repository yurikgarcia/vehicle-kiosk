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
} from "@mui/material/";
import { YuriksStates } from "./yuriksStates";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import logo from "../image/logo.svg";
import { height } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export const Forms = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName(false);
    setLastName(false);

    if (firstName === "") {
      setFirstNameError(true);
    }

    if (lastName === "") {
      setLastNameError(true);
    }
  };

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
            onSubmit={handleSubmit}
            sx={{
              display: "grid",
              boxShadow: 3,
              gap: 1,
            }}
          >
            <h2> Personal Information </h2>
            <TextField
              required
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="firstName"
              error={firstNameError}
              helperText="Please enter your first name"
              sx={{ boxShadow: 2 }}
            />
            <TextField
              onChange={(e) => setLastName(e.target.value)}
              required
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lastName"
              error={lastNameError}
              helperText="Please enter your first name"
              sx={{ boxShadow: 2 }}
            />
            <h2> Vehicle Information </h2>
            <TextField
              required
              id="plate"
              label="Plate Number"
              name="Plate Number"
              sx={{ boxShadow: 2 }}
            />
            <YuriksStates />

            <TextField
              required
              id="dl"
              label="Driver's License Number"
              name="Driver's License Number"
            />
            <TextField required id="make" label="Make" name="make" />
            <TextField required id="model" label="Model" name="model" />
            <Button variant="contained"> Print Pass </Button>
          </form>
        </Container>
      </Box>
    </>
  );
};
