console.log("connecting to Login server");

document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log("login successful");

  //   get phone number
  const phoneNumber = document.getElementById("phone-number").value;
  const pinNumber = document.getElementById("pin-number").value;
  //   console.log(phoneNumber, pinNumber);

  if (phoneNumber === "01" && pinNumber === "1234") {
    alert('Log in successful');
    window.location.href = "/home.html";
  }
  else{
    alert('Invalid credentials');
    return;
  }
});
