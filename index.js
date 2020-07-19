function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

var randomLeftNumber = getRandomIntInclusive(1, 6);
var randomLeftImage = "images/dice" + randomLeftNumber + ".png";

var randomRightNumber = getRandomIntInclusive(1, 6);
var randomRightImage = "images/dice" + randomRightNumber + ".png";

document.querySelector(".img1").setAttribute("src", randomLeftImage);
document.querySelector(".img2").setAttribute("src", randomRightImage);

if (randomLeftNumber > randomRightNumber) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomRightNumber > randomLeftNumber) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else { 
    document.querySelector("h1").innerHTML = "Draw";
}