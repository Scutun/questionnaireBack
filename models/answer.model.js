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
        const answer = await db.query(`insert into answers(answer_code, fk_users_id, fk_questions_id) values ('${answerCodeArr[i]}', '${usersId}', '${questionIdArr[i]}');`)
      }
      return usersId
    } catch (e) {
      throw new Error()
    }
  }
}

module.exports = new answerModel()
