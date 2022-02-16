document.getElementById("calculate-btn").addEventListener('click',function(){
  // Food cost
  const foodCost = document.getElementById("food");
  const foodCostText = foodCost.value;
  

  // Rent cost
  const rentCost = document.getElementById("rent");
  const rentCostText = rentCost.value;

  // Cloth cost
  const clothCost = document.getElementById("cloth");
  const clothCostText = clothCost.value;

  // Total Expense
  const totalExpenses = document.getElementById("total-expenses");
  const totalExpensesText = totalExpenses.innerText;
  totalExpenses.innerText = parseFloat(foodCostText) + parseFloat(rentCostText) + parseFloat(clothCostText);

   // Income
   const netIncome = document.getElementById("income");
   const incomeText = netIncome.value;

   // Balance
  const netBalance = document.getElementById("total-balance");
  const netBalanceText = netBalance.innerText;
  netBalance.innerText = parseFloat(incomeText) - parseFloat(totalExpenses.innerText) ;
})