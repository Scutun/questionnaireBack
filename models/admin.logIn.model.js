const express = require('express')
const control = express()
const jwt = require('jsonwebtoken')
const db = require('../db')

class adminLogInModel {
  async logAdmin(info) {
    try {
      const datas = await db.query(`select id_user as id, email, password from users where email = '${info.email}' and admin = 'true'`)
      if (datas.rows[0].length === 0) {
        throw new Error()
      }
      if (datas.rows[0].password !== info.password) {
        throw new Error()
      }
      const token = jwt.sign({ email: info.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '4h' })
      return token
    } catch (e) {
      console.log(e)
      throw new Error()
    }
  }
}

module.exports = new adminLogInModel()
