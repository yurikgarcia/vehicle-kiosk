import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ReactToPrint from "react-to-print";
import { useReactToPrint } from "react-to-print";
import flash from "../image/flash.png";
import patch from "../image/patch.png";
import shark from "../image/shark.png";

const tabStyle = {
  height: 500,
  maxHeight: 300,
  overflow: "scroll",
  //backgroundColor: "blue"
};

// console.log("FROM FORMS", Forms);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '75%',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PrintModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const vehicle = props.element;
  console.log("FROM PRINT MODAL", vehicle);

  const postUser = () => {
    console.log("posting vehicle");

    console.log(vehicle.drivers_license);
    console.log(vehicle.first_name);
    fetch("http://localhost:8080/api", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(vehicle),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((res) => res.json())

      .catch((err) => {
        console.log("Error: ", err);
      });
    console.log("vehicle has been posted");
    handleClose();
  };

  const ComponentToPrint = React.forwardRef((props, ref) => {
  //   const date = new Date();
  // const today =
  //   date.toISOString().slice(0, 10) + " " + date.toTimeString().slice(0, 5);
    return (
      <Box ref={ref} sx={{ overflow: "hidden" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <img
            style={{ width: "20%", margin: 2 }}
            src={flash}
            alt="Security Forces Logo"
          />
          45 SFS Vehicle Pass
          <img
            style={{ width: "15%", margin: 1 }}
            src={patch}
            alt="Security Forces Logo"
          />
        </Box>
        <Box
          className="printElement1"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>

          <Typography> First Name: {vehicle.first_name}</Typography>
          <Typography sx={{pl: 5}}> Last Name: {vehicle.last_name}</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            
            <Typography> Drivers License: {vehicle.state} {vehicle.drivers_license}</Typography>
          </Box>
          <Box
            className="printElement1"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
          <Typography > Vehicle Plate: {vehicle.plate}</Typography>
          <Typography > Make: {vehicle.make}</Typography>
          <Typography > Model: {vehicle.model}</Typography>

          </Box>
          <Typography>{vehicle.date}</Typography>
        </Box>
      </Box>
    );
  });

  const fillOutFields = () => {
    if (
      vehicle.first_name === "" ||
      vehicle.last_name === "" ||
      vehicle.plate === "" ||
      vehicle.drivers_license === "" ||
      vehicle.state === "" ||
      vehicle.make === "" ||
      vehicle.model === ""
    ) {
      alert("Please fill out all fields.");
      return;
    }
    handleOpen();
  };

  return (
    <div>
      <Button
        sx={{ boxShadow: 2, width: 150, m: 1 }}
        variant="contained"
        onClick={() => {
          fillOutFields();
        }}
      >
        Verify & Print
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Verify All Information Is Correct
            </Typography>
          </Box>

          <ComponentToPrint ref={componentRef} />
          {/* <Button onClick={handlePrint}>Print this out!</Button> */}
          <Button
            sx={{ boxShadow: 2, width: 150, m: 1 }}
            variant="contained"
            onClick={() => {
              postUser();
              handlePrint();
            }}
          >
            {" "}
            Print Pass{" "}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
