const Router = require('express')
const router = new Router()
const adminTitleController = require('../controllers/admin.action.controller')

//title CRUD
router.post('/admin/title/create', adminTitleController.createTitle)
router.get('/admin/title/find', adminTitleController.findTitles)
router.put('/admin/title/update', adminTitleController.renewTitle)
router.delete('/admin/title/delete/:id', adminTitleController.deletionTitle)

//codes CRUD

module.exports = router
