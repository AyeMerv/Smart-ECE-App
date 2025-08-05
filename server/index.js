const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require('dotenv').config();


const app = express();

//connect to Database
connectDB();

//Middleware
app.use(cors());
app.use(express.json());

//routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

app.get("/api/env", (req, res) => {
  res.json({ test: process.env.TEST_VALUE });
});

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
