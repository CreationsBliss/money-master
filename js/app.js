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
  const totalCost = parseFloat(foodCostText) + parseFloat(rentCostText) + parseFloat(clothCostText);
  totalExpenses.innerText = totalCost;

   // Income
   const netIncome = document.getElementById("income");
   const incomeText = netIncome.value;
   const totalIncome = parseFloat(incomeText);

   // Balance
  const netBalance = document.getElementById("total-balance");
  const netBalanceText = netBalance.innerText;
  netBalance.innerText = totalIncome - totalCost ;
  
})


document.getElementById("saving-btn").addEventListener('click',function(){
  // Percentage amount
  const savingPercentage = document.getElementById("saving-percentage");
  const savingPercentageText = savingPercentage.value;
  const savingPercentageAmount = parseFloat(savingPercentageText);

  // Income
  const netIncome = document.getElementById("income");
  const incomeText = netIncome.value;
  const totalIncome = parseFloat(incomeText); 

  // Saving amount
  const savingAmount = document.getElementById("saving-amount");
  const savingAmountText = savingAmount.innerText;
  savingAmount.innerText  = (totalIncome * savingPercentageAmount) / 100;

  // Balance
  const netBalance = document.getElementById("total-balance");
  const netBalanceText = netBalance.innerText;
  const netBalanceTextNumber = parseFloat(netBalanceText);

  // Remaining balance
  const remainingBalance = document.getElementById("remaining-balance");
  remainingBalance.innerText = netBalanceTextNumber - savingAmount.innerText; 

})