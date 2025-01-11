// Add listener in Btn
document.getElementById("btn-add-Money")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // Add Money and Pin Form Input
    const addMoney = document.getElementById("input-add-money").value;
    const pinNumber = document.getElementById("input-pin-number").value;
    console.log(addMoney, pinNumber);
  });
