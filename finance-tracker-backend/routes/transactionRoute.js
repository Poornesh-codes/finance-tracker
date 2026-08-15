const express = require('express')
const router = express.Router()
const Transaction = require('../models/transactions')

// GET all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find()
    res.json(transactions)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// POST a new transaction
router.post('/', async (req, res) => {
  try {
    const newTransaction = new Transaction(req.body)
    const savedTransaction = await newTransaction.save()
    res.status(201).json(savedTransaction)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// PUT (update) a transaction by id
router.put('/:id', async (req, res) => {
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updatedTransaction)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// DELETE a transaction by id
router.delete('/:id', async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id)
    res.json({ message: 'Transaction deleted' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router