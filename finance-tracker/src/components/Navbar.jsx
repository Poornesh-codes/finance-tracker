import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="navbar-brand">
        Finance Tracker
      </Link>

      <Link to="/" className="navbar-link">
        Dashboard
      </Link>

      <Link to="/transactions" className="navbar-link">
        Transactions
      </Link>

      <Link to="/insights" className="navbar-link">
        Insights
      </Link>

      <Link to="/add" className="navbar-link navbar-add">
        + Add Transaction
      </Link>

    </nav>
  )
}

export default Navbar