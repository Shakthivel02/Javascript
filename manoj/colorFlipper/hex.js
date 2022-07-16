const hexNumber = [0, 1, 2, 3, 4, 5, 6];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += hexNumber[getRandomNumber()];
  }
  document.body.style.backgroundColor = hex;
  color.textContent = hex;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hexNumber.length);
}
