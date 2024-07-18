const Router = require("express")
const router = new Router()
const formController = require("../controllers/form.controller")

router.post("/form/create", formController.createForm)

module.exports = router
