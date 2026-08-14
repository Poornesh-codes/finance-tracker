import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function AddTransaction({ onAdd ,onEdit, transactions}) {
  const { id } = useParams()
  const navigate = useNavigate()
  const transactionToEdit = transactions?.find((t) => t.id === Number(id))

  const [formData, setFormData] = useState({
    date: '',
    amount: '',
    category: '',
    type: 'expense',
    note: '',
  })
  
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
    <div style={{ padding: '1rem' }}>
      <h1>Add Transaction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Amount</label>
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} step="0.01" required />
        </div>
        <div>
          <label>Category</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} required />
        </div>
        <div>
          <label>Type</label>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        <div>
          <label>Note</label>
          <input type="text" name="note" value={formData.note} onChange={handleChange} />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction