import {useState,useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import AddTransaction from './pages/AddTransaction'
import Insights from './pages/Insights'
import Navbar from './components/Navbar'
function App() {
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/transactions`)
      .then((res) => res.json())
      .then((data) => {
        const normalised = data.map((t) => ({...t,id:t._id}))
        setTransactions(normalised)
      })
      .catch((err) => console.error('Failed to fetch transactions:', err))
  },[])
  function addTransaction(newTransaction) {
    fetch(`${import.meta.env.VITE_API_URL}/api/transactions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTransaction),
    })
      .then((res) => res.json())
      .then((savedTransaction) => {
        setTransactions((prev) => [...prev, { ...savedTransaction, id: savedTransaction._id }])
      })
      .catch((err) => console.error('Failed to add transaction:', err))
  }
  function editTransaction(updatedTransaction, id) {
    fetch(`${import.meta.env.VITE_API_URL}/api/transactions/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTransaction),
    })
      .then((res) => res.json())
      .then((savedTransaction) => {
        setTransactions((prev) =>
          prev.map((t) => (t.id === id ? { ...savedTransaction, id: savedTransaction._id } : t))
        )
      })
      .catch((err) => console.error('Failed to edit transaction:', err))
  }
  function deleteTransaction(id) {
    fetch(`${import.meta.env.VITE_API_URL}/api/transactions/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setTransactions((prev) => prev.filter((t) => t.id !== id))
      })
      .catch((err) => console.error('Failed to delete transaction:', err))
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard transactions={transactions} />} />
        <Route path="/transactions" element={<Transactions transactions={transactions} onDelete={deleteTransaction} />} />
        <Route path="/add" element={<AddTransaction onAdd={addTransaction} />} />
        <Route path="/insights" element={<Insights transactions={transactions} />} />
        <Route path="/edit/:id" element={<AddTransaction transactions={transactions} onAdd={addTransaction} onEdit={editTransaction} />} />
      </Routes>
    </>
  )
}

export default App