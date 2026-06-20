const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Expense = require('./models/Expense');

const app = express();
app.use(bodyParser.json());
app.use(express.static('../frontend'));

mongoose.connect('mongodb://localhost:27017/expenseApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Add Expense
app.post('/api/expenses', async (req, res) => {
  const expense = new Expense(req.body);
  await expense.save();
  res.json(expense);
});

// Get Expenses
app.get('/api/expenses', async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
