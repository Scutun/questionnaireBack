const express = require('express')
const control = express()
const db = require('../db')

class answerModel {
  async addAnswer(info) {
    try {
      const { answerCodeArr, questionIdArr, usersId } = info
      if (questionIdArr.length !== answerCodeArr.length) {
        throw new Error()
      }
      for (let i = 0; i < questionIdArr.length; i++) {
        await db.query(`insert into answers(answer_code, fk_users_id, fk_questions_id) values ('${answerCodeArr[i]}', '${usersId}', '${questionIdArr[i]}');`)
      }
      return usersId
    } catch (e) {
      throw new Error()
    }
  }
  async getQuestions() {
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
}

module.exports = new answerModel()
