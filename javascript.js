const icone = document.querySelector('.navbar-mobile i');
console.log(icone);

icone.addEventListener('click', function(){
    console.log("icône cliquée");
    menuburgerback.classList.toggle('change-menuburgerback');
    icone.classList.toggle('fa-times');
});

const menuburgerback = document.querySelector('.menuburgerback');

var angle = 0;function carrousel(sign){

    spinner=document.querySelector(".carrousel");
    
    if(!sign){angle = angle + 60
    }else{ 
    angle = angle - 60
    }
    
    spinner.setAttribute("style","transform:rotateY("+ angle +"deg);")}	