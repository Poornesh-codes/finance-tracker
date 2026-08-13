import sampleTransactions from '../data/sampleTransactions'

function Transactions() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Transactions</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>Date</th>
            <th style={{ textAlign: 'left' }}>Category</th>
            <th style={{ textAlign: 'left' }}>Note</th>
            <th style={{ textAlign: 'right' }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {sampleTransactions.map((t) => (
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Transactions