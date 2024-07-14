const jwt = require('jsonwebtoken')

function tokenCheck(req, res, next) {
  try {
    const authBody = req.body.authorization
    const token = authBody && authBody.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    next()
  } catch (e) {
    res.sendStatus(403)
  }
}

module.exports = tokenCheck
