function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function showExpenseForm() {
  document.getElementById('expenseForm').classList.toggle('hidden');
}

function showSummary() {
  document.getElementById('summary').classList.toggle('hidden');
  document.getElementById('summary').innerHTML = "<p>Total Expenses: ₹500</p>";
}

function showGraph() {
  document.getElementById('expenseGraph').classList.toggle('hidden');
  // Example: Use Chart.js for bar graph
}

function addOrderAmount() {
  alert("Order amount added to expenses!");
}
