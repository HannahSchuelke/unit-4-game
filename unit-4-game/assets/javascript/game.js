// Variables for wins and losses
(function() {
let goalNumber;
let playerScore;
let currentScore;
let totalWins = 0;
let totalLosses = 0;


// let totalWins = 0;
// let totalLosses = 0;
// // score player has 
// let currentScore = 0;
// // variables for each jewel
// let rubyValue;
// let sapphireValue;
// let yellowDiamondValue;
// let emeraldValue;
// // array to hold their values
// let valJewels={rubyValue, sapphireValue, yellowDiamondValue, emeraldValue};

// Click events
// $("#ruby").on("click", addRubyScore);
// $("#sapphire").on("click", addSapphire);
// $("#yellowDiamond").on("click", addYellowDiamond);
// $("#emerald").on("click, addEmerald");
// $("#resetNumbers").on("click", resetStats);

// Creating reusable random number function
function genRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

// function to generate crystals
function generateCrystals(index){    
    // console.log("generateCrystals(), index: " + index);     

    // the following two are equivalent 
    var newDiv = $("<div>");
    // let newDiv2 = document.createElement("div");
// attaching images
    newDiv.attr({
        "class": "col-md-2 crystal",
        "data-value": genRandomNumber(1, 9)
    });

    var imgDiv = $("<img>");
    imgDiv.attr("src", "./assets/images/crystal-" + index + ".png");

    newDiv.append(imgDiv);

    $(".crystalDomHolder").append(newDiv);

    
}
// Recreate 4 new crystals
function numCrystalGenerator(numCrystals = 4){
    // empty out dom holder, if crystals are already there, they will be removed
    $(".crystalDomHolder").empty();
    for(var i = 1; i < numCrystals + 1; i++){
        // console.log("currently at index: " + i);
        generateCrystals(i);
    }
}


$(".crystalDomHolder").on("click", ".crystal", function(){
    // console.log($(this));
    // console.log($(this)[0].dataset.value);
    // console.log($(this).attr("data-value"));   
    console.log(`crystal was clicked, here is the number ${$(this).attr("data-value")}`);

    updateScore(Number.parseInt($(this).attr("data-value")));
});

 // start game function
function startGame(){
    goalNumber = genRandomNumber(35, 97);  
    playerScore = 0; 
    numCrystalGenerator(4);
    updateDOM();
}
// function to update score throughout game
function updateScore(crystalValue){
    // exact same:
    playerScore += crystalValue;
    // playerScore = playerScore + crystalValue

    if(playerScore === goalNumber){
        // player won game

        // same functionality:
        totalWins++;
        // totalWins = totalWins + 1;
        startGame();
    }

    if(playerScore < goalNumber){
        // continue game
        updateDOM();
    }

    if(playerScore > goalNumber){
        // lost game
        totalLosses++;
        startGame();
    }    
}

// update score to our user
function updateDOM(){
    $("#myScore").text(playerScore);
    $("#goalNumber").text(goalNumber);
    $("#totalWins").text(totalWins);
    $("#totalLosses").text(totalLosses);    
}
// calling function outside scope, in order to call immediatly
startGame();
})();




// basically the same thing as the IIFFE above
// Immediataly Invoked Function Expression
// $(document).ready(function(){
//     let goalNumber;
// let playerScore;
// let currentScore;
// let totalWins = 0;
// let totalLosses = 0;

// // let totalWins = 0;
// // let totalLosses = 0;
// // // score player has 
// // let currentScore = 0;
// // // variables for each jewel
// // let rubyValue;
// // let sapphireValue;
// // let yellowDiamondValue;
// // let emeraldValue;
// // // array to hold their values
// // let valJewels={rubyValue, sapphireValue, yellowDiamondValue, emeraldValue};

// // Click events
// // $("#ruby").on("click", addRubyScore);
// // $("#sapphire").on("click", addSapphire);
// // $("#yellowDiamond").on("click", addYellowDiamond);
// // $("#emerald").on("click, addEmerald");
// // $("#resetNumbers").on("click", resetStats);

// // Creating reusable random number function
// function genRandomNumber(min, max){
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// // function to generate crystals
// function generateCrystals(index){    
//     // console.log("generateCrystals(), index: " + index);     

//     // the following two are equivalent 
//     var newDiv = $("<div>");
//     // let newDiv2 = document.createElement("div");
// // attaching images
//     newDiv.attr({
//         "class": "col-md-2 crystal",
//         "data-value": genRandomNumber(1, 9)
//     });

//     var imgDiv = $("<img>");
//     imgDiv.attr("src", "./assets/images/crystal-" + index + ".png");

//     newDiv.append(imgDiv);

//     $(".crystalDomHolder").append(newDiv);

    
// }
// // Recreate 4 new crystals
// function numCrystalGenerator(numCrystals = 4){
//     // empty out dom holder, if crystals are already there, they will be removed
//     $(".crystalDomHolder").empty();
//     for(var i = 1; i < numCrystals + 1; i++){
//         // console.log("currently at index: " + i);
//         generateCrystals(i);
//     }
// }


// $(".crystalDomHolder").on("click", ".crystal", function(){
//     // console.log($(this));
//     // console.log($(this)[0].dataset.value);
//     // console.log($(this).attr("data-value"));   
//     console.log(`crystal was clicked, here is the number ${$(this).attr("data-value")}`);

//     updateScore(Number.parseInt($(this).attr("data-value")));
// });

//  // start game function
// function startGame(){
//     goalNumber = genRandomNumber(35, 97);  
//     playerScore = 0; 
//     numCrystalGenerator(4);
//     updateDOM();
// }
// // function to update score throughout game
// function updateScore(crystalValue){
//     // exact same:
//     playerScore += crystalValue;
//     // playerScore = playerScore + crystalValue

//     if(playerScore === goalNumber){
//         // player won game

//         // same functionality:
//         totalWins++;
//         // totalWins = totalWins + 1;
//         startGame();
//     }

//     if(playerScore < goalNumber){
//         // continue game
//         updateDOM();
//     }

//     if(playerScore > goalNumber){
//         // lost game
//         totalLosses++;
//         startGame();
//     }    
// }

// // update score to our user
// function updateDOM(){
//     $("#myScore").text(playerScore);
//     $("#goalNumber").text(goalNumber);
//     $("#totalWins").text(totalWins);
//     $("#totalLosses").text(totalLosses);    
// }
// // calling function outside scope, in order to call immediatly
// startGame();
// });





// // Loading game to any click
// window.onload = function() {
// startGame ();
// }

// // Values per click
// function startGame() {
//     rubyValue=(Math.floor(Math.random()*9)+1);
//     sapphireValue=(Math.floor(Math.random()*9)+1);
//     yellowDiamondValue=(Math.floor(Math.random()*9)+1);
//     emeraldValue=(Math.floor(Math.random()*9)+1);

// // game play
// winningNumber = Math.floor(Math.random() * 97) + 9;
// console.log(winningScore);
// $("goalNumber").text(winningNumber);
// currentScore = 0;
// $("#currentScore").text(currentScore);
// $("#losses").text(totalLosses);
// $("#wins").text(totalWins);

// }





































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