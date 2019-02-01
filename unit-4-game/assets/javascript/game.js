// Variables for wins and losses
let totalWins=0;
let totalLosses=0;
// score player has 
let currentScore=0;
// variables for each jewel
let rubyValue;
let sapphireValue;
let yellowDiamondValue;
let emeraldValue;
// array to hold their values
let valJewels={rubyValue, sapphireValue, yellowDiamondValue, emeraldValue};

// guesses left counter
window.onload = function() {
startGame ();
$("#ruby").on("click", addRubyScore);
$("#sapphire").on("click", addSapphire);
$("#yellowDiamond").on("click", addYellowDiamond);
$("#emerald").on("click, addEmerald");
$("#resetNumbers").on("click", resetStats);
}

function startGame() {
    rubyValue=(Math.floor(Math.random()*9)+1);
    sapphireValue=(Math.floor(Math.random()*9)+1);
    yellowDiamondValue=(Math.floor(Math.random()*9)+1);
    emeraldValue=(Math.floor(Math.random()*9)+1);


winningNumber = Math.floor(Math.random() * 97) + 9;
console.log(winningScore);
$("goalNumber").text(winningNumber);
currentScore=0;
$("#currentScore").text(currentScore);
$("#losses").text(totalLosses);
$("#wins").text(totalWins);

}





































// // creating an object to hold all things... 
// var jewelGame = {
// // Defining global scope variables
// let total = 0;
// let rubyValue = 0;
// let sapphireValue = 0; 
// let yellowDiamondValue = 0;
// let emeraldValue = 0;

// // pick a jewel & start game
// // Ruby
// function: start () {
//     rubyValue = Math.floor(Math.random() *5) +5;
//     total = 0; 
// }
// start();

// $("#ruby").on("click", function () {
//     total = rubyValue + total;

//     $("#answer").text(total);
// });
// // Sapphire
// function: start () {
//     sapphireValue = Math.floor(Math.random() *5) +7;
//     total = 0; 
// }
// start();

// $("#sapphire").on("click", function () {
//     total = sapphireValue + total;

//     $("#answer").text(total);
// });
// // yellowDiamond
// function: start () {
//     yellowDiamondValue = Math.floor(Math.random() *5) +10;
//     total = 0; 
// }
// start();

// $("#yellowDiamond").on("click", function () {
//     total = yellowDiamondValue + total;

//     $("#answer").text(total);
// });
// // Emerald
// function: start () {
//     emeraldValue = Math.floor(Math.random() *5) +2;
//     total = 0; 
// }
// start();

// $("#emerald").on("click", function () {
//     total = emeraldValue + total;

//     $("#answer").text(total);
// });
// }