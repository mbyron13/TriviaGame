var correctAnswers=0;
var wrongAnswers=0;
var unanswered=0;
var Countdown;
var clicked = false;

function initialize(){
    clicked=false;//setting a state to false off the bat for my timer
    startTime();
    //make the start button disappear when the game starts
    $('#startButton').css( "visibility", "hidden" );
    //empty the quizholder of previous game
    $("#quizHolder").empty();

    //appends form and the questions, spaced out to be easier to seperate
   $("#quizHolder").append("<form name='game' method='post' id='gameForm'></form>");

   $("#gameForm").append("<br><hr>The name of the main character of the video game &quot;The Legend of Zelda&quot;, is Zelda.<br><input id='Zelda' type='radio' name='question1' value='wrong'> True  <input id='Link' type='radio' name='question1' value='correct'> False<br><hr>");

   $("#gameForm").append("<br>Who is the main antagonist in the Portal franchise?<br>" + "<input id='chell' type='radio' name='question2' value='wrong'> Chell " +  "<input id='wheatley' type='radio' name='question2' value='wrong'> Wheatley " + "<input id='glados' type='radio' name='question2' value='correct'> Glad0s<br><hr>");

   $("#gameForm").append("<br>What ingredient is NOT used to craft a cake in Minecraft<br>" + "<input id='wheat' type='radio' name='question3' value='wrong'> Wheat " +  "<input id='milk' type='radio' name='question3' value='wrong'> Milk " + "<input id='bread' type='radio' name='question3' value='correct'> Bread " + "<input id='egg' type='radio' name='question3' value='wrong'> Egg<br><hr>");

   $("#gameForm").append("<br>The name of the Metroid series comes from what?<br>" + 
   "<input id='finalboss' type='radio' name='question4' value='wrong'> The final bosses name " +  
   "<input id='enemy' type='radio' name='question4' value='correct'> An enemy in the game " + 
   "<input id='mainchar' type='radio' name='question4' value='wrong'> The main character " + 
   "<input id='ship' type='radio' name='question4' value='wrong'> A Spaceship<br><hr>");

   $("#gameForm").append("<br>The Konami Code is known as Up, Up, Down, Down, Left, Right, Right, Left, B, A, Start.<br>" + 
   "<input id='codetrue' type='radio' name='question5' value='wrong'> True " +  
   "<input id='codefalse' type='radio' name='question5' value='correct'> False <br><hr>");

   $("#gameForm").append("<br>Who created the &quot;Metal Gear&quot; Series?<br>" + 
   "<input id='kojima' type='radio' name='question6' value='correct'> Hideo Kojima " +  
   "<input id='yamauchi' type='radio' name='question6' value='wrong'> Hiroshi Yamauchi " + 
   "<input id='miyamoto' type='radio' name='question6' value='wrong'> Shigeru Miyamoto " + 
   "<input id='yokoi' type='radio' name='question6' value='wrong'> Gunpei Yokoi<br><hr>");

//append a button to finish the game
   $("#quizHolder").append("<button id='finishButton' class='btn btn-primary'> Finish </button>");
};
//the finish score function does my calculation of correct, incorrect and unanswered. achieved by using mdn to look up how to call particular things based on inputs being radio buttons. 
//Ex: anything thats an input, create an array of the values that are correct and also checked, and return me the length of that array, this gives me the correct answers.
function finishScore(){
    
    
    console.log ('first in line');
  console.log(correctAnswers + "correct");
  console.log(wrongAnswers + "wrong");
  console.log(unanswered + "unanswered");
  console.log ('-----------');
    correctAnswers = $("input[value='correct']:checked").length;
    wrongAnswers = $("input[value='wrong']:checked").length;
    unanswered = 6 - (correctAnswers + wrongAnswers);
    $("#quizHolder").html('correct = ' + correctAnswers + '<br>' + 'wrong = ' + wrongAnswers + '<br>' + 'Unanswered= ' + unanswered);
    console.log("Second");
    console.log(correctAnswers + "correct");
  console.log(wrongAnswers + "wrong");
  console.log(unanswered + "unanswered");
    console.log("--------");
    $("#quizHolder").append("<br><button id='newGameButton' class='btn btn-primary'> Retry </button>");
    clicked=true;
    
}
  function setTrue(){
    clicked = true;
  }
//start time function sets the interval, i set it to work based on 60 seconds and it runs every second. update is then pushed to the timeHolder div. If the counter is equal to zero, OR clicked is true, which only happens when you click finshScore, it clears interval and then calls finishscore function,
function startTime(){
var counter = 60;
var Countdown = setInterval(function(){

  console.log(counter);
  $("#timeHolder").html('Seconds left: ' + counter);
  counter--;
  if (counter === 0 || clicked) {
    console.log("Done");
    clearInterval(Countdown);
    $("#timeHolder").html('');
    finishScore();
    clicked=false;
  }
}, 1000);
};
/*function stopTime(){
    clearInterval(Countdown);
}*/
//I call functions in document.ready so they are after the page load, but since I call document.on.click, I could really place them anywhere.
$(document).ready(function(){
    $(document).on("click" ,"#startButton", initialize);
    $(document).on('click', '#finishButton', setTrue);
    $(document).on("click", "#newGameButton", initialize);
});
