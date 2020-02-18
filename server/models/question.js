const {OptionSchema} = require('./option')
const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  options: [OptionSchema]
})

module.exports = mongoose.model('Question', QuestionSchema);
