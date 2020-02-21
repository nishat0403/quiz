const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const uri = "mongodb://localhost:27017/quiz";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Database connection error', error))

// Routes
const quiz = require('./routes/quiz')
const question = require('./routes/question')

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/quiz', quiz)
app.use('/question', question)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log('Server listening at port: ' + port)
})
