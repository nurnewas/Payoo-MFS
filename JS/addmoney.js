// Add listener in Btn
document
  .getElementById("btn-add-Money")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // Add Money and Pin Form Input
    const addMoney = document.getElementById("input-add-money").value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById("input-pin-number").value;
    console.log(addMoney, pinNumber);

    // pin verify
    if (parseInt(pinNumber) === 1234) {
      // add money to the account
      const balance = document.getElementById("account-balance").innerText;
      console.log(balance);
      const balanceNumber = parseFloat(balance);

      // update the balance
      const newBalance = balanceNumber + addMoneyNumber;
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Invalid Pin Number");
    }
  });
