require('dotenv').config()
const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors')

connectToMongo()

const app = express()
const port = 3000

// Middleware to parse JSON data in the request body
app.use(cors())
app.use(express.json());

// our routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`NoteApp is listing at http://localhost:${port}`)
})