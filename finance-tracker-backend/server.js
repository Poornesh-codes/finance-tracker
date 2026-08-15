const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err))
const transactionRoute = require('./routes/transactionRoute')
app.use('/api/transactions', transactionRoute)
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})