const express = require("express");
const cors = require("cors");
require('dotenv').config();


const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
