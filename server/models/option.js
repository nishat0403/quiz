const mongoose = require('mongoose');

OptionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  isCorrect: {
    type: Boolean,
    required: true,
    default: false
  }
})

module.exports = {
  Option: mongoose.model('Option', OptionSchema),
  OptionSchema: OptionSchema
}
