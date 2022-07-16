const colors = [
  "red",
  "green",
  "yellow",
  "blue",
  "orange",
  "gray",
  "#800000",
  "#800080",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNum = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
