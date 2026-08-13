import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
      <Link to="/">Dashboard</Link>
      <Link to="/transactions">Transactions</Link>
      <Link to="/add">Add Transaction</Link>
      <Link to="/insights">Insights</Link>
    </nav>
  )
}
export default Navbar