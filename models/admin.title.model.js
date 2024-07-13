const express = require('express')
const control = express()
const db = require('../db')

class adminTitleController {
  async addTitle(title) {
    try {
      const newTitle = await db.query(`insert into title(name) values ('${title.titleName}') returning id_title as id`)
      return newTitle.rows[0]
    } catch (e) {
      throw new Error()
    }
  }
  async getTitles() {
    try {
      const allTitles = await db.query(`select name from title`)
      return allTitles.rows
    } catch (e) {
      throw new Error()
    }
  }
  async updateTitle(updated) {
    try {
      const info = await db.query(`select * from title where id_title = '${updated.id}'`)
      if (info.rows.length === 0) {
        throw new Error()
      }
      if (updated.newName.length === 0) {
        throw new Error()
      }
      const title = await db.query(`update title set name = '${updated.newName}' where id_title = '${updated.id}' returning *`)
      return title.rows[0]
    } catch (e) {
      throw new Error()
    }
  }
  async deleteTitle(id) {
    try {
      const info = await db.query(`select * from title where id_title = '${id}'`)
      if (info.rows.length === 0) {
        throw new Error()
      }
      const deletion = await db.query(`delete from title where id_title = '${id}'`)
      return id
    } catch (e) {
      throw new Error()
    }
  }
}

module.exports = new adminTitleController()
