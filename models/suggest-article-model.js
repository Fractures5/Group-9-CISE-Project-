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
  publciationYear: {
    type: Number,
    required: true
  },
  articleVolume: {
    type: Number,
  },
  articleNumber: {
    type: Number,
  },
  articlePages: {
    type: Number,
  },
  articleDOI: {
    type: String,
  },
  selectedSEPractice: {
    type: String,
  }
});

//Will add bibtext file upload text after research
module.exports = ArticleSuggestion = mongoose.model('article', SuggestArticleSchema);