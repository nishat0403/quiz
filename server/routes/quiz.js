const express = require('express')
const Question = require('../models/question')

const router = express.Router()

router.get('/', async function (req, res) {
  try {
    const questions = await Question.find()
    res.status(200).json(questions)
  } catch (error) {
    res.status(error.statusCode).send({'message': error.message})
  }
})

router.get('/:id', async function (req, res) {
  try {
    const id = req.params.id
    const question = await Question.findById(id)
    if (!question) res.status(404).send('Question not found')
    res.status(200).json(question)
  } catch (e) {
    console.log(e.message)
  }
})

router.post('/', async function (req, res) {
  const data = req.body
  let totalCorrect = 0
  data.selectedOptions.forEach((option, index) => {
    if (option.isCorrect) totalCorrect += 1
  })
  const totalQuestions = await Question.countDocuments()
  const score = totalCorrect / totalQuestions * 100;
  res.status(200).json({score, totalCorrect, totalQuestions})
})

router.post('/question', async function (req, res) {
  try {
    const question = new Question(req.body)
    const result = await question.save()
    res.status(200).json(question)
  } catch (error) {
    console.error(error.message)
  }
})

module.exports = router
