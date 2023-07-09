//wait for the DOM to finish loading before running the game
//Get the button elements and add even listeners to them
let timeremaining;
document.getElementById('startReset').onclick = function(){
 //   location.reload()
    timeremaining=60;
    settimeinterval();
    startGame();
}
function startGame(){
    //create tow random numbers between 1 and 10
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let product = num1 * num2;
displaymultiplyQuestions(num1,num2);
}

function checkAnswer(){

}
function calculateCorrectAnswer(){

}
function incrementScore(){

}
function generateWrongAnswers(){

}
function displaymultiplyQuestions(num1,num2){
    document.getElementById("question").innerHTML = num1 + '&times;' + num2;
}
function settimeinterval(){
    let settimeinterval = setInterval(function(){
      // if the time value is greater than zero
      if(timeremaining>0){
        timeremaining--;
      document.getElementById('remainingsecs').innerHTML=timeremaining;
      }else{
        //if time value is zero
        stoptimeinterval()
       // alert("GAME IS OVER")
       // show("gameover")
        document.getElementById('startReset').innerHTML = "Start Game"
      //  document.getElementById("gameover").innerHTML = "<p> GAME IS OVER</p><br><p>YOUR SCORE IS "+score +"</p>"
        playing = false
      }
    },1000)
  }

  function stoptimeinterval(){
    clearInterval(settimeinterval)
  }