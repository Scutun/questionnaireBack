const express = require('express')
const control = express()
const modelTitle = require('../models/admin.title.model')
const modelCode = require('../models/admin.codes.model')
const modelQuestion = require('../models/admin.questions.model')
const modelLogIn = require('../models/admin.logIn.model')
const modelHeadline = require('../models/admin.headline.model')

class adminController {
  //log in
  async logInAdmin(req, res) {
    try {
      const allow = await modelLogIn.logAdmin(req.body)
      res.json({ allow: allow })
    } catch (e) {
      res.sendStatus(403)
    }
  }
  //
  //
  //form CRUD
  async createHeadline(req, res) {
    try {
      const newHeadline = await modelHeadline.addHeadline(req.body)
      res.json({ newHeadline: newHeadline })
    } catch (e) {
      res.sendStatus(400)
    }
  }
  async findHeadline(req, res) {
    try {
      const headline = await modelHeadline.getAllHeadline()
      res.json({ newHeadline: headline })
    } catch (e) {
      res.sendStatus(404)
    }
  }
  async renewHeadline(req, res) {
    try {
      const update = await modelHeadline.updateHeadline(req.body)
      res.json({ update: update })
    } catch (e) {
      res.sendStatus(400)
    }
  }
  async deletionHeadline(req, res) {
    try {
      const deletion = await modelHeadline.deleteHeadline(req.params.id)
      res.json({ deletion: deletion })
    } catch (e) {
      res.sendStatus(404)
    }
  }
  //
  //
  //title CRUD
  async createTitle(req, res) {
    try {
      const newTitle = await modelTitle.addTitle(req.body)
      res.json({ newTitle: newTitle })
    } catch (e) {
      res.sendStatus(400)
    }
  }
  async findTitles(req, res) {
    try {
      const titles = await modelTitle.getTitles()
      res.json({ titles: titles })
    } catch (e) {
      res.sendStatus(404)
    }
  }
  async renewTitle(req, res) {
    try {
      const update = await modelTitle.updateTitle(req.body)
      res.json({ update: update })
    } catch (e) {
      res.sendStatus(400)
    }
  }
  async deletionTitle(req, res) {
    try {
      const deletion = await modelTitle.deleteTitle(req.params.id)
      res.json({ deletion: deletion })
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
      res.json({ newCode: newCode })
    } catch (e) {
      res.sendStatus(400)
    }
  }
  async findCodes(req, res) {
    try {
      const codes = await modelCode.getCodes()
      res.json({ codes: codes })
    } catch {
      res.sendStatus(404)
    }
  }
  async renewCode(req, res) {
    try {
      const update = await modelCode.updateCode(req.body)
      res.json({ update: update })
    } catch (e) {
      res.sendStatus(400)
    }
  }
  async deletionCode(req, res) {
    try {
      const deletion = await modelCode.deleteCode(req.params.id)
      res.json({ deletion: deletion })
    } catch (e) {
      res.sendStatus(404)
    }
  }
  //
  //
  //questioms CRUD
  async createQustion(req, res) {
    try {
      const newQuestion = await modelQuestion.addQuestion(req.body)
      res.json({ newQuestion: newQuestion })
    } catch (e) {
      res.sendStatus(400)
    }
  }
  async findAllQuestions(req, res) {
    try {
      const getQuestions = await modelQuestion.getAllQuestions()
      res.json({ getQuestions: getQuestions })
    } catch (e) {
      res.sendStatus(404)
    }
  }
  async renewQuestion(req, res) {
    try {
      const update = await modelQuestion.updateQuestion(req.body)
      res.json({ update: update })
    } catch (e) {
      res.sendStatus(400)
    }
  }
  async deletionQuestion(req, res) {
    try {
      const deletion = await modelQuestion.deleteQuestion(req.params.id)
      res.json({ deletion: deletion })
    } catch (e) {
      res.sendStatus(404)
    }
  }
}

module.exports = new adminController()
