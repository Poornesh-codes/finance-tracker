import {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import AddTransaction from './pages/AddTransaction'
import Insights from './pages/Insights'
import Navbar from './components/Navbar'
import sampleTransactions from './data/sampleTransactions'
function App() {
  const [transactions, setTransactions] = useState(sampleTransactions)
  function addTransaction(newTransaction) {
    setTransactions((prev) => [...prev, {...newTransaction,id:Date.now()}])
  }
  function deleteTransaction(id) {
    setTransactions((prev) => prev.filter((t) => t.id !== id))
  }
  function editTransaction(updatedTransaction,id) {
    setTransactions((prev) => prev.map((t)=>t.id===id?{...updatedTransaction,id}:t))
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