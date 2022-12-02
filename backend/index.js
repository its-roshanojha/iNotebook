const connectToMongo = require('./db');
const express = require('express')
const app = express()
const port = 5000

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

// connect mongo
connectToMongo();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})