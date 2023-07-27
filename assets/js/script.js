let playing = false;let timeremaining;
let product; let product1; let correctans; let wronganswers;
document.getElementById('startReset').onclick = function(){
 if (playing == true){
    location.reload()
 }else{
    playing = true;
    show("timeremaining");
  document.getElementById('startReset').innerHTML = "Reset Game";
  score=0;
  document.getElementById('scorevalue').innerHTML= score;
  timeremaining=30;
  settimeinterval();
  startGame();
  calculateCorrectAnswer();
  generateWrongAnswers();
}
}
for(let i=1;i<5;i++){
  document.getElementById("box"+i).onclick = function(){
    if(playing == true){
      if(this.innerHTML==product){
        alert("Corerct answer")
        incrementScore();
        document.getElementById('scorevalue').innerHTML= score
        startGame();
        calculateCorrectAnswer();
        generateWrongAnswers();
      }
      else{ 
        alert("Wrong answer")
        startGame();
        calculateCorrectAnswer();
        generateWrongAnswers();
      }
   }
  }
}
function startGame(){
    //create tow random numbers between 1 and 10
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
product = num1 * num2;
document.getElementById("question").innerHTML = num1 + '&times;' + num2;
}

function calculateCorrectAnswer(){
  correctans = Math.round(Math.random()*2) + 1;
  document.getElementById('box'+correctans).innerHTML = product;
}

function incrementScore(){
  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;
}
function generateWrongAnswers(){
wronganswers = [product];
for (let i=1;i<5;i++){
  do{
    num1 = Math.round(Math.random()*9) + 1;
    num2 = Math.round(Math.random()*9) + 1;
    product1 = num1 * num2;
  }
  while(wronganswers.indexOf(product1)>-1)
  wronganswers.push(product1)
  if(i!= correctans){
    document.getElementById('box'+i).innerHTML = product1 
  }
}
}
function settimeinterval(){
  let settimeinterval = setInterval(function(){
    if(timeremaining>0){
        timeremaining--;
      document.getElementById('remainingsecs').innerHTML=timeremaining;
      }else{
        stoptimeinterval();
        document.getElementById('startReset').innerHTML = "Start Game"
        playing = false;
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
  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }