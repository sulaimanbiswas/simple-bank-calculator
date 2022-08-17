document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  // get withdraw Input
  const withdrawInputField = document.getElementById("withdraw-input");
  const withdrawInputString = withdrawInputField.value;
  const withdrawInput = parseFloat(withdrawInputString);

  withdrawInputField.value = "";
  const withdrawSuccessNotice = document.getElementById("withdraw-success-notice");
  const withdrawErrorNotice = document.getElementById("withdraw-error-notice");

  if (isNaN(withdrawInput)) {
    withdrawErrorNotice.innerText = "Please provide a valid number";
    return;
  } else {
    withdrawSuccessNotice.innerText = "Withdraw Successfully";
    withdrawErrorNotice.innerText = "";
  }

  // Get current Withdraw and set new withdraw
  const currentWithdrawElement = document.getElementById("current-withdraw");
  const previousWithdrawString = currentWithdrawElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawString);

  // get total balance and set new total balance
  const totalCurrentBalanceElement = document.getElementById("current-balance");
  const totalCurrentBalanceString = totalCurrentBalanceElement.innerText;
  const CurrentBalance = parseFloat(totalCurrentBalanceString);

  if (withdrawInput > CurrentBalance) {
    withdrawErrorNotice.innerText = "No enough Balance";
    withdrawSuccessNotice.innerText = "";
    return;
  } else {
    withdrawSuccessNotice.innerText = "Withdraw Successfully";
    withdrawErrorNotice.innerText = "";
  }

  const totalWithdraw = withdrawInput + previousWithdrawTotal;
  currentWithdrawElement.innerText = totalWithdraw;

  const balance = CurrentBalance - withdrawInput;
  totalCurrentBalanceElement.innerText = balance;
});
