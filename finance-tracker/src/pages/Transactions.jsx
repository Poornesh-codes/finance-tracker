import { useState } from 'react'
import { Link } from 'react-router-dom'
function Transactions({ transactions ,onDelete, onEdit}) {
  const [Search, setSearch] = useState('')
  const [CategoryFilter, setCategoryFilter] = useState('All')
  const [TypeFilter, setTypeFilter] = useState('All')
  const[StartDate,setStartDate]=useState('')
  const[EndDate,setEndDate]=useState('')
  const categories = ['All', ...new Set(transactions.map((t) => t.category))]
  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch = t.note.toLowerCase().includes(Search.toLowerCase())||t.category.toLowerCase().includes(Search.toLowerCase())
    const matchesCategory = CategoryFilter === 'All' || t.category === CategoryFilter
    const matchesType = TypeFilter === 'All' || t.type === TypeFilter
    const matchesStartDate = !StartDate || t.date >= StartDate
    const matchesEndDate = !EndDate || t.date <= EndDate

    return matchesSearch && matchesCategory && matchesType && matchesStartDate && matchesEndDate
  })
  function convertToCSV(data) {
    const headers = ['Date', 'Category', 'Note', 'Type', 'Amount']
    const rows = data.map((t) => [t.date, `"${t.category}"`, `"${t.note}"`, t.type, t.amount].join(','))
  return [headers.join(','), ...rows].join('\n')
  }
  function handleExportcsv(){
    const csvstring = convertToCSV(filteredTransactions)
    const blob = new Blob([csvstring], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'transactions.csv'
    a.click()
    URL.revokeObjectURL(url)

  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Transactions</h1>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search by note or category"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={CategoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select value={TypeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="All">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input type="date" value={StartDate} onChange={(e) => setStartDate(e.target.value)} />
        <input type="date" value={EndDate} onChange={(e) => setEndDate(e.target.value)} />
        <button onClick={() => {setSearch(''); setCategoryFilter('All'); setTypeFilter('All'); setStartDate(''); setEndDate('')}}>Reset Filters</button>
        <button onClick={handleExportcsv}>Export to CSV</button>
      </div>  
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>Date</th>
            <th style={{ textAlign: 'left' }}>Category</th>
            <th style={{ textAlign: 'left' }}>Note</th>
            <th style={{ textAlign: 'right' }}>Amount</th>
            <th style={{ textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((t) => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.category}</td>
              <td>{t.note}</td>
              <td
                style={{
                  textAlign: 'right',
                  color: t.type === 'income' ? 'green' : 'red',
                }}
              >
                {t.type === 'income' ? '+' : '-'}${t.amount.toFixed(2)}
              </td>
              <td style={{ textAlign: 'center' }}>
                <button onClick={() => onDelete(t.id)}>Delete</button>
                <Link to={`/edit/${t.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredTransactions.length === 0 && <p>No transactions found.</p>}
    </div>
  )
}

export default Transactions