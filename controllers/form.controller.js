const express = require('express')
const control = express()
const model = require('../models/form.model')

class formController {
  async createForm(req, res) {
    try {
      const newForm = await model.fillForm(req.body)
      res.json({ newForm: newForm })
    } catch (e) {
      res.sendStatus(400)
    }
  }
}

module.exports = new formController()
