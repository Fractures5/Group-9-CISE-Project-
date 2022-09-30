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
  },
  articleNumber: {
    type: String,
  },
  articlePages: {
    type: String,
  },
  articleDOI: {
    type: String,
  },
  selectedSEPractice: {
    type: String,
  },
  articleBibtex: {
    type: String
  }
});

//Will add bibtext file upload text after research
module.exports = ArticleSuggestion = mongoose.model('submittedformdetails', SuggestArticleSchema);