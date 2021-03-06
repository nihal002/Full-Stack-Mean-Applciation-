const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const {MONGO_URI} = require('./config');

// dotenv.config();

require('dotenv').config();

// connect to db
mongoose.connect(
  MONGO_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")
);

// Import routes
const listinRoutes = require("./routes/listing");
const userRoutes = require("./routes/user");

// Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/listings", listinRoutes);
app.use("/api/user", userRoutes);

app.listen(4000, () => console.log("server up and runing on port 4000!"));
