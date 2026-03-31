const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  platform: { type: String, default: "LeetCode" },
  status: {
    type: String,
    enum: ["solved", "attempted", "unsolved"],
    required: true
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true
  },
  link: String,
  lastUpdate: { type: Date, default: Date.now }
});

const ProbModel = mongoose.model('Problem', problemSchema);

module.exports = ProbModel;