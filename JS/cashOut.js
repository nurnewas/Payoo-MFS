// Add Event Handler
document.getElementById("btn-cash-out").addEventListener("click", function (e) {
  e.preventDefault();

  // get cash out amount
  const cashOutAmount = parseFloat(
    document.getElementById("cashOutAmount").value
  );

  const cashOutPin = parseFloat(document.getElementById("cashOutPin").value);
  console.log(cashOutAmount, cashOutPin);

  // verify cash out pin
  if (cashOutPin === 1234) {
    const balance = parseFloat(
      document.getElementById("account-balance").innerText
    );
    console.log(balance);

    // Add Money
    const currentBalance = balance - cashOutAmount;
    document.getElementById("account-balance").innerText = currentBalance;
  } else {
    alert("Invalid Pin");
    return;
  }
});
