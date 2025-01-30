require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// GET Endpoint
app.get('/', (req, res) => {
  res.json({
    email: process.env.REGISTERED_EMAIL, 
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/rillygulma/HNG12-Backend-Stage-Zero-Task"
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});