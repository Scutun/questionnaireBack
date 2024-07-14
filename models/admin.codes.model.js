const express = require('express')
const control = express()
const db = require('../db')

class adminCodesModel {
  async addCode(code) {
    try {
      if (code.codeName.length === 0) {
        throw new Error()
      }
      const newCode = await db.query(`insert into codes(name) values ('${code.codeName}') returning *`)
      return newCode.rows[0]
    } catch (e) {
      throw new Error()
    }
  }
  async getCodes() {
    try {
      const allCodes = await db.query(`select name from codes`)
      if (allCodes.rows.length === 0) {
        throw new Error()
      }
      return allCodes.rows
    } catch (e) {
      throw new Error()
    }
  }
  async updateCode(updated) {
    try {
      const info = await db.query(`select * from codes where id_codes = '${updated.id}'`)
      if (info.rows.length === 0) {
        throw new Error()
      }
      if (updated.newName.length === 0) {
        throw new Error()
      }
      const codes = await db.query(`update codes set name = '${updated.newName}' where id_codes = '${updated.id}' returning *`)
      return codes.rows[0]
    } catch (e) {
      throw new Error()
    }
  }
  async deleteCode(id) {
    try {
      const info = await db.query(`select * from codes where id_codes = '${id}'`)
      if (info.rows.length === 0) {
        throw new Error()
      }
      const deletion = await db.query(`delete from codes where id_codes = '${id}'`)
      return id
    } catch (e) {
      throw new Error()
    }
  }
}

module.exports = new adminCodesModel()
