const btnn = document.querySelector("body button");
console.log(btnn);
btnn.addEventListener("click", function cl() {
  document.body.style.backgroundColor = "red";
  document.body.style.backgroundColor = "blue";
  btnn.innerHTML = "Unclcik";
  window.print('data');
});

console.log(window);  
 
