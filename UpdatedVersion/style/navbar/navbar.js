var menu = document.querySelector(".menu");
var topBar = document.querySelector(".topBar");
var middleBar = document.querySelector(".middleBar");   
var bottomBar = document.querySelector(".bottomBar");
var main_menu = document.querySelector("#main-menu");

menu.addEventListener("click", function(){
    topBar.classList.toggle("active");
    bottomBar.classList.toggle("active");
    main_menu.classList.toggle("active");
});