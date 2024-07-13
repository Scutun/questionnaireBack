const Router = require('express')
const router = new Router()
const adminController = require('../controllers/admin.action.controller')

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

module.exports = router
