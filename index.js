document.getElementById("red").addEventListener("click", function(e){
  document.getElementsByClassName("box")[0].style.backgroundColor='red';
});
//  console.log(document.getElementsByClassName("box")[0]);
document.getElementById("blue").addEventListener("click", function(e){
  document.getElementsByClassName("box")[0].style.backgroundColor='blue';
});
document.getElementById("green").addEventListener("click", function(e){
  document.getElementsByClassName("box")[0].style.backgroundColor='green';
});
document.getElementById("hide").addEventListener("click", function(e){
  document.getElementsByClassName("box")[0].classList.add("hideIt");
  document.getElementsByClassName("box")[0].classList.remove("showIt")
});
document.getElementById("block").addEventListener("click", function(e){
  document.getElementsByClassName("box")[0].classList.add("showIt");
  document.getElementsByClassName("box")[0].classList.remove("hideIt");
});
