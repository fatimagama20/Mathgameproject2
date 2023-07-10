//wait for the DOM to finish loading before running the game
//Get the button elements and add even listeners to them

let playing = false;
let timeremaining;
let product;
document.getElementById('startReset').onclick = function(){
 if (playing == true){
  location.reload()
 } else{
  playing = true;
  hide("gameover");
  show("timeremaining");
  document.getElementById('startReset').innerHTML = "Reset Game";
  score=0;
  document.getElementById('scorevalue').innerHTML= score;
  timeremaining=30;
  settimeinterval();
  startGame();
  calculateCorrectAnswer();
 } 
}
function startGame(){
    //create tow random numbers between 1 and 10
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
product = num1 * num2;
document.getElementById("question").innerHTML = num1 + '&times;' + num2;
}

function checkAnswer(){

}
function calculateCorrectAnswer(){
  let choiceRandom = Math.round(Math.random()*2) + 1;
  document.getElementById('box'+choiceRandom).innerHTML = product;
}

function incrementScore(){

}
function generateWrongAnswers(){

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
       show("gameover")
        document.getElementById('startReset').innerHTML = "Start Game"
      //  document.getElementById("gameover").innerHTML = "<p> GAME IS OVER</p><br><p>YOUR SCORE IS "+score +"</p>"
        playing = false
      }
    },1000)
  }

  function stoptimeinterval(){
    clearInterval(settimeinterval)
  }
 function show(id){
    document.getElementById(id).style.display="block"
  }
  // to hide an html element
  function hide(id){
    document.getElementById(id).style.display="none"
  }