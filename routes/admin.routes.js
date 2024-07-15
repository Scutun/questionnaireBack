const Router = require('express')
const router = new Router()
const adminController = require('../controllers/admin.action.controller')
const checkToken = require('../middleware/checkToken')

router.use('/admin', checkToken)

//log in
router.post('/logIn', adminController.logInAdmin)

//form CRUD
router.post('/admin/headline/create', adminController.createHeadline)
router.get('/admin/headline/find', adminController.findHeadline)
router.put('/admin/headline/update', adminController.renewHeadline)
router.delete('/admin/headline/delete/:id', adminController.deletionHeadline)

//title CRUD
router.post('/admin/title/create', adminController.createTitle)
router.get('/admin/title/find', adminController.findTitles)
router.put('/admin/title/update', adminController.renewTitle)
router.delete('/admin/title/delete/:id', adminController.deletionTitle)

//codes CRUD
router.post('/admin/code/create', adminController.createCode)
router.get('/admin/code/find', adminController.findCodes)
router.put('/admin/code/update', adminController.renewCode)
router.delete('/admin/code/delete/:id', adminController.deletionCode)

//questions CRUD
router.post('/admin/question/create', adminController.createQustion)
router.get('/admin/question/find', adminController.findAllQuestions)
router.put('/admin/question/update', adminController.renewQuestion)
router.delete('/admin/question/delete/:id', adminController.deletionQuestion)

module.exports = router
