module.exports = (selectedOptions) => {
  let totalCorrect = 0
  selectedOptions.forEach((option, index) => {
    if (option.isCorrect) totalCorrect += 1
  })
  const totalQuestions = 3
  const score = totalCorrect / totalQuestions * 100;
  return {score, totalCorrect, totalQuestions}
}
