/* Menu burger*/
const icone = document.querySelector(".navbar-mobile i");
const menuburgerback = document.querySelector(".menuburgerback");

icone.addEventListener("click", function () {
  menuburgerback.classList.toggle("change-menuburgerback");
  icone.classList.toggle("fa-times");
});

/* changement de style au survol de MENU li */
let menuDesktopHover = document.querySelectorAll(".menudesktop li");
let menuDesktopHovera = document.querySelectorAll(".menudesktop li a");

function hoverMenu(valueli, valuea) {
  valueli.classList.add("lihover");
  valuea.classList.add("liahover");
}

/* remise du style quand la souris quiite le MENU li */
function noHoverMenu(valuelileave, valuealeave) {
  valuelileave.classList.remove("lihover");
  valuealeave.classList.remove("liahover");
}

for (let i = 0; i < menuDesktopHover.length; i++) {
  menuDesktopHover[i].addEventListener("mouseover", () =>
    hoverMenu(menuDesktopHover[i], menuDesktopHovera[i])
  );
  menuDesktopHover[i].addEventListener("mouseleave", () =>
    noHoverMenu(menuDesktopHover[i], menuDesktopHovera[i])
  );
}

/* Variation d'angle pour le carousel */
var angle = 0;
function carrousel(sign) {
  spinner = document.querySelector(".carrousel");

  if (!sign) {
    angle = angle + 60;
  } else {
    angle = angle - 60;
  }

  spinner.setAttribute("style", "transform:rotateY(" + angle + "deg);");
}

/* Agrandir img*/
let imagesBig = document.querySelectorAll(".imgZoom");
console.log(imagesBig);

function change(value1) {
  value1.classList.toggle("change-imagesBig");
}

for (let i = 0; i < imagesBig.length; i++) {
  imagesBig[i].addEventListener("click", () => change(imagesBig[i]));
}

/* Clique au bouton Succes ou Deny des cookies */
const btnSuccess = document.querySelector(".btn-success");
console.log(btnSuccess);

const btnDeny = document.querySelector(".btn-deny");
console.log(btnDeny);

const cookies = document.querySelector(".cookies");
console.log(cookies);

btnSuccess.addEventListener("click", function () {
  console.log("bouton cliqué !");
  cookies.style.display = "none";
});

btnDeny.addEventListener("click", function () {
  console.log("bouton cliqué !");
  cookies.style.display = "none";
});

let counter = 1;

setInterval(()=>{
  document.querySelector('.imagesCarrousel.show').classList.remove('show');
  let imagesCarrousel = document.querySelector(`.img-${counter}`)
  imagesCarrousel.classList.add('show')
  counter++
  if(counter >6){
    counter = 1;
  }
  
},3000);