// const colorDisplay = document.querySelector('#colorDisplay');
// const messageDisplay = document.querySelector('#message');
// const currentStreakDisplay = document.querySelector('#currentStreak');
// const bestStreakDisplay = document.querySelector('#bestStreak');
// const colorBoxes = document.querySelectorAll('.color-box');
// const newRoundBtn = document.querySelector('#newRoundBtn');
// const easyBtn = document.querySelector('#easyBtn');
// const hardBtn = document.querySelector('#hardBtn' );
// const resetStreakBtn = document.querySelector('#resetStreakBtn');

// const btnTrack = document.querySelector('.color-box-container');
// // varaible...

// var cuurentStreak = 0;
// var bestStreak = 0;
// var pickCorrectColor = 0;
// var color = [];
// var num = 6;

// function onLoad(){
//     var temp = localStorage.getItem('highBestStreak');
//     if(temp != null){
//         bestStreak = parseInt(temp); // -->  here the local storage  contain the data  so it  will return the data not null.
//     }else{
//         bestStreak = 0; //--> if there us no  data in localstorage so it will return null insted of  of number.
//     }
// }

// // here we will define  the display  content  messave in a function formate ..

// function displayContent(){
//     currentStreakDisplay.textContent = currentStreakDisplay;
//     bestStreakDisplay.textContent = bestStreak;
// }

// // random color generator

// function colorGenerate(){
// var a = Math.floor(Math.random() * 256);
// var b = Math.floor(Math.random() * 256);
// var c = Math.floor(Math.random() * 256);
// return rgb//
// }

// function pickGenerator(){
//     const math = Math.floor(Math.random()*color.length);
// }




// function setGame(){

//     color = generateColor(num); //color -> empty array --> main purpose to store the total 6  - different rgb()
//     pickCorrectColor = pickGenerator();
//     console.log(color);
//     console.log(pickCorrectColor);
// colorDisplay.textContent = colorGenerate();
// for( var i = 0; i< color.length; i++){
//     colorBoxes[i].computedStyleMap.backgroundColor = color[i];
// }  

// }
// webLoad();

// // parent addeventlistner

// function trackBtn(event){
// var element = event.target;
// console.log(element);
// var rgb = element.style.backgroundColor
// console.log(rgb);
// if(pickCorrectColor === rgb){
//     console.log("you win");
// }
// }

// btnTrack.addEventListener('click',trackBtn);



// step-1 ->> html:

const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');

const colorBoxes = document.querySelectorAll('.color-box');
console.log(colorBoxes);

const newRoundBtn = document.querySelector('#newRoundBtn');

const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const resetStreakBtn = document.querySelector('#resetStreakBtn');
const btnTrack =document.querySelector('.color-box-container');
var newround=document.querySelector('#newRoundBtn');

// variables...

var currentStreak = 0;
var bestStreak = 0;
var pickCorrectColor = 0;
var num = 6;
var colors = []; 

function webLoad(){
    onLoad();
    setGame();
    displayContent();
    reset();
}
// whenever the website will load then first it will load the entire data...
function onLoad(){
    var temp = localStorage.getItem('highBestStreak');
    if(temp != null){
        bestStreak = parseInt(temp); // --> here the localstorage contains the data so it will return the data not null.
    }
    else{
        bestStreak = 0; // --> if there is no data in localstorage so it will return null instead of number.
    }
}

// here we will define the display content message in a function format...

function displayContent(){
    currentStreakDisplay.textContent = currentStreak;
    bestStreakDisplay.textContent = bestStreak;
}


// random color generator
function colorGenerate(){
    var a = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var c = Math.floor(Math.random()*256);
    return `rgb(${a}, ${b}, ${c})`;
}

function generateColor(num){
    const arr = [];
    for(var i=0; i<num; i++){
        arr.push(colorGenerate());
    }
    return arr;
}
function pickGenerator(){
    const math = Math.floor(Math.random()*colors.length);
    return colors[math];
}

function setGame(){
    colors = generateColor(num); 
    pickCorrectColor = pickGenerator();
    colorDisplay.textContent = pickCorrectColor;
    for(var i=0; i<colors.length; i++){
        colorBoxes[i].style.backgroundColor = colors[i];
    }
}


webLoad();
//parent addeventlistner\
//while tracking the parent element to give order to child element then syntak will be without ()
function trackBtn(event){
    var element = event.target;//return value on you click
    console.log(element)
    var rgb = element.style.backgroundColor;
    console.log(rgb);
    if(pickCorrectColor=== rgb){
       messageDisplay.textContent="you win, to play again click on new round"
alert("cangratulation 🌟🌟");
    }
    else{
        messageDisplay.textContent="please pick  a right color"
    }
    
}
btnTrack.addEventListener('click',trackBtn);

function reset(){
    messageDisplay.textContent="pick the right color";
    setGame();
}
newround.addEventListener('click',reset);

