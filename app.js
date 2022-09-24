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

app.use(express.static(path.join(__dirname, "./cise-speed-app/build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "cise-speed-app", "build", "index.html"))
})

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));