let Hbutton = document.getElementById("js-button");
let menu = document.querySelector("#menu-list");
let Hicon = document.getElementById("button-img");

Hbutton.addEventListener("click", hmenuOpen);
menu.addEventListener("click", hmenuOpen);

function hmenuOpen() {
  console.log("teszt");
  menu.classList.toggle("active");
  if (menu.classList == "active") {
    Hicon.src = "./img/icon/close.svg";
  } else {
    Hicon.src = "./img/icon/list.svg";
  }
}
