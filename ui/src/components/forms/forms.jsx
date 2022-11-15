import { React, useState, useEffect } from "react";
import {
  Box,
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
        <h1> Enter Information </h1>
      </header>

      <Box
        sx={{
          display: "flex",
          boxShadow: 3,
          display: "grid",
          gap: 1,
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <TextField
          required
          id="outlined-required"
          label="Full Name"
          name="name"
          autoComplete="name"
        />
        <YuriksStates />
        <TextField 
          required
          id="outlined-required"
          label="Plate Number"
          name="Plate Number"
        />
      </Box>
    </span>
  );
};
