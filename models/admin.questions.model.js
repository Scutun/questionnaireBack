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
      const title = await db.query(`select id_title from title where name = '${question.questionTitle}'`)
      const newQuestion = await db.query(`insert into questions(content, fk_title_id) values('${question.questionContent}', '${title.rows[0].id_title}') returning *`)
      return newQuestion.rows[0]
    } catch (e) {
      throw new Error()
    }
  }
  async getAllQuestions() {
    try {
      const questions = await db.query(`select questions.id_question as id, questions.content, title.name from questions
            join title on questions.fk_title_id = title.id_title`)
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
      const question = await db.query(`update questions set content = '${updated.newContent}', fk_title_id = '${updated.newTitle}' where id_question = '${updated.id}' returning *`)
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
