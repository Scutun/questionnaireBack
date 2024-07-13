const express = require('express')
const control = express()
const modelTitle = require('../models/admin.title.model')
const modelCode = require('../models/admin.codes.model')

class adminController {
  //title CRUD
  async createTitle(req, res) {
    try {
      const newTitle = await modelTitle.addTitle(req.body)
      res.json(newTitle)
    } catch (e) {
      res.sendStatus(400)
    }
  }
  async findTitles(req, res) {
    try {
      const titles = await modelTitle.getTitles()
      res.json(titles)
    } catch (e) {
      res.sendStatus(404)
    }
  }
  async renewTitle(req, res) {
    try {
      const update = await modelTitle.updateTitle(req.body)
      res.json(update)
    } catch (e) {
      res.sendStatus(400)
    }
  }
  async deletionTitle(req, res) {
    try {
      const deletion = await modelTitle.deleteTitle(req.params.id)
      res.json(deletion)
    } catch (e) {
      res.sendStatus(404)
    }
  }
  //
  //
  //codes CRUD
  async createCode(req, res) {
    try {
      const newCode = await modelCode.addCode(req.body)
      res.json(newCode)
    } catch (e) {
      res.sendStatus(400)
    }
  }
  async findCodes(req, res) {
    try {
      const codes = await modelCode.getCodes()
      res.json(codes)
    } catch {
      res.sendStatus(404)
    }
  }
  async renewCode(req, res) {
    try {
      const update = await modelCode.updateCode(req.body)
      res.json(update)
    } catch (e) {
      res.sendStatus(400)
    }
  }
  async deletionCode(req, res) {
    try {
      const deletion = await modelCode.deleteCode(req.params.id)
      res.json(deletion)
    } catch (e) {
      res.sendStatus(404)
    }
  }
}

module.exports = new adminController()
