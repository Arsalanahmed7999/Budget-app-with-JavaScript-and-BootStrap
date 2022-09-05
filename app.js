console.log('added');

let btn = document.querySelector('.calc');

btn.addEventListener('click', function(){
    let amount = document.getElementById('amount')
    let expense = document.getElementById('expense')

let budget = amount.value - expense.value;

let amountResult = document.getElementById('resultAmount')
let resultExpense = document.getElementById('resultExpense')
let resultBudget = document.getElementById('resultBudget')

amountResult.innerHTML = `Amount: ${amount.value} $`;
resultExpense.innerHTML = `Expense: ${expense.value} $`;
resultBudget.innerHTML = `Budget: ${budget} $`;

})