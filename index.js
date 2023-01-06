// var i=0;
//
// while(i<7){
//   document.querySelectorAll("button")[i].addEventListener("click",handleClick);
//   i++;
// }
//
// function handleClick(){
//   alert('I got clicked!');
// }

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

function handleClick(){
  //this.style.color = "white";
  var audio = new Audio('sounds/tom-1.mp3');
  audio.play();
}
