import sampleTransactions from '../data/sampleTransactions'

function Dashboard() {
  const totalIncome = sampleTransactions.filter((t) => t.type === 'income').reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = sampleTransactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = totalIncome - totalExpenses

  const categoryTotals = sampleTransactions
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
      <p>Balance: ${balance.toFixed(2)}</p>
      <p>Total Income: ${totalIncome.toFixed(2)}</p>
      <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>

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