//--------------------------------------Hamburger menu---------------------------------------

//Variables
let Hbutton = document.getElementById("js-button");
let menu = document.querySelector("#menu-list");
let Hicon = document.getElementById("button-img");

//Events
Hbutton.addEventListener("click", hmenuOpen);
menu.addEventListener("click", hmenuOpen);

//Funciton

//This function activet the nav menu
function hmenuOpen() {
  menu.classList.toggle("active");
  //This if replaces the button icon
  if (menu.classList == "active") {
    Hicon.src = "./img/icon/close.svg";
  } else {
    Hicon.src = "./img/icon/list.svg";
  }
}

//--------------------------------------Portfolio---------------------------------------

//Variables
let portButton = document.querySelectorAll(".portfolio-button");
let table = document.querySelectorAll(".tableX");

for (let i = 0; i < portButton.length; i++) {
  portButton[i].addEventListener("click", function () {
    for (let j = 0; j < portButton.length; j++) {
      portButton[j].classList.remove("active-button");
    }
    this.classList.add("active-button");
  });
}

//Events

//Funciton

function proba() {
  console.log("I Love for cik! ;)");
}
