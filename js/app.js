// Expense calculation
function expenseCalculation(expense){
  const expenseId = document.getElementById(expense);
  const expenseIdText = expenseId.value;
  const expenseAmount = parseFloat(expenseIdText);
  return expenseAmount;
}

// Income calculation
function incomeCalculation(){
  const netIncome = document.getElementById("income");
  const netIncomeText = netIncome.value;
  const totalIncome = parseFloat(netIncomeText);
  if(totalIncome < 0 || isNaN(totalIncome)){
    document.getElementById("display-none").style.visibility = "visible";
  }
  else{
    document.getElementById("display-none").style.visibility = "hidden";
    return totalIncome;
  }
  
}

// Balance calculation
function balanceCalculation(){
  const netBalance = document.getElementById("total-balance");
  const netBalanceText = netBalance.innerText;
  const netBalanceTextNumber = parseFloat(netBalanceText);
  return netBalanceTextNumber;
}

// Total expense
document.getElementById("calculate-btn").addEventListener('click',function(){
  // Food cost
  const foodCost = expenseCalculation("food")
  
  // Rent cost
  const rentCost = expenseCalculation("rent")

  // Cloth cost
  const clothCost = expenseCalculation("cloth")

  // Total Expense
  const totalExpenses = document.getElementById("total-expenses");
  const totalExpensesText = totalExpenses.innerText;
  const totalCost = foodCost + rentCost + clothCost;
  totalExpenses.innerText = totalCost;
 
  // Income
  const totalIncome = incomeCalculation("income");

  // Balance
  const netBalance = document.getElementById("total-balance");
  netBalance.innerText = totalIncome - totalCost ;

})

// Total savings
document.getElementById("saving-btn").addEventListener('click',function(){
  // Percentage amount
  const savingPercentage = document.getElementById("saving-percentage");
  const savingPercentageText = savingPercentage.value;
  const savingPercentageAmount = parseFloat(savingPercentageText);

  // Income
  const totalIncome = incomeCalculation("income"); 

  // Saving amount
  const savingAmount = document.getElementById("saving-amount");
  const savingAmountText = savingAmount.innerText;
  savingAmount.innerText  = (totalIncome * savingPercentageAmount) / 100;

  // Balance
  const netBalanceTextNumber = balanceCalculation();

  // Remaining balance
  const remainingBalance = document.getElementById("remaining-balance");
  remainingBalance.innerText = netBalanceTextNumber - savingAmount.innerText; 

})