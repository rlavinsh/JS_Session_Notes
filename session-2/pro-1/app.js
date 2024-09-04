console.log("getting the data from the form");

document.getElementById("user").addEventListener("submit", (event) => {
  event.preventDefault();
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;

  console.log(firstName, lastName);

  let userData = {
    firstName: firstName,
    lastName: lastName,
  };

  console.log(userData);
});
