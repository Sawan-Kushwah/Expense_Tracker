# Expense Tracker App

## 📌 Overview
The **Expense Tracker App** is a full-stack web application that helps users manage their expenses efficiently. It allows users to **track spending, categorize expenses, set budgets, and visualize data** through interactive charts. Built with **Next.js, MongoDB, and Chart.js**, this app provides a seamless experience for managing finances.

## 🚀 Features
- ✅ **Focus on sever side rendering for better seo**
- ✅ **Tried to reuse the code as much as possible**
- ✅ **Splited the code in several components**
- ✅ **Logical data visualization**
- ✅ **Add, Edit, and Delete Expenses**
- ✅ **Categorize Expenses** (Clothes, Food, Travel, Game, Other)
- ✅ **Monthly Category Budgets**
- ✅ **Budget vs. Actual Expense Chart**
- ✅ **Expense Summary Dashboard**

## 🛠️ Future Enhancements
- 📌 **Pagination of expenses data both on server and client side**
- 📌 **Focus on scalability**
- 📌 **UI can be improved**
- 📌 **Animation toaster for better user experience** 

## 🛠️ Tech Stack
- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Next.js API Routes, MongoDB
- **Database:** MongoDB with Mongoose
- **Charts & Visualization:** Chart.js

## 📦 Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env.local` file in the root directory and add:
```sh
MONGODB_URI=your_mongodb_connection_string
APP_URL=http://localhost:3000 # Change to Vercel URL in production
```

### 4️⃣ Run the App
```sh
npm run dev
```
Open **http://localhost:3000** in your browser.

## 🌐 Deployment

### Deploy on **Vercel**:
```sh
vercel
```
Set environment variables in **Vercel Dashboard** → **Project Settings** → **Environment Variables**.

## 📊 Data Visualization (Chart.js)
- **Budget vs. Actual Comparison:** Shows spending vs. allocated budget for each category.
- **Expense Breakdown:** Pie chart representation of spending per category.

## 📜 API Routes
- `POST /api/addExpense` → Add a new expense
- `GET /api/getExpenses` → Fetch all expenses
- `DELETE /api/deleteExpense/:id` → Delete an expense
- `PUT /api/updateExpense/:id` → Update an expense


## 🤝 Contributing
Pull requests are welcome! If you’d like to contribute, please fork the repo and submit a PR.

## 📞 Contact
For any queries, reach out to **[Your Name](mailto:sawankushwah457@gmail.com)** or visit **[GitHub](https://github.com/Sawan-Kushwah)**.

