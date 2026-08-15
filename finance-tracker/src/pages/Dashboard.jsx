import StatCard from '../components/Statcard'
import './Dashboard.css'
function Dashboard({ transactions }) {
  if (transactions.length === 0) {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>No transactions available. Please add some transactions to see dashboard insights.</p>
      </div>
    )
  }
  const totalIncome = transactions.filter((t) => t.type === 'income').reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = totalIncome - totalExpenses

  const categoryTotals = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount
      return acc
    }, {})

  const topCategories = Object.entries(categoryTotals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats-container">
        <StatCard title="Balance" value={balance} icon="💰" delay={0.1} />
        <StatCard title="Total Income" value={totalIncome} icon="📈" delay={0.2} />
        <StatCard title="Total Expenses" value={totalExpenses} icon="📉" delay={0.3} />
      </div>
      <div className="top-categories">
        <h2>Top Categories</h2>
        <div className="category-list">
          {topCategories.map(([category, amount]) => (
            <div className="category-item" key={category}>
              <span className="category-name">{category}</span>

              <span className="category-amount">
                ${amount.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard