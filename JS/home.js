document
  .getElementById("btn-add-Money")
  .addEventListener("click", function (e) {
    console.log("Btn clicked");
    e.preventDefault();

    //   Get Money Added to the Account
    const addMoneyInput = document.getElementById("input-add-money");
    // const moneyAdded = parseFloat(addMoneyInput.value);
    console.log(addMoneyInput.value);

    // pin Number
    const pinNumberInput = document.getElementById("input-pin-number");
    const pinNumber = pinNumberInput.value;
    console.log(pinNumber);

    // verify The pin Number
    if (pinNumber === "1234") {
      console.log("add Money");
      const accountBalance = parseFloat(
        document.getElementById("account-balance").innerText
      ); // Convert balance to number
      const moneyAdded = parseFloat(addMoneyInput.value);

      if (isNaN(moneyAdded)) {
        alert("Please enter a valid amount!");
        return;
      }
      // add money Input
      // const newBalance = accountBalance + addMoneyInput;
      // console.log(newBalance);

      const newBalance = accountBalance + moneyAdded; // Add both numbers
      document.getElementById("account-balance").innerText = newBalance;

      //   Add Money to the Account
      //   accountBalance += moneyAdded;
      //   console.log("Account Balance: ", accountBalance);
      //   alert("Money added successfully");
      //   addMoneyInput.value = "";
      //   pinNumberInput.value = "";
    } else {
      alert("Invalid Pin Number");
      return;
    }
  });
