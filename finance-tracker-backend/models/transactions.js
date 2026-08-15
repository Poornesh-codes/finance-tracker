const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['income', 'expense'],
    required: true,
  },
  note: {
    type: String,
    default: '',
  },
})

module.exports = mongoose.model('Transaction', transactionSchema)