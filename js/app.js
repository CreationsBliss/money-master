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
    document.getElementById("display-none").style.display = "block";
  }
  else{
    document.getElementById("display-none").style.display = "none";
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
  const foodCost = expenseCalculation("food");
  if(foodCost < 0 || isNaN(foodCost)){
    document.getElementById("food-display-none").style.display = "block";
  }
  else{
    document.getElementById("food-display-none").style.display = "none";
  }
  
  // Rent cost
  const rentCost = expenseCalculation("rent");
  if(rentCost < 0 || isNaN(rentCost)){
    document.getElementById("rent-display-none").style.display = "block";
  }
  else{
    document.getElementById("rent-display-none").style.display = "none";
  }

  // Cloth cost
  const clothCost = expenseCalculation("cloth");
  if(clothCost < 0 || isNaN(clothCost)){
    document.getElementById("cloth-display-none").style.display = "block";
  }
  else{
    document.getElementById("cloth-display-none").style.display = "none";
  }

  // Total Expense
  const totalExpenses = document.getElementById("total-expenses");
  const totalExpensesText = totalExpenses.innerText;

  if((foodCost < 0 || isNaN(foodCost)) || (rentCost < 0 || isNaN(rentCost)) + (clothCost < 0 || isNaN(clothCost))){
    totalExpenses.innerText = 00;
    const netBalance = document.getElementById("total-balance");
    netBalance.innerText = 00;
  }
  else{
    const totalCost = foodCost + rentCost + clothCost;
    totalExpenses.innerText = totalCost;
 
    // Income
    const totalIncome = incomeCalculation("income");

    if(totalCost > totalIncome || totalIncome < 0){
      document.getElementById("total-expense-text").style.display="block";
      const netBalance = document.getElementById("total-balance");
      netBalance.innerText = 00;
    }
    else{
      document.getElementById("total-expense-text").style.display="none";
      // Balance
      const netBalance = document.getElementById("total-balance");
      netBalance.innerText = totalIncome - totalCost;
    } 
  }

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
  const totalSavingAmount = (totalIncome * savingPercentageAmount) / 100;
  
  // Balance
  const netBalanceTextNumber = balanceCalculation();

  if(totalSavingAmount > netBalanceTextNumber || totalSavingAmount < 0 || isNaN(totalSavingAmount)){
    savingAmount.innerText  = 00;
    document.getElementById("savingAmmount-display-text").style.display = "block";
  }
  else{
    document.getElementById("savingAmmount-display-text").style.display = "none";
    savingAmount.innerText  = totalSavingAmount;
  }


  // Remaining balance
  const remainingBalance = document.getElementById("remaining-balance");
  remainingBalance.innerText = netBalanceTextNumber - savingAmount.innerText; 

})


