import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "./AddTransaction.css"
function AddTransaction({ onAdd ,onEdit, transactions}) {
  const { id } = useParams()
  const navigate = useNavigate()
  const transactionToEdit = transactions?.find((t) => t.id === id)

  const [formData, setFormData] = useState(
    transactionToEdit
      ? {
          date: transactionToEdit.date,
          amount: transactionToEdit.amount,
          category: transactionToEdit.category,
          type: transactionToEdit.type,
          note: transactionToEdit.note,
        }
      : {
          date: '',
          amount: '',
          category: '',
          type: 'expense',
          note: '',
        }
  )
  
  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (transactionToEdit) {
      onEdit({ ...formData, amount: parseFloat(formData.amount) }, transactionToEdit.id)
    } else {
      onAdd({ ...formData, amount: parseFloat(formData.amount) })
    }
    navigate('/transactions')
  }

  return (
    <div className="add-transaction-page">
      <div className="transaction-form-card">
        <h1>{transactionToEdit ? 'Edit Transaction' : 'Add Transaction'}</h1>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              step="0.01"
              placeholder="Enter amount"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              id="category"
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="e.g. Food, Travel, Shopping"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">Type</label>

            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="note">Note</label>

            <input
              id="note"
              type="text"
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Optional note"
            />
          </div>

          <button className="submit-button" type="submit">
            {transactionToEdit ? 'Save Changes' : 'Add Transaction'}
          </button>

        </form>
      </div>
    </div>
    )
  }
export default AddTransaction