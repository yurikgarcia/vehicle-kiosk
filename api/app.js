const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = 8080;
const vehicleRoutes = require("./routes/vehicles");
const client = require("./db/client");
// DB Connection

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    // console.log(origin);
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else if (origin === undefined) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

client
  .connect()
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

app.use(cors(corsOptions));
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
