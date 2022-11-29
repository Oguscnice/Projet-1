/* Menu burger*/
const icone = document.querySelector('.navbar-mobile i');
console.log(icone);

icone.addEventListener('click', function(){
    console.log("icône cliquée");
    menuburgerback.classList.toggle('change-menuburgerback');
    icone.classList.toggle('fa-times');
});

const menuburgerback = document.querySelector('.menuburgerback');

/* Variation d'angle pour le carousel */
var angle = 0;function carrousel(sign){

    spinner=document.querySelector(".carrousel");
    
    if(!sign){angle = angle + 60
    }else{ 
    angle = angle - 60
    }
    
spinner.setAttribute("style","transform:rotateY("+ angle +"deg);")}	

/* Clique au bouton Succes ou Deny des cookies */
const btnSuccess = document.querySelector('.btn-success');
console.log(btnSuccess);

const btnDeny = document.querySelector('.btn-deny');
console.log(btnDeny);

const cookies = document.querySelector('.cookies');
console.log(cookies);

btnSuccess.addEventListener('click', function(){
    console.log('bouton cliqué !');
    cookies.style.display = "none";
});

btnDeny.addEventListener('click', function(){
    console.log('bouton cliqué !');
    cookies.style.display = "none";
});