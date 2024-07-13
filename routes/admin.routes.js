const Router = require('express')
const router = new Router()
const adminController = require('../controllers/admin.action.controller')

router.post('/admin/title/create', adminController.createTitle)
router.get('/admin/title/find', adminController.findTitles)
router.put('/admin/title/update', adminController.renewTitle)

router.delete('/admin/title/delete/:id', adminController.deletionTitle)

module.exports = router
