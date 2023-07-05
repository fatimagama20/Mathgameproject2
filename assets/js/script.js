//wait for the DOM to finish loading before running the game
//Get the button elements and add even listeners to them
document.getElementById('startReset').onclick = function(){
    location.reload()
    startGame();
}
function startGame(){
    //create tow random numbers between 1 and 10
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let product = num1 * num2;
document.getElementById("question").innerHTML = num1 + '&times;' + num2;
}

function checkAnswer(){

}
function calculateCorrectAnswer(){

}
function incrementScore(){

}
function generateWrongAnswers(){

}
function displaymultiplyQuestions(){

}