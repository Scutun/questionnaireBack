const express = require('express')
const control = express()
const model = require('../models/answer.model')

class questionsController {
  async createAnswer(req, res) {
    try {
      const newAnswer = await model.addAnswer(req.body)
      res.json({ userId: newAnswer })
    } catch (e) {
      res.sendStatus(400)
    }
  }
}

module.exports = new questionsController()
