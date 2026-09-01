<h1>system Architecture</h1>
<img width="1536" height="684" alt="image" src="https://github.com/user-attachments/assets/8a62c233-2f07-4340-8f87-95ba92afaa50" />


💰 Finance Tracker

A full-stack Finance Tracker web application that helps users manage and visualize their income and expenses.

The application allows users to add, edit, delete, and track transactions while providing useful financial insights through an interactive dashboard.

🚀 Live Demo

- Frontend: Add your deployed frontend link here
- Backend API: https://finance-tracker-b.onrender.com

✨ Features

- ➕ Add income and expense transactions
- ✏️ Edit existing transactions
- 🗑️ Delete transactions
- 💰 Track total balance
- 📈 View total income and expenses
- 📊 Financial insights and visualizations
- 🥧 Category-based expense visualization
- 📅 Transaction history
- 📤 Export transaction data as CSV
- 📱 Responsive user interface
- ☁️ Full-stack deployment

🛠️ Tech Stack

Frontend

- React.js
- Vite
- JavaScript
- CSS
- Recharts

Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

📂 Project Structure

finance-tracker/
│
├── finance-tracker/              # Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── data/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── .env.development
│   ├── .env.production
│   └── package.json
│
├── finance-tracker-backend/      # Backend
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md

🔗 API

The backend is built using Express.js and MongoDB.

Transactions

GET    /api/transactions
POST   /api/transactions
PUT    /api/transactions/:id
DELETE /api/transactions/:id

⚙️ Environment Variables

Frontend

Create a ".env.development" file:

VITE_API_URL=http://localhost:5000

For production:

VITE_API_URL=https://finance-tracker-b.onrender.com

Backend

Create a ".env" file inside "finance-tracker-backend":

MONGO_URI=your_mongodb_connection_string
PORT=5000

💻 Run Locally

1. Clone the repository

git clone https://github.com/Poornesh-codes/finance-tracker.git
cd finance-tracker

2. Start the backend

cd finance-tracker-backend
npm install
npm start

The backend will run on:

http://localhost:5000

3. Start the frontend

Open another terminal:

cd finance-tracker
npm install
npm run dev

The frontend will be available on the local Vite URL.

🌐 Deployment

The application is deployed as separate frontend and backend services.

- Frontend: Deployed as a static web application
- Backend: Deployed on Render
- Database: MongoDB

🖼️ Dashboard

The dashboard provides an overview of:

- Current balance
- Total income
- Total expenses
- Transaction history
- Expense categories
- Financial insights

📌 Future Improvements

- 🔐 User authentication
- 👤 Multiple user accounts
- 📊 More advanced analytics
- 🏷️ Custom categories
- 🔍 Transaction search and filtering
- 📅 Date range filtering
- 💸 Budget limits and spending alerts
- 🌙 Dark mode

👨‍💻 Author

Poornesh

GitHub: https://github.com/Poornesh-codes

---

⭐ If you like this project, consider giving the repository a star!