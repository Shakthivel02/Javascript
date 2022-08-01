const tog = document.getElementById("icon");
const pss = document.getElementById("fake");

console.log(tog, pss);

showHidePass = () => {
  if (pss.type === "password") {
    pss.setAttribute("type", "text");
    tog.classList.add("fa-eye-slash");
  } else {
    tog.classList.remove("fa-eye-slash");
    pss.setAttribute("type", "password");
  }
};

tog.addEventListener("click", showHidePass());
