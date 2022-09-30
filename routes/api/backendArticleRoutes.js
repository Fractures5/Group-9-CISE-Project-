// routes/api/articleRoutes.js

const express = require('express');
const router = express.Router();

// Load article model
const BackendArticles = require('../../models/backend-article-model');

// @route GET api/Submitted-Form-Details/Suggested-Articles
// @description tests suggested articles route
// @access Public
router.get('/Suggested-Articles', (req, res) => res.send('backend articles route testing!'));

//@route GET api/Submitted-Form-Details
//@description Get all suggested articles
//@access Public
router.get('/', (req, res) => {
    BackendArticles.find()
    .then(speedarticles => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: 'No backend articles found' }));
});

// @route GET api/Submitted-Form-Details
// @description add/save suggested articles
// @access Public
router.post('/', (req, res) => {
    BackendArticles.create(req.body)
    .then(speedarticles => res.json({ msg: 'Backend article added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this backend article' }));
});

module.exports = router;