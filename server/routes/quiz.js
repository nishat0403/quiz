const express = require('express')
const calculateScore = require('../helpers/calculateScore')
const Question = require('../models/question')
const Option = require('../models/option')
const data = require('../data/quiz.json')

const router = express.Router()

router.get('/', function (req, res) {
  res.status(200).json(data)
})

router.get('/:id', function (req, res) {
  const id = req.params.id
  res.status(200).json(data[0])
})

router.post('/', function (req, res) {
  const data = req.body
  const result = calculateScore(data.selectedOptions)
  res.status(200).json(result)
})

router.post('/question', function (req, res) {
  const data = req.body
  let question = new Question(data)
  question.save((error) => {
    if (error) {
      console.log('Error occurred');
    } else {
      console.log('Saved Question')

      for (let option in data.options) {
        let opt = new Option({
          text: option.text,
          isCorrect: option.isCorrect,
          question: question._id
        })
        opt.save((error) => {
          if (!error) {
            console.log('Option saved successfully');
          }
        })
      }
    }
  })
  console.log(data)
})

module.exports = router
