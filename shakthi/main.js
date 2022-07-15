//document structure
var body = document.querySelector("body");
body.style.background = "grey";
var button = document.createElement("button", { type: "button" });
button.innerHTML = "Start";
button.style.background = "yellow";
button.style.padding = "1%";
button.style.borderRadius = "50%";
button.style.paddingLeft = "8px";
button.style.paddingRight = "8px";
body.appendChild(button);
var div = document.createElement("div");
body.appendChild(div);
div.style.height = "100px";
div.style.background = "red";
div.innerHTML = "Javascript Learnin";
div.style.textAlign = "center";
div.style.fontSize = "30px";
div.style.color = "white";
div.style.paddingTop = "4%";
div.style.display = "none";

//jquery
$(document).ready(function () {
  $("button").on("click", function () {
    $(div).animate({
      width: "toggle",
      height: "toggle",
    });
  });
});
