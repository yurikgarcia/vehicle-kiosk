import { DailyBarGraph } from "./dailyBarGraph";
import { MonthlyBarGraph } from "./monthlyBarGraph";
import { useEffect, useState, useContext } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { VehicleContext } from "../VehicleContext";

export const Data = () => {
  const [vehicleData, setVehicleData] = useState([]);
  const { API, visitorDetails } = useContext(VehicleContext);

  console.log(API);
  console.log(visitorDetails);

  const date = new Date();
  // console.log('todays date normal', date)
  const today = date.toISOString().slice(5, 7);
  // console.log('todays date isoString', today)
  const month = date.getMonth();
  // console.log(month + 1)

  // if (today >= (month)) {
  //   console.log('today is the same as month')
  // } else {
  //   console.log('no the fuck it doesnt')
  // }

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "50%" }}>
          <Typography> 30 Day Trend</Typography>
          <DailyBarGraph element={{ visitorDetails, today, month }} />
        </Box>
        <Box sx={{ width: "50%" }}>
          <Typography> Current Year</Typography>
          <MonthlyBarGraph element={{ visitorDetails, today }} />
        </Box>
        {/* <Box>
        <Typography>hello</Typography>
      </Box> */}
      </Box>
    </Box>
  );
};
