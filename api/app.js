const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = 8080;
const vehicleRoutes = require("./routes/vehicles");

// DB Connection
const { Client } = require("pg");
const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

client
  .connect()
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

//inital API route
app.get("/", (req, res) => {
  res.send("Welcome to the Vehicle Tracking API");
});

//Primary API route
app.use("/api", vehicleRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
