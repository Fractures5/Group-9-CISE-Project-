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
    type: String,
    required: true
  },
  claim: {
    type: String,
  },
  sePractice: {
    type: String,
  },
  resultOfEvidence: {
    type: String,
  },
  researchType: {
    type: String,
  },
  typeOfParticipant: {
    type: String
  }
});

module.exports = BackendArticleSubmission = mongoose.model('speedarticles', BackendArticleSchema);