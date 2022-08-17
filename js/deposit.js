document.getElementById("deposit-btn").addEventListener("click", function (e) {
  // turn off page reload
  e.preventDefault();

  // get deposit input
  const depositInputField = document.getElementById("deposit-input");
  const depositInputString = depositInputField.value;
  const depositInput = parseFloat(depositInputString);

  // empty input field
  depositInputField.value = "";

  const depositSuccessNotice = document.getElementById("deposit-success-notice");
  const depositErrorNotice = document.getElementById("deposit-error-notice");

  if (isNaN(depositInput)) {
    depositErrorNotice.innerText = "Please provide a valid number";
    depositSuccessNotice.innerText = "";
    return;
  } else {
    depositSuccessNotice.innerText = "Deposit Added Successfully";
    depositErrorNotice.innerText = "";
  }

  // get current deposit and set new deposit
  const currentDepositElement = document.getElementById("current-deposit");
  const currentDepositString = currentDepositElement.innerText;
  const currentDepositNumber = parseFloat(currentDepositString);
  const totalDeposit = currentDepositNumber + depositInput;
  currentDepositElement.innerText = totalDeposit;

  // get total balance and set new total balance
  const totalCurrentBalanceElement = document.getElementById("current-balance");
  const totalCurrentBalanceString = totalCurrentBalanceElement.innerText;
  const CurrentBalance = parseFloat(totalCurrentBalanceString);
  const balance = CurrentBalance + depositInput;
  totalCurrentBalanceElement.innerText = balance;
});
