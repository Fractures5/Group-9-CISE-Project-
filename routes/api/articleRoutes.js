// routes/api/articleRoutes.js

<<<<<<< HEAD
const express = require('express');
const router = express.Router();

// Load article model
const SuggestedArticle = require('../../models/suggest-article-model');
=======
const express = require("express");
const router = express.Router();

// Load article model
const SuggestedArticle = require("../../models/suggest-article-model");
>>>>>>> 19359f9e24335fb017c1988fd53b866735666285

// @route GET api/Submitted-Form-Details/Suggested-Articles
// @description tests suggested articles route
// @access Public
<<<<<<< HEAD
router.get('/Suggested-Articles', (req, res) => res.send('suggested articles route testing!'));
=======
router.get("/Suggested-Articles", (req, res) =>
  res.send("suggested articles route testing!")
);
>>>>>>> 19359f9e24335fb017c1988fd53b866735666285

//@route GET api/Submitted-Form-Details
//@description Get all suggested articles
//@access Public
<<<<<<< HEAD
router.get('/', (req, res) => {
    SuggestedArticle.find()
    .then(article => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: 'No suggested articles found' }));
=======
router.get("/", (req, res) => {
  SuggestedArticle.find()
    .then((article) => res.json(books))
    .catch((err) =>
      res.status(404).json({ nobooksfound: "No suggested articles found" })
    );
>>>>>>> 19359f9e24335fb017c1988fd53b866735666285
});

// @route GET api/Submitted-Form-Details
// @description add/save suggested articles
// @access Public
<<<<<<< HEAD
router.post('/', (req, res) => {
    SuggestedArticle.create(req.body)
    .then(submittedformdetails => res.json({ msg: 'suggested article added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this suggested article' }));
=======
router.post("/", (req, res) => {
  SuggestedArticle.create(req.body)
    .then((submittedformdetails) =>
      res.json({ msg: "suggested article added successfully" })
    )
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this suggested article" })
    );
>>>>>>> 19359f9e24335fb017c1988fd53b866735666285
});

module.exports = router;