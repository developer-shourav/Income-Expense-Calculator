const calculateExpense = () => {
  const income = document.querySelector("#income").value;
  const food = document.querySelector("#food").value;
  const rent = document.querySelector("#rent").value;
  const clothes = document.querySelector("#clothes").value;

  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const expense = parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
  // calculate balance
  const balance = parseFloat(income) - expense;
  //   validate income
  if (expense > income.value) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense.toFixed(2);
    document.getElementById("balance").innerText = balance.toFixed(2);
  }
};

const calculateSavings = () => {
  // calculate saving amount
  const savePercentage = document.getElementById("save").value;
//   Validate saving percentage value
  if (savePercentage < 0) {
    alert("Provide positive saving value");
  }

  const income = document.querySelector("#income").value;
  const savingAmount = (savePercentage / 100) * parseFloat(income);

  // calculate remaining balance
  const balance = document.getElementById("balance").innerText;
  const remainingBalance = parseFloat(balance) - savingAmount;

  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount.toFixed(2);
    document.getElementById("remaining-balance").innerText = remainingBalance.toFixed(2);
  }
};
