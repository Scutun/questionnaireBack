const jwt = require('jsonwebtoken')

function tokenCheck(req, res, next) {
  try {
    const authHeaders = req.headers.authorization
    const token = authHeaders && authHeaders.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    next()
  } catch (e) {
    res.sendStatus(403)
  }
}

module.exports = tokenCheck
