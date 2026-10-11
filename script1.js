const typeInput=document.getElementById("type");
const amountInput=document.getElementById("amount");
const categoryInput=document.getElementById("category");
const descriptionInput = document.getElementById("description");
const addButton= document.getElementById("addTransaction");
const transactionList = document.getElementById("transactionList");
let firstTransaction=true;
let totalIncome=0;
let totalExpense=0;
let totalTransactions=0;
const incomeDisplay = document.getElementById("totalIncome");
const expenseDisplay = document.getElementById("totalExpense");
const balanceDisplay = document.getElementById("balance");
const transactionsDisplay = document.getElementById("totalTransactions");

addButton.addEventListener("click",function(){
   const type=typeInput.value;
   const amount=amountInput.value;
   const category=categoryInput.value;
   const description=descriptionInput.value;
   
if (amount === "" || Number(amount) <= 0 ||
    category === "" || description.trim() === "") {
    alert("Please fill in all fields correctly.");
    return;
}

   const amountValue=Number(amount);
   if(type=="1"){
    totalIncome+=amountValue;
   }else{
    totalExpense+=amountValue;
   }
   totalTransactions++;
   incomeDisplay.textContent="₹"+totalIncome;
   expenseDisplay.textContent="₹"+totalExpense;
   balanceDisplay.textContent="₹"+(totalIncome-totalExpense);
   transactionsDisplay.textContent=totalTransactions;

    if (transactionList.querySelector("p")?.textContent === "No transactions yet.") {
        transactionList.innerHTML = "";
}
   const transaction=document.createElement("div");
transaction.innerHTML=`
<p>Type: ${type}</p>
<p>Amount: ${amount}</p>
<p>Category: ${category}</p>
<p>Description:${description}</p>
<hr>`;
transactionList.appendChild(transaction);
});

