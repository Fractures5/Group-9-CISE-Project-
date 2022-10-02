// app.js
<<<<<<< HEAD
require('dotenv').config({ path: "./env"});
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const app = express();
const path =  require('path');
const { response } = require('express');
=======
//require('dotenv').config({ path: "./env"});
const express = require('express');
const connectDB = require('../config/db');
var cors = require('cors');
//const path =  require('path');
//const { response } = require('express');

// routes
<<<<<<< HEAD
const articles = require('../routes/api/articleRoutes');
=======
const articles = require('../routes/api/backendArticleRoutes');
>>>>>>> da14fa9ef6f348489a47a630d628b0054b7e3774
const app = express();
>>>>>>> abdc65cb31d9c293fa525da398333b0d513ea028

// Connect Database
connectDB();

<<<<<<< HEAD
app.use(express.static(path.join(__dirname, "./cise-speed-app/build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "cise-speed-app", "build", "index.html"))
})
=======
//cors
app.use(cors({origin: true, credentials: true}));

// Init middleware
app.use(express.json({extended: false}));

// app.use(express.static(path.join(__dirname, "./cise-speed-app/build")))
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "cise-speed-app", "build", "index.html"))
// })

app.get('/', (req, res) => res.send('Testing database submission form'));

// Use routes
app.use('/api/backendArticleRoutes', articles);
>>>>>>> abdc65cb31d9c293fa525da398333b0d513ea028

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));