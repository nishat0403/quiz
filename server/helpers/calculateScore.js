const Question = require('../models/question')

module.exports = async (selectedOptions) => {
  let totalCorrect = 0
  selectedOptions.forEach((option, index) => {
    if (option.isCorrect) totalCorrect += 1
  })
  const totalQuestions = await Question.countDocuments()
  const score = totalCorrect / totalQuestions * 100;
  return {score, totalCorrect, totalQuestions}
}
