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
let itemBox = document.querySelectorAll(".portfolio-item");

//For cycle by portfolio items
for (let i = 0; i < portButton.length; i++) {
  portButton[i].addEventListener("click", function () {
    for (let j = 0; j < portButton.length; j++) {
      portButton[j].classList.remove("active-button");
    }
    this.classList.add("active-button");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.remove("active-table");
      itemBox[k].classList.add("hide");

      if (
        itemBox[k].getAttribute("data-item") === dataFilter ||
        dataFilter === "all"
      ) {
        itemBox[k].classList.remove("hide");
        itemBox[k].classList.add("active-table");
      }
    }
  });
}

//--------------------------------------Pop Up ---------------------------------------

//Variables
let close = document.getElementById("close-js");

//This EventListener waits 3 s after the screen loads and performs the specified action.
window.addEventListener("load", function () {
  this.setTimeout(function open(event) {
    document.getElementById("popup-js").classList.toggle("popup-container");
  }, 3000);
});

//This EventListener wait click :)
close.addEventListener("click", closePopUp);

//This function close PopUp
function closePopUp() {
  document.getElementById("popup-js").classList.toggle("popup-container");
}

//This is a test function that I forgot to delete
function proba() {
  console.log("I Love for cik! ;)");
}
