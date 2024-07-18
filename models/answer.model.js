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
  async getResult(userId) {
    try {
      let totalResult = 0
      let maxHardness = 0
      let minHardness = 0
      let avgHardness1 = 0
      let avgHardness2 = 0
      const amount = await db.query(`select COUNT(*) as counter from answers where fk_users_id = '${userId}' `)
      for (let i = 1; i <= amount.rows[0].counter; i++) {
        const hardness = await db.query(`select hardness from questions where id_question = '${i}'`)
        maxHardness = maxHardness + hardness.rows[0].hardness * 3
        avgHardness2 = avgHardness2 + hardness.rows[0].hardness * 2.5
        avgHardness1 = avgHardness1 + hardness.rows[0].hardness * 1.5
        minHardness = minHardness + hardness.rows[0].hardness * 1
        const answer = await db.query(`select answer_code as answer from answers where fk_questions_id = '${i}'`)
        totalResult = totalResult + hardness.rows[0].hardness * answer.rows[0].answer
      }
      if (totalResult >= avgHardness2 && totalResult <= maxHardness) {
        const result = 'bad'
        return [totalResult.toFixed(1), result]
      }
      if (totalResult >= avgHardness1 && totalResult <= avgHardness2) {
        const result = 'good'
        return [totalResult.toFixed(1), result]
      }
      if (totalResult >= minHardness && totalResult <= avgHardness1) {
        const result = 'excelent'
        return [totalResult.toFixed(1), result]
      }
    } catch (e) {
      throw new Error()
    }
  }
}

module.exports = new answerModel()
