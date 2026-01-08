// // const colorDisplay = document.querySelector('#colorDisplay');
// // const messageDisplay = document.querySelector('#message');
// // const currentStreakDisplay = document.querySelector('#currentStreak');
// // const bestStreakDisplay = document.querySelector('#bestStreak');
// // const colorBoxes = document.querySelectorAll('.color-box');
// // const newRoundBtn = document.querySelector('#newRoundBtn');
// // const easyBtn = document.querySelector('#easyBtn');
// // const hardBtn = document.querySelector('#hardBtn' );
// // const resetStreakBtn = document.querySelector('#resetStreakBtn');

// // const btnTrack = document.querySelector('.color-box-container');
// // // varaible...

// // var cuurentStreak = 0;
// // var bestStreak = 0;
// // var pickCorrectColor = 0;
// // var color = [];
// // var num = 6;

// // function onLoad(){
// //     var temp = localStorage.getItem('highBestStreak');
// //     if(temp != null){
// //         bestStreak = parseInt(temp); // -->  here the local storage  contain the data  so it  will return the data not null.
// //     }else{
// //         bestStreak = 0; //--> if there us no  data in localstorage so it will return null insted of  of number.
// //     }
// // }

// // // here we will define  the display  content  messave in a function formate ..

// // function displayContent(){
// //     currentStreakDisplay.textContent = currentStreakDisplay;
// //     bestStreakDisplay.textContent = bestStreak;
// // }

// // // random color generator

// // function colorGenerate(){
// // var a = Math.floor(Math.random() * 256);
// // var b = Math.floor(Math.random() * 256);
// // var c = Math.floor(Math.random() * 256);
// // return rgb//
// // }

// // function pickGenerator(){
// //     const math = Math.floor(Math.random()*color.length);
// // }




// // function setGame(){

// //     color = generateColor(num); //color -> empty array --> main purpose to store the total 6  - different rgb()
// //     pickCorrectColor = pickGenerator();
// //     console.log(color);
// //     console.log(pickCorrectColor);
// // colorDisplay.textContent = colorGenerate();
// // for( var i = 0; i< color.length; i++){
// //     colorBoxes[i].computedStyleMap.backgroundColor = color[i];
// // }  

// // }
// // webLoad();

// // // parent addeventlistner

// // function trackBtn(event){
// // var element = event.target;
// // console.log(element);
// // var rgb = element.style.backgroundColor
// // console.log(rgb);
// // if(pickCorrectColor === rgb){
// //     console.log("you win");
// // }
// // }

// // btnTrack.addEventListener('click',trackBtn);



// // step-1 ->> html:

// const colorDisplay = document.querySelector('#colorDisplay');
// const messageDisplay = document.querySelector('#message');
// const currentStreakDisplay = document.querySelector('#currentStreak');
// const bestStreakDisplay = document.querySelector('#bestStreak');

// const colorBoxes = document.querySelectorAll('.color-box');
// console.log(colorBoxes);

// const newRoundBtn = document.querySelector('#newRoundBtn');

// const easyBtn = document.querySelector('#easyBtn');
// const hardBtn = document.querySelector('#hardBtn');
// const resetStreakBtn = document.querySelector('#resetStreakBtn');
// const btnTrack =document.querySelector('.color-box-container');
// var newround=document.querySelector('#newRoundBtn');

// // variables...

// var currentStreak = 0;
// var bestStreak = 0;
// var pickCorrectColor = 0;
// var num = 6;
// var colors = []; 

// function webLoad(){
//     onLoad();
//     setGame();
//     displayContent();
//     reset();
// }
// // whenever the website will load then first it will load the entire data...
// function onLoad(){
//     var temp = localStorage.getItem('highBestStreak');
//     if(temp != null){
//         bestStreak = parseInt(temp); // --> here the localstorage contains the data so it will return the data not null.
//     }
//     else{
//         bestStreak = 0; // --> if there is no data in localstorage so it will return null instead of number.
//     }
// }

// // here we will define the display content message in a function format...

// function displayContent(){
//     currentStreakDisplay.textContent = currentStreak;
//     bestStreakDisplay.textContent = bestStreak;
// }


// // random color generator
// function colorGenerate(){
//     var a = Math.floor(Math.random()*256);
//     var b = Math.floor(Math.random()*256);
//     var c = Math.floor(Math.random()*256);
//     return `rgb(${a}, ${b}, ${c})`;
// }

// function generateColor(num){
//     const arr = [];
//     for(var i=0; i<num; i++){
//         arr.push(colorGenerate());
//     }
//     return arr;
// }
// function pickGenerator(){
//     const math = Math.floor(Math.random()*colors.length);
//     return colors[math];
// }

// function setGame(){
//     colors = generateColor(num); 
//     pickCorrectColor = pickGenerator();
//     colorDisplay.textContent = pickCorrectColor;
//     for(var i=0; i<colors.length; i++){
//         colorBoxes[i].style.backgroundColor = colors[i];
//     }
// }


// webLoad();
// //parent addeventlistner\
// //while tracking the parent element to give order to child element then syntak will be without ()
// function trackBtn(event){
//     var element = event.target;//return value on you click
//     console.log(element)
//     var rgb = element.style.backgroundColor;
//     console.log(rgb);
//     if(pickCorrectColor=== rgb){
//        messageDisplay.textContent="you win, to play again click on new round"
// alert("cangratulation 🌟🌟");
//     }
//     else{
//         messageDisplay.textContent="please pick  a right color"
//     }
    
// }
// btnTrack.addEventListener('click',trackBtn);

// function reset(){
//     messageDisplay.textContent="pick the right color";
//     setGame();
// }
// newround.addEventListener('click',reset);
// const colorDisplay = document.querySelector("#colorDisplay");
// const messageDisplay = document.querySelector("#message");
// const currentStreakDisplay = document.querySelector("#currentStreak");
// const bestStreakDisplay = document.querySelector("#bestStreak");

// const colorBoxes = document.querySelectorAll(".color-box");
// const newRoundBtn = document.querySelector("#newRoundBtn"); // Fixed typo in ID
// const easyBtn = document.querySelector("#easyBtn");
// const hardBtn = document.querySelector("#hardBtn");
// const resetStreakBtn = document.querySelector("#resetStreakBtn");
// const btnTrack = document.querySelector('.color-box-container');
// const lifeliner = document.querySelector('#lifeline');
// let currentStreak = 0;
// let bestStreak = 0;
// let pickCorrectColor = '';
// let colors = [];
// let num = 6;

// function webLoad() {
//   onLoad();
//   setGame();
//   displayContent();
// }

// function onLoad() {
//   const temp = localStorage.getItem('highBestStreak');
//  if (temp !== null) {
//   bestStreak = parseInt(temp);
// } else {
//   bestStreak = 0;
// }
// lives = 3;
// }

// function displayContent() {
//   currentStreakDisplay.textContent = currentStreak;
//   bestStreakDisplay.textContent = bestStreak;
//   messageDisplay.textContent = "Pick a color!";
//   btnTrack.style.pointerEvents = 'auto';
//   btnTrack.style.backgroundColor = 'transparent';
//   lifeliner.textContent = '❤️'.repeat(lives);
//   if (lives > 0) {
//         messageDisplay.textContent = "Pick a color!";
//         btnTrack.style.pointerEvents = 'auto';
//         btnTrack.style.backgroundColor = 'transparent';
//     }
// }

// function colorGenerate() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   console.log(`Generated color: rgb(${r}, ${g}, ${b})`);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// function generateColor(num) {
//   return Array.from({ length: num }, () => colorGenerate());
// }

// function pickGenerator() {
//   return colors[Math.floor(Math.random() * colors.length)];
// }

// function setGame() {
//   colors = generateColor(num);
//   pickCorrectColor = pickGenerator();
//   colorDisplay.textContent = pickCorrectColor;
  
//   colorBoxes.forEach((box, index) => {
//     if (index < num) {
//       box.style.display = 'block';
//       box.style.backgroundColor = colors[index];
//     } else {
//       box.style.display = 'none';
//     }
//   });
//   document.querySelector('.videos').style.display = 'none';
//   newRoundBtn.disabled = false;
//     easyBtn.disabled = false;
//     hardBtn.disabled = false;
//     resetStreakBtn.disabled = false;
//   messageDisplay.textContent = "Pick a color!";
//   btnTrack.style.pointerEvents = 'auto';
//   btnTrack.style.backgroundColor = 'transparent';
 
// }

// function trackBtn(event) {
//   const element = event.target;
//   if (!element.classList.contains('color-box')) return;
//  if (lives === 0) return;
//   const rgb = element.style.backgroundColor;
  
//   if (pickCorrectColor === rgb) {
//     messageDisplay.textContent = "Correct!";
//     btnTrack.style.pointerEvents = 'none';
//     btnTrack.style.backgroundColor = "green";
//     currentStreak++;
//     if (currentStreak > bestStreak) {
//       bestStreak = currentStreak;
//       localStorage.setItem('highBestStreak', bestStreak);
//     }
//     setTimeout(() => {
//             setGame();
//             displayContent();
//         }, 1000);
//   } else {
//    element.style.backgroundColor = "#ed0707";
//         lives--; // DECREASE a life

//         if (lives > 0) {
//             messageDisplay.textContent = `❌ Try Again! ${lives} lives left.`;
//         } else {
//             gameOver(); // All lives lost
//             return; // Stop execution here
//         }
//   }
//   displayContent();
// }

// function reset() {
//   currentStreak = 0;
//   bestStreak = 0;
//   lives = 3;
//   newRoundBtn.disabled = false;
//     easyBtn.disabled = false;
//     hardBtn.disabled = false;
//     resetStreakBtn.disabled = false;
//   localStorage.removeItem('highBestStreak');
//   setGame();
//   displayContent();
// }

// function newRound() {
//   if (lives === 0) {
//         lives = 3;
//         newRoundBtn.disabled = false;
//         easyBtn.disabled = false;
//         hardBtn.disabled = false;
//         resetStreakBtn.disabled = false;
//         setGame();
//         displayContent(); // Update hearts and streak
//         messageDisplay.textContent = "New Game Started!";
//         return
//     }
//  if (lives > 0) {
//         setGame();
//         displayContent();
//         messageDisplay.textContent = "New Round Started!";
//     }
// }
// function gameOver() {
//     messageDisplay.textContent = "💔 GAME OVER! Streak Reset.";
//     currentStreak = 0; // Reset streak
//     lives = 0; 
//     btnTrack.style.pointerEvents = 'none';
//     newRoundBtn.disabled = true;
//     easyBtn.disabled = true;
//     hardBtn.disabled = true;
//     resetStreakBtn.disabled = true;
//   displayContent()
// }


// function easy() {
//  if (lives > 0) {
//         num = 3;
//         easyBtn.classList.add("selected");
//         hardBtn.classList.remove("selected");
//         setGame();
//     }
// }

// function hard() {
//  if (lives > 0) {
//         num = 6;
//         easyBtn.classList.remove("selected");
//         hardBtn.classList.add("selected");
//         setGame();
//     }
// }

// // Event Listeners
// btnTrack.addEventListener('click', trackBtn);
// easyBtn.addEventListener('click', easy);
// hardBtn.addEventListener('click', hard);
// resetStreakBtn.addEventListener('click', reset);
// newRoundBtn.addEventListener('click', newRound);


// webLoad();






const colorDisplay = document.querySelector("#colorDisplay");
const messageDisplay = document.querySelector("#message");
const currentStreakDisplay = document.querySelector("#currentStreak");
const bestStreakDisplay = document.querySelector("#bestStreak");

const colorBoxes = document.querySelectorAll(".color-box");
const newRoundBtn = document.querySelector("#newRoundBtn");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");
const resetStreakBtn = document.querySelector("#resetStreakBtn");
const btnTrack = document.querySelector('.color-box-container');
const lifeliner = document.querySelector('#lifeline');
const victorySound = document.querySelector('.victory');
const tapSound = document.querySelector('.tap');


let lives = 3; 
let currentStreak = 0;
let bestStreak = 0;
let pickCorrectColor = '';
let colors = [];
let num = 6;


function webLoad() {
    onLoad();
    setGame();
    displayContent();
}

function onLoad() {
    const temp = localStorage.getItem('highBestStreak');
    if (temp !== null) {
        bestStreak = parseInt(temp);
    } else {
        bestStreak = 0;
    }
    lives = 3;
}

function displayContent() {
    currentStreakDisplay.textContent = currentStreak;
    bestStreakDisplay.textContent = bestStreak;
    lifeliner.textContent = '❤️'.repeat(lives);

    if (lives > 0) {
        messageDisplay.textContent = "Pick a color!";
        btnTrack.style.pointerEvents = 'auto';
        btnTrack.style.backgroundColor = 'transparent';
    }
}

function colorGenerate() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function generateColor(num) {
    return Array.from({ length: num }, () => colorGenerate());
}

function pickGenerator() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function setGame() {
    colors = generateColor(num);
    pickCorrectColor = pickGenerator();
    colorDisplay.textContent = pickCorrectColor;
    
    colorBoxes.forEach((box, index) => {
        if (index < num) {
            box.style.display = 'block';
            box.style.backgroundColor = colors[index];
        } else {
            box.style.display = 'none';
        }
    });

    document.querySelector('.videos').style.display = 'none';

    // SetGame now re-enables ALL controls for a fresh start (this is good)
    newRoundBtn.disabled = false;
    easyBtn.disabled = false;
    hardBtn.disabled = false;
    resetStreakBtn.disabled = false;

    messageDisplay.textContent = "Pick a color!";
    btnTrack.style.pointerEvents = 'auto';
    btnTrack.style.backgroundColor = 'transparent';
}

function gameOver() {
    messageDisplay.textContent = "💔 GAME OVER! Streak Reset.";
    currentStreak = 0; 
    lives = 0; 
    
    // Disable color boxes
    btnTrack.style.pointerEvents = 'none';
    
    // FIX: Only disable buttons that shouldn't be clicked for a game restart
    easyBtn.disabled = true; 
    hardBtn.disabled = true; 
    
    // Keep NewRoundBtn and ResetStreakBtn active
    
    displayContent();
}


function trackBtn(event) {
    tapSound.currentTime = 0;
    tapSound.play();
    console.log('hy');
    const element = event.target;
    if (!element.classList.contains('color-box')) return;
    if (lives === 0) return; 

    const rgb = element.style.backgroundColor;
    
    if (pickCorrectColor === rgb) {
        victorySound.currentTime = 0;
        victorySound.play();
        messageDisplay.textContent = "✅ Correct! New round in 1 sec...";
        btnTrack.style.pointerEvents = 'none';
        btnTrack.style.backgroundColor = "green";
        currentStreak++;

        if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
            localStorage.setItem('highBestStreak', bestStreak);
        }

        setTimeout(() => {
            setGame();
            displayContent();
        }, 1000);
    } else {
        element.style.backgroundColor = "#ed0707";
        lives--;

        if (lives > 0) {
            messageDisplay.textContent = `❌ Try Again! ${lives} lives left.`;
        } else {
            gameOver();
            return;
        }
    }
    displayContent();
}

function reset() {
    // Reset is a full restart, so it works even when lives are 0.
    currentStreak = 0;
    bestStreak = 0;
    lives = 3; 

    localStorage.removeItem('highBestStreak');
    
    setGame(); // Re-enables all buttons including Easy/Hard
    displayContent();
}

function newRound() {
    // If game is over, this acts as the restart.
     victorySound.currentTime = 0;
        victorySound.play();
    if (lives === 0) {

       
        lives = 3;
        currentStreak = 0;
        setGame(); // Re-enables all buttons
        displayContent();
        messageDisplay.textContent = "New Game Started!";
      
     }

    // Normal mid-game behavior
    if (lives > 0) {
        setGame();
        displayContent();
        messageDisplay.textContent = "New Round Started!";
    }
}

function easy() {
    // Only works mid-game
    if (lives > 0) {
        num = 3;
        easyBtn.classList.add("selected");
        hardBtn.classList.remove("selected");
        setGame();
    }
}

function hard() {
    // Only works mid-game
    if (lives > 0) {
        num = 6;
        easyBtn.classList.remove("selected");
        hardBtn.classList.add("selected");
        setGame();
    }
}

// Event Listeners
btnTrack.addEventListener('click', trackBtn);
easyBtn.addEventListener('click', easy);
hardBtn.addEventListener('click', hard);
resetStreakBtn.addEventListener('click', reset);
newRoundBtn.addEventListener('click', newRound);


webLoad();
