const express = require('express')
const calculateScore = require('../helpers/calculateScore')
const Question = require('../models/question')
const Option = require('../models/option')
const data = require('../data/quiz.json')

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
    res.status(200).json(question)
  } catch (e) {
    console.log(e.message)
  }
})

router.post('/', function (req, res) {
  const data = req.body
  const result = calculateScore(data.selectedOptions)
  res.status(200).json(result)
})

router.post('/question', async function (req, res) {
  try {
    const question = new Question(req.body)
    const result = await question.save()
    console.log('Question saved: ', question)
    res.status(200).json({'message': 'Question saved successfully!'})
  } catch (error) {
    console.error(error.message)
    res.status(error.statusCode).send({'message': error.message})
  }
})

module.exports = router
