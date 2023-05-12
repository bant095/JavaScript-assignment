const btn = document.querySelector(".btn");
const text = document.getElementById("program");

// JavaScriptDOM element
btn.addEventListener("click", function () {
  text.innerHTML = "I am currently learning JavaScript";
});