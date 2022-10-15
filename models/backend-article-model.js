const mongoose = require('mongoose');

const BackendArticleSchema = new mongoose.Schema({
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
    type: Number,
    required: true
  },
  claim: {
    type: String,
    required: true
  },
  sePractice: {
    type: String,
    required: true
  },
  resultOfEvidence: {
    type: String,
    required: true
  },
  researchType: {
    type: String,
    required: true
  },
  typeOfParticipant: {
    type: String,  
    required: true
  }
});

module.exports = BackendArticleSubmission = mongoose.model('speedarticles', BackendArticleSchema);