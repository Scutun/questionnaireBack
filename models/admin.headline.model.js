const express = require('express')
const control = express()
const db = require('../db')

class adminHeadlineModel {
  async addHeadline(form) {
    try {
      if (form.headlineName.length === 0) {
        throw new Error()
      }
      const newHeadline = await db.query(`insert into headline(name) values ('${form.headlineName}') returning *`)
      return newHeadline.rows[0]
    } catch (e) {
      throw new Error()
    }
  }
  async getAllHeadline() {
    try {
      const info = await db.query('select * from headline')
      return info.rows
    } catch (e) {
      throw new Error()
    }
  }
  async updateHeadline(updated) {
    try {
      const info = await db.query(`select * from headline where id_headline = '${updated.id}'`)
      if (info.rows.length === 0) {
        throw new Error()
      }
      if (updated.newHeadline.length === 0) {
        throw new Error()
      }
      const headline = await db.query(`update headline set name = '${updated.newHeadline}' where id_headline = '${updated.id}' returning *`)
      return headline.rows[0]
    } catch (e) {
      throw new Error()
    }
  }
  async deleteHeadline(id) {
    try {
      const info = await db.query(`select * from headline where id_headline = '${id}'`)
      if (info.rows.length === 0) {
        throw new Error()
      }
      const deletion = await db.query(`delete from headline where id_headline = '${id}'`)
      return info.rows[0]
    } catch (e) {
      throw new Error()
    }
  }
}

module.exports = new adminHeadlineModel()
