const jwt = require('jsonwebtoken')

function tokenCheck(req, res, next) {
  try {
    jwt.verify(req.body.authorization, process.env.ACCESS_TOKEN_SECRET)
    next()
  } catch (e) {
    res.sendStatus(403)
  }
}

module.exports = tokenCheck
