console.log("getting the data from the form");

document.getElementById("user").addEventListener("submit", (event) => {
  event.preventDefault();
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let country = document.getElementById("country").value;
  let phone = document.getElementById("phone").value;
  console.log(firstName, lastName, email, country, phone, gender);

  let userData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    gender: gender,
    country: country,
  };
  localStorage.setItem("user", JSON.stringify(userData));
  console.log("userInformation", userData);
  alert("Data saved successfully");
});
