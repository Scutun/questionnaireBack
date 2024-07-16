require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

const formRoute = require('./routes/form.routes')
const adminRoute = require('./routes/admin.routes')
const answerRoute = require('./routes/answer.routes')

app.use(express.json())
const PORT = process.env.port || 3020
app.use(cors())

app.use('/api', formRoute)
app.use('/api', adminRoute)
app.use('/api', answerRoute)

app.listen(PORT, () => {
  console.log('Server Work', PORT)
})
