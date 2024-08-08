
  window.onload= setTimeout(() => {
    let progressBar = document.querySelector("#progressBar");
    let paragraphContent = document.querySelector(".loading");
    let firstHalf = document.querySelector(".firstHalf");
    let secondHalf = document.querySelector(".secondHalf");
    paragraphContent.innerHTML= "";
    firstHalf.classList.toggle("firstHalfAfterLoading");
    secondHalf.classList.toggle("secondHalfAfterLoading");
   hideSplash();
   }, 2000);

function hideSplash(){
  let firstHalf = document.querySelector(".firstHalf");
  let secondHalf = document.querySelector(".secondHalf");
  setTimeout(() => {
    firstHalf.style.display = "none";
    secondHalf.style.display = "none";
  }, 1900);
}


   
   
  
