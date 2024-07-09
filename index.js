require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')


app.use(express.json())
const PORT = process.env.port || 3020
app.use(cors())


app.listen(PORT, () => {
    console.log('Server Work', PORT)
})