const express = require('express')
const control = express()
const db = require('../db')

class adminQuestionModel {
  async addQuestion(question) {
    try {
      if (question.questionContent.length === 0) {
        throw new Error()
      }
      const info = await db.query(`select * from questions where content = '${question.questionContent}'`)
      if (info.rows.length !== 0) {
        throw new Error()
      }
      const newQuestion = await db.query(
        `insert into questions(content, fk_title_id, fk_headline_id, hardness) values('${question.questionContent}', '${question.questionTitleId}', '${question.headline}', '${question.hardness}') returning *`
      )
      return newQuestion.rows[0]
    } catch (e) {
      throw new Error()
    }
  }
  async getAllQuestions() {
    try {
      const questions = await db.query(`select questions.id_question as id, questions.content, headline.name as headlineName, title.name as titleName from questions
            join headline on questions.fk_headline_id = headline.id_headline
            join title on questions.fk_title_id = title.id_title
			      order by id_question`)
      return questions.rows
    } catch (e) {
      throw new Error()
    }
  }
  async updateQuestion(updated) {
    try {
      const info = await db.query(`select * from questions where id_question = '${updated.id}'`)
      if (info.rows.length === 0) {
        throw new Error()
      }
      if (updated.newContent.length === 0) {
        throw new Error()
      }
      if (updated.newTitle.length === 0) {
        throw new Error()
      }
      const question = await db.query(
        `update questions set content = '${updated.newContent}', fk_title_id = '${updated.newTitle}', fk_headline_id = '${updated.newHeadline}', hardness = '${updated.newHardness}' where id_question = '${updated.id}' returning *`
      )
      return question.rows[0]
    } catch (e) {
      throw new Error()
    }
  }
  async deleteQuestion(id) {
    try {
      const info = await db.query(`select * from questions where id_question = '${id}'`)
      if (info.rows.length === 0) {
        throw new Error()
      }
      const deletion = await db.query(`delete from questions where id_question = '${id}'`)
      return info.rows[0]
    } catch (e) {
      throw new Error()
    }
  }
}

module.exports = new adminQuestionModel()
