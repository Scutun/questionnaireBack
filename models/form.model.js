const express = require("express")
const control = express()
const db = require("../db")

class formModel {
  async fillForm(info) {
    try {
      const newUser = await db.query(`insert into users(surname, name, email) values (${info.surname}, ${info.name}, ${info.email}) returning id_user;
                insert into infos(phone, birthday, filling_date, pregnancy, cramps, russion_only, children_amount, 
                mother_age, father_age, educater_age,fk_mother_education_id ,fk_father_education_id ,fk_educater_education_id ,
                fk_filling_id , fk_parturition_id ,fk_nurture_id ,fk_health_id ,fk_gender_id ,fk_educater_id ,fk_edu_mood_id ,
                fk_economic_situation_id,fk_child_value_id) 
                values (${info.phone}, ${info.birthday}, ${info.fillingDate}, 
                ${info.pregnancy}, ${info.cramps}, ${info.russionOnly}, 
                ${info.childrenAmount}, ${info.motherAge}, ${info.fatherAge}, 
                ${info.educaterAge}, ${info.motherEducation}, ${info.fatherEducation}, 
                ${info.educaterEducation}, ${info.filling}, ${info.parturition}, 
                ${info.nurture}, ${info.health}, ${info.gender}, 
                ${info.educater}, ${info.eduMood}, ${info.economicSituation}, ${info.childValue});`)
      return newUser.rows[0]
    } catch (e) {
      throw new Error()
    }
  }
}

module.exports = new formModel()
