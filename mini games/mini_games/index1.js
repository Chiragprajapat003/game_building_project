var currentScore = document.querySelector("#currentScore");
var highScore = document.querySelector("#highScore");
var timer = document.querySelector("#timer");
var clickButton = document.querySelector("#clickButton");
var startButton = document.querySelector("#startButton");
var statusMessage = document.querySelector("#statusMessage");
var pauseButton = document.querySelector("#pauseButton");
const subtitle = document.querySelector(".subtitle")

var current = 0;  // user -> button clicked -> data store (click me)
var high =0;    // highscore -> track rakh sake
var time1 =10;   // time ->update....
var track = false;
var idTrack = null;


function loadContent(){
    dataLoad();
    displayMessge();
    var player = prompt("Enter your name");
    var age = prompt("Enter your age");
}

function dataLoad(){
    
    var  temp = localStorage.getItem('highScore');  //pheli baar agar local storage -> return null otehrwise -> data;
    if(temp != null){
        high = parseInt(temp); //explicity type conversion .......
    }
    else{
        high = 0;
    }
};

function displayMessge(){
    currentScore.textContent = current;
    highScore.textContent = high;
    timer.textContent = time1;
    if(current > 20){
    currentScore.style.color = "red";
    }
};

function statusMsg(msg){
    statusMessage.textContent = msg;
}

function endGame(){
    clearInterval(idTrack);
    track=false;
    clickButton.innerHTML="click me";
    clickButton.disabled = true;
    startButton.disabled = false;
    if(current > high){
        localStorage.setItem('highScore',current);
        high = current;
        displayMessge();
        statusMsg("your current score is higher then privious one");
 alert('congretulation🌟👌!!');
    }
     else{
        statusMsg("your current score is less then privious one");
       
    }

    size = 1;
    clickButton.style.transform = "scale(1)";
    let cps = current/10;
    cps = cps.toFixed(2); 
    subtitle.textContent = (`you clicked ${cps} time per second!`);

    startButton.innerHTML = "play again";

    if(current >= high){
document.body.style.background = 'gold';
setTimeout(function(){
            document.body.style.backgroundColor = " #667eea";
    },1500);

    }
    
    
    
}


function startGame(){
    
    time1 = 10;
    track = true;
    current = 0;

    setTimeout (function(){
    clickButton.innerHTML="";
   
},1000)

    clickButton.disabled = false;
    startButton.disabled = true;
    statusMsg("Game is running . Tap Fast!")


    idTrack = setInterval(function(){
        time1--;
       if(time1<=0){
endGame();
       }
        displayMessge();
    },1000);

}



var size = 1; 
function clickMe(){

    if(track){
        current++;
        displayMessge();
        
    }
clickButton.style.transform = `scale($(size))`;
size = size + 0.3;
if(size >= 1.3){
    size = 1.3;
    clickButton.style.transform = 'scale(1.3)';

}

    
}

var resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click",function(){
localStorage.removeItem('highScore');
current = 0;
high = 0;
displayMessge();
statusMsg("scores reset")
});


// function pauseGame(){
//     resumeButton.style.display = 'block;
// clickButton.disabled = true;
// startButton.disabled = false;
// clearInterval(idTrack);
// track = false;

// statusMsg("Click the start Button");

// }
        
pauseButton.addEventListener("click", function () {
    if(track){
        // Pause
        clearInterval(idTrack);
        track = false;
        statusMsg("Paused");
        pauseButton.textContent = "Resume";
    } else {
        // Resume
        track = true;
        idTrack = setInterval(function(){
            time1--;
            if(time1 <= 0){
                endGame();
            }
            displayMessge();
        }, 1000);
        statusMsg("Game resumed!");
        pauseButton.textContent = "Pause";
    }
});


loadContent();

startButton.addEventListener('click',startGame);

clickButton.addEventListener('click',clickMe);
pauseButton.addEventListener("click",pauseGame);
// reset butten -> 1. local storage data remove , 2.highscore and currentscore update,-> make it Zero , 3. 