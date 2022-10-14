// app.js File
//require('dotenv').config({ path: "./env"});
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
//const path =  require('path');
//const { response } = require('express');

// routes
const suggestArticles = require('./routes/api/articleRoutes');
const backendArticles = require('./routes/api/backendArticleRoutes');
const app = express();

// Connect Database
connectDB();

//cors
app.use(cors({origin: true, credentials: true}));

// Init middleware
app.use(express.json({extended: false}));

// app.use(express.static(path.join(__dirname, "./cise-speed-app/build")))
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "cise-speed-app", "build", "index.html"))
// })

//app.get('/', (req, res) => res.send('Testing database submission form'));

// Use routes
app.use('/api/articleRoutes', suggestArticles);
app.use('/api/backendArticleRoutes', backendArticles);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));