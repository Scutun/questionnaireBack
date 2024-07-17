const Router = require('express')
const router = new Router()
const answerController = require('../controllers/answer.controller')

router.post('/user/answer', answerController.createAnswer)
router.get('/question/find', answerController.findAllQuestions)

module.exports = router
