var menuIcon = document.querySelector(".menuIcon");
console.log("nell"+menuIcon);
menuIcon.addEventListener("click", showMenu);
var isActive = false;
function showMenu() {
    console.log("button clicked");
    var topBar = document.querySelector('.topBar');
    var bottomBar = document.querySelector('.bottomBar');
var sideBar = document.querySelector(".sideMenu");
    if (isActive) {
        topBar.classList.remove("topBarAfter");
        bottomBar.classList.remove("bottomBarAfter");
        sideBar.classList.remove("sideMenuAfter");
        isActive = false;
    }
    else {
        topBar.classList.add("topBarAfter");
        bottomBar.classList.add("bottomBarAfter");
        sideBar.classList.add("sideMenuAfter");

        isActive = true;
    }

}