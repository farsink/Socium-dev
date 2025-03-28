const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const helmet = require('helmet');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
app.use(morgan("dev")); // Log requests
app.use(bodyParser.json()); // Parse JSON requests
app.use(cors({
    origin: '*', // Allow all origins for CORS
})); 
// Helmet configuration for security headers
app.use(
    helmet({
        contentSecurityPolicy: false,
    })
);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;