console.log("Starting");

document.getElementById("btn").addEventListener("click", () => {
  let colorCode = Math.floor(Math.random() * 10000000).toString(16);
  document.body.style.backgroundColor = "#" + colorCode;
  document.getElementById("code").innerHTML = colorCode;
});

// document.body.style.backgroundColor = "#646afe";
// let num = Math.floor(Math.random()*10);
// console.log(num);
