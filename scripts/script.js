const $header = document.querySelector('header');
const $logo = document.querySelectorAll('.logo')[0]; //pega os valores da classe
const $navBar = document.querySelectorAll('.nav-bar')[0];
const $menu = document.querySelectorAll('.menu')[0];
const $MenuLeft = document.querySelector('.MainLeft');
const $MenuLeftBtn = document.querySelector('#MainLeftBtn');
var $positionSectionJS = document.querySelector("#positionSectionJS");
debugger
var divlog = document.querySelector("#divLogo")
var logo = document.createElement("img");
logo.src =("imgs/produtiva-logo-1.png");
divlog.appendChild(logo);


$MenuLeftBtn.addEventListener('click', Hidden, false);
function Hidden(){
    if($MenuLeft.classList.contains('MainLeft')){
        $MenuLeft.classList.remove('MainLeft');
        $MenuLeft.classList.add('MainLeftHidden');
        $MenuLeftBtn.setAttribute('style','top:220px;');
        $MenuLeftBtn.firstElementChild.setAttribute('src','imgs/SetaDireita.png');
        $positionSectionJS.setAttribute('style', 'margin-left: 30px;')
    }else{
        $MenuLeft.classList.add('MainLeft');        
        $MenuLeft.classList.remove('MainLeftHidden');  
        $MenuLeftBtn.setAttribute('style','top:100px;');
        $MenuLeftBtn.firstElementChild.setAttribute('src','imgs/SetaEsquerda.png');
        $positionSectionJS.setAttribute('style', 'margin-left: 225px;')
    }
}

window.addEventListener('scroll', toggleHearder,false);
function toggleHearder(){
    if(window.pageYOffset > 60 && $header.classList.contains('max-header')){
        $header.classList.remove('max-header');
        $header.classList.add('min-header');
        $logo.firstElementChild.setAttribute('src','imgs/produtiva-logo-2.png');
        $logo.classList.remove('max-logo');
        $logo.classList.add('min-logo');
        $navBar.classList.remove('max-nav');
        $navBar.classList.add('min-nav');
        $menu.firstElementChild.classList.remove('max-hamburger');
        $menu.firstElementChild.classList.add('min-hamburger');
        
    }else if(window.pageYOffset <= 60 && $header.classList.contains('min-header')){
        $header.classList.add('max-header');
        $header.classList.remove('min-header')
        $logo.firstElementChild.setAttribute('src','imgs/produtiva-logo-1.png');
        $logo.classList.add('max-logo');
        $logo.classList.remove('min-logo');
        $navBar.classList.add('max-nav');
        $navBar.classList.remove('min-nav');
        $menu.firstElementChild.classList.add('max-hamburger');
        $menu.firstElementChild.classList.remove('min-hamburger');      
    }
}
$menu.addEventListener('click', toggleMenu,false);
var isOpen = false;
function toggleMenu(){
    if(!isOpen){
        $navBar.classList.add('menu-opened');
        $menu.firstElementChild.classList.add('close-btn');
        isOpen = true;
    }else{
        $navBar.classList.remove('menu-opened');
        $menu.firstElementChild.classList.remove('close-btn');
        isOpen = false;
    }
}
$navBar.addEventListener('click',navClick,false);
function navClick(evt){
    if(evt.target.tagName == 'A'){
        toggleMenu();
    }
}