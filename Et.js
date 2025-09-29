const expenses = [];

function addExpense() {
  const desc = document.getElementById("desc").value;
  const amount = document.getElementById("amount").value;
  if (desc && amount) {
    expenses.push({ desc, amount });
    renderExpenses();
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
  }
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  renderExpenses();
}

function renderExpenses() {
  const tbody = document.getElementById("expenses");
  const totalDisplay = document.getElementById("total");
  tbody.innerHTML = "";

  let total = 0;

  expenses.forEach((e, i) => {
    total += parseFloat(e.amount);
    const row = `
      <tr>
        <td>${e.desc}</td>
        <td>₹${e.amount}</td>
        <td><button onclick="deleteExpense(${i})">🗑️ Delete</button></td>
      </tr>`;
    tbody.innerHTML += row;
  });

  totalDisplay.textContent = total.toFixed(2);
}