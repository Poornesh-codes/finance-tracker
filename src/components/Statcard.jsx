import { motion } from 'motion/react'
import './Statcard.css'
function StatCard({ title, value, icon,delay }) {
  return (
    <motion.div className="stat-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{duration:0.4 , delay:delay}}
    >
      <div className="stat-card-header">
        <span className="stat-card-icon">{icon}</span>
        <span className="stat-card-title">{title}</span>
      </div>

      <h2 className="stat-card-value">${value.toFixed(2)}</h2>
    </motion.div>
  )
}

export default StatCard