// app.js
require('dotenv').config({ path: "./env"});
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const app = express();
const path =  require('path');
const { response } = require('express');

// Connect Database
connectDB();

//app.get('/', (req, res) => res.send('This is the initial setup for Group 9 CISE SPEED Project Stream 50 - Successfully Deployed!'));

app.use(express.static(path.join(__dirname, "./cise-speed-app/build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "cise-speed-app", "build", "index.html"))
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));