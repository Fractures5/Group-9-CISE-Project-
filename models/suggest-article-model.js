// models/suggest-article-model.js

const mongoose = require('mongoose');

const SuggestArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  journalName: {
    type: String,
    required: true
  },
  publicationYear: {
    type: String,
    required: true
  },
  articleVolume: {
    type: String,
    required: true
  },
  articleNumber: {
    type: String,
    required: true
  },
  articlePages: {
    type: String,
    required: true
  },
  articleDOI: {
    type: String,
    required: true
  },
  selectedSEPractice: {
    type: String,
    required: true
  }
  // articleBibtex: {
  //   type: String
  // }
});

//Will add bibtext file upload text after research
module.exports = ArticleSuggestion = mongoose.model('submittedformdetails', SuggestArticleSchema);