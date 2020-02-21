const express = require('express')
const Question = require('../models/question')

const router = express.Router()

// Get all questions
router.get('/', async function (req, res) {
  try {
    const questions = await Question.find()
    res.status(200).json(questions)
  } catch (error) {
    res.status(error.statusCode).send({'message': error.message})
  }
})

// Get question with given {id}
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

// Add a new question
router.post('/', async function (req, res) {
  try {
    const question = new Question(req.body)
    const result = await question.save()
    res.status(200).json(question)
  } catch (error) {
    console.error(error.message)
  }
})

// Delete a question with {id}
router.delete('/:id', async function (req, res) {
  const id = req.params.id
  const question = await Question.findByIdAndDelete(id)
  res.status(200).json(question)
})

// Update a question with {id}
router.put('/:id', async function (req, res) {
  const id = req.params.id
  const question = await Question.findById(id)
})

module.exports = router
