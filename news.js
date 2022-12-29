const img = document.querySelector(".bar");
img.src = "images/icon-menu.svg";

function myFunction() {
  var active = document.getElementById("header");
  if (active.className === "menu") {
    active.className = "responsive";
    img.src = "images/icon-menu-close.svg";
  } else {
    active.className = "menu";
    img.src = "images/icon-menu.svg";
  }
}
