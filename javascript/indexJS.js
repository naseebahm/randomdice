document.onLoad = Roll();
function Roll(){
var winner = document.querySelector("#winner");
var die1= document.querySelector("#die1");
var die2= document.querySelector("#die2");

var randomD1= Math.floor(Math.random()*6)+1;
var randomD2= Math.floor(Math.random()*6)+1;

die1.setAttribute("src","img/"+randomD1+".png");
die2.setAttribute("src","img/"+randomD2+".png");
if(randomD1>randomD2){
  winner.innerHTML="Player 1 is the Winner!";
}else if(randomD1<randomD2) {
  winner.textContent="Player 2 is the Winner!";
} else {winner.textContent="The Player 1 and The Player 2 are Draw!!";}
}
