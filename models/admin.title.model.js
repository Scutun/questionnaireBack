const express = require('express')
const control = express()
const db = require('../db')

class adminTitleModel {
  async addTitle(title) {
    try {
      if (title.titleName.length === 0) {
        throw new Error()
      }
      const newTitle = await db.query(`insert into title(name) values ('${title.titleName}') returning *`)
      return newTitle.rows[0]
    } catch (e) {
      throw new Error()
    }
  }
  async getTitles() {
    try {
      const allTitles = await db.query(`select name from title`)
      if (allTitles.rows.length === 0) {
        throw new Error()
      }
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
      return info.rows[0]
    } catch (e) {
      throw new Error()
    }
  }
}

module.exports = new adminTitleModel()
