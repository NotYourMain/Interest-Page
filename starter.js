var inputNumber = document.getElementById("read").value;

document.getElementById("guessbutton").onclick = function(){
var randomNumber = Math.random();
var randomNumber = randomNumber * 6 ;
var randomNumber = Math.floor(randomNumber);
  if(inputNumber == randomNumber) {
    alert("Correct Number");

  }else{
    alert("Wrong Number, The number was " +randomNumber);
  }
}