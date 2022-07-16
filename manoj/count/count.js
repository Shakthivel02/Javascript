let count = 0;

const values = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      document.getElementById("value").style.color = "blue";
    }
    if (count < 0) {
      values.style.color = "red";
    } else if (count == 0) {
      values.style.color = "orange";
    }
    values.textContent = count;
  });
});
