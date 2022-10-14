// routes/api/articleRoutes.js

const express = require("express");
const router = express.Router();

// Load article model
const SuggestedArticle = require("../../models/suggest-article-model");

// @route GET api/Submitted-Form-Details/Suggested-Articles
// @description tests suggested articles route
// @access Public
router.get("/Suggested-Articles", (req, res) =>
  res.send("suggested articles route testing!")
);

//@route GET api/Submitted-Form-Details
//@description Get all suggested articles
//@access Public
router.get("/", (req, res) => {
  SuggestedArticle.find()
    .then((article) => res.json(books))
    .catch((err) =>
      res.status(404).json({ nobooksfound: "No suggested articles found" })
    );
});

// @route GET api/Submitted-Form-Details
// @description add/save suggested articles
// @access Public
router.post("/", (req, res) => {
  SuggestedArticle.create(req.body)
    .then((submittedformdetails) =>
      res.json({ msg: "suggested article added successfully" })
    )
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this suggested article" })
    );
});

module.exports = router;