const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())//if we want to use req.body this middleware is required

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

connectToMongo();

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})