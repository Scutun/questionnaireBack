const express = require('express')
const control = express()
const db = require('../db')

class formModel {
  async fillForm(info) {
    try {
      if (info.surname.length === 0 || info.name.length === 0 || info.email.length === 0) {
        throw new Error()
      }
      if (
        info.phone.length === 0 ||
        info.birthday.length === 0 ||
        info.fillingDate.length === 0 ||
        info.pregnancy.length === 0 ||
        info.cramps.length === 0 ||
        info.russianOnly.length === 0 ||
        info.childrenAmount.length === 0 ||
        info.motherAge.length === 0 ||
        info.fatherAge.length === 0 ||
        info.educaterAge.length === 0 ||
        info.motherEducation.length === 0 ||
        info.fatherEducation.length === 0 ||
        info.educaterEducation.length === 0 ||
        info.filling.length === 0 ||
        info.parturition.length === 0 ||
        info.nurture.length === 0 ||
        info.health.length === 0 ||
        info.gender.length === 0 ||
        info.educater.length === 0 ||
        info.eduMood.length === 0 ||
        info.economicSituation.length === 0 ||
        info.childValue.length === 0
      ) {
        throw new Error()
      }
      const newUser = await db.query(`insert into users(surname, name, email) values ('${info.surname}','${info.name}', '${info.email}') returning id_user as id;`)
      await db.query(`insert into infos(phone, birthday, filling_date, pregnancy, cramps, russion_only, children_amount, 
                mother_age, father_age, educater_age,fk_mother_education_id ,fk_father_education_id ,fk_educater_education_id ,
                fk_filling_id , fk_parturition_id ,fk_nurture_id ,fk_health_id ,fk_gender_id ,fk_educater_id ,fk_edu_mood_id ,
                fk_economic_situation_id,fk_child_value_id) 
                values ('${info.phone}', '${info.birthday}', '${info.fillingDate}', 
                '${info.pregnancy}', '${info.cramps}', '${info.russianOnly}', 
                '${info.childrenAmount}', '${info.motherAge}', '${info.fatherAge}', 
                '${info.educaterAge}', '${info.motherEducation}', '${info.fatherEducation}', 
                '${info.educaterEducation}', '${info.filling}', '${info.parturition}', 
                '${info.nurture}', '${info.health}', '${info.gender}', 
                '${info.educater}', '${info.eduMood}', '${info.economicSituation}', '${info.childValue}');`)
      return newUser.rows[0]
    } catch (e) {
      throw new Error()
    }
  }
}

module.exports = new formModel()
