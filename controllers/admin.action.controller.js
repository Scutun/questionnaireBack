const express = require('express')
const control = express()
const model = require('../models/admin.title.model')

class adminController {
  //title CRUD
  async createTitle(req, res) {
    try {
      const newTitle = await model.addTitle(req.body)
      res.json(newTitle)
    } catch (e) {
      res.sendStatus(400)
    }
  }
  async findTitles(req, res) {
    try {
      const titles = await model.getTitles()
      res.json(titles)
    } catch (e) {
      res.sendStatus(404)
    }
  }
  async renewTitle(req, res) {
    try {
      const update = await model.updateTitle(req.body)
      res.json(update)
    } catch (e) {
      res.sendStatus(400)
    }
  }
  async deletionTitle(req, res) {
    try {
      const deletion = await model.deleteTitle(req.params.id)
      res.json(deletion)
    } catch (e) {
      res.sendStatus(404)
    }
  }
  //codes CRUD
}

module.exports = new adminController()
