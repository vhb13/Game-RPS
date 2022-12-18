let wins=0;
let ties=0;
let losses=0;
let max = 2;
let min = 0;

let option = ["rock","paper","scissors"];

var start = confirm("Start playing?");
    console.log(start);

while (start==true) {

//User's move

let response = prompt("rock, paper or scissors?");
    console.log(response);

while (!option.includes(response)) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    response = prompt("Please input either rock, paper or scissors");
    console.log(response);}

if (response == "rock") {
    var player = 0;
    console.log(player);
}
if (response == "paper") {
    var player = 1;
    console.log(player);
}
if (response == "scissors") {
    var player = 2;
    console.log(player);
}

//Computer's move 

let random = Math.floor(Math.random() * (max - min + 1) ) + min;
    console.log(random);
let computer = option[random];
    console.log(computer);
    alert("Computer chose " + computer);

// Results

let x = (random - player);
    console.log (x);

if (x==2) {
    console.log ("Win");
    alert ("You win");
    wins++;}
    else if (x==-2) {
        console.log ("Lose");
        alert ("You lost.");
        wins++;
    }
    else if (x == -1) {
        console.log ("Win");
        alert ("You won!");
        wins++;
        }
    else if (x == 1) {
        console.log ("Lose");
        alert ("You lost.");
        losses++;
        }   
    else if (x == 0) {
        console.log ("Tie");
        alert ("It's a tie.");
        ties++;
        }

alert ("Wins:"+wins+"| Losses:"+losses+"| Ties:"+ties);

var start = confirm("Start playing?"); //apparently needs to be var//
    console.log(start);
}