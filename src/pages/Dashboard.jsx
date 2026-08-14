import StatCard from '../components/Statcard'
import './Dashboard.css'
function Dashboard({ transactions }) {
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
    <div>
      <h1>Dashboard</h1>
      <div className="stats-container">
        <StatCard title="Balance" value={balance} icon="💰" delay={0.1} />
        <StatCard title="Total Income" value={totalIncome} icon="📈" delay={0.2} />
        <StatCard title="Total Expenses" value={totalExpenses} icon="📉" delay={0.3} />
      </div>

      <h2>Top Categories</h2>
      <ul>
        {topCategories.map(([category, amount]) => (
          <li key={category}>
            {category}: ${amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard