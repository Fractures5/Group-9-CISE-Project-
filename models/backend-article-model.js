const mongoose = require('mongoose');

const BackendArticleSchema = new mongoose.Schema({
  title: {
    type: String
  },
  author: {
    type: String
  },
  journalName: {
    type: String
  },
  publicationYear: {
    type: String
  },
  claim: {
    type: String
  },
  sePractice: {
    type: String
  },
  resultOfEvidence: {
    type: String
  },
  researchType: {
    type: String
  },
  typeOfParticipant: {
    type: String
  }
});

module.exports = BackendArticleSubmission = mongoose.model('speedarticles', BackendArticleSchema);