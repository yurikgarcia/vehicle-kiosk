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

export const Forms = () => {
  return (
    <span>
      <header>
        <h1> Search Gate Kiosk </h1>
      </header>
      <Box
        sx={{
          display: "flex",
          boxShadow: 3,
          display: "grid",
          gap: 1,

        }}
      >
        <Container >
          <h2> Personal Information </h2>

          <TextField
            required
            id="name"
            label="Full Name"
            name="name"
            autoComplete="name"
          />
        </Container>

        <Container
          sx={{ 
          flexWrap: 'wrap',
           }}> 
          <h2> Vehicle Information </h2>
          <TextField 
            required
            id="plate"
            label="Plate Number"
            name="Plate Number"
          />
          <YuriksStates />

          <TextField 
            required
            id="dl"
            label="Driver's License Number"
            name="Driver's License Number"
            />
          <TextField 
            required
            id="make"
            label="Make"
            name="make"
            />
          <TextField 
            required
            id="model"
            label="Model"
            name="model"
            />
          </Container>

          <Box 
            sx={{ 
                display: 'flex', 
                mt :2, 
                mb: 2,
                justifyContent: 'center'
            }}>
            <Button variant="contained"> Print Pass </Button>
          </Box>

      </Box>





    </span>
  );
};
