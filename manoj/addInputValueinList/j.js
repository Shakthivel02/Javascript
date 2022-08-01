let inputFood = document.getElementById("input-foof");
let inputbtn = document.getElementById("input-btn");
let inputvalue = document.getElementById("inputValue");

inputbtn.addEventListener("click", () => {
  inputvalue.innerHTML += `<li>${inputFood.value.toUpperCase()}</li>`;
});
