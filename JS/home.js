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
    
  });
