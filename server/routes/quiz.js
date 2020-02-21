const express = require('express')
const Question = require('../models/question')

const router = express.Router()

router.post('/', async function (req, res) {
  try {
    const data = req.body
    let totalCorrect = 0
    data.selectedOptions.forEach((option, index) => {
      if (option.isCorrect) totalCorrect += 1
    })
    const totalQuestions = await Question.countDocuments()
    const score = totalCorrect / totalQuestions * 100;
    res.status(200).json({score, totalCorrect, totalQuestions})
  } catch (e) {
    res.status(400).send(e.message)
  }
})

module.exports = router
