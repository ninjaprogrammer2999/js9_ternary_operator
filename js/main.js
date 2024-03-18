// ternary operators 
// ternary operator = ternary operator is tree part tool for making decisions with javascript
// ternary operators are next level if else statements*****
// condition ? ifTrue : ifFalse 
// syntax
////////////////////////////////////////////////////////////////////////////////
/*
let soup;
let customerIsBanned = true;
let response = customerIsBanned ? "No soup for you!" : soup ? "yes we have soup" : 
"sorry today we don't have soup"; 
*//*ye that's right we can chain ternary operators****
console.log(response); */
///////////////////////////////////////////////////////////////////////////
/*
let soup ;
let customerIsBanned = true;
let soupAccess = customerIsBanned ? "No soup for you!" : 
soup ? `yes we have ${soup}`: `sorry today we don't have ${soup}`;
console.log(soupAccess);
*/
///////////////////////////////////////////////////////////////////////
// grade in ternary operator
/*
let score = 0;
let grade = score > 89 ? "A"
: score > 79 ? "B" 
: score > 69 ? "C"
: score > 59 ? "D"
: score > 49 ? "U"
: "F";
console.log(`grade is ${grade}`);
*/
////////////////////////////////////////////////////////
// rock, paper, scissors using ternary operator!******
/*
let computer = "scissors";
let playerOne = "rock";
let game = computer === playerOne ? "Tie"
: computer === "rock" && playerOne === "paper" ? "player wins!"
: computer === "rock" && playerOne === "scissors" ? "computer wins!"
: computer === "paper" && playerOne === "scissors" ? "player wins!"
: computer === "paper" && playerOne === "rock" ? "computer wins!"
: computer === "scissors" && playerOne === "rock" ? "player wins!"
:"computer wins";
console.log(game);
*/
////////////////////////////////////////////////////////////////////////////////
// you need figure out the main advantage of ternary operator
// you can write the above code in much simpler way! ****
/* when using ternary operator you don't need to worry about 
ifFalse part (after colon :) it acts as a else statement.
so you can easily compile all else (ifFalse) conditionals in part!***/
/*
let player = "scissors";
let computer = "scissors";
let game = 
player === computer ? "Tie"
: player === "rock" && computer === "paper"  ? "computer won!"
: player === "paper" && computer === "scissors" ? "computer won!"
: player === "scissors" && computer === "rock" ? "computer won!"
: "player won!";
console.log(game);
*/ 
//////////////////////////////////////////////////////////////////////////////////
/// practice 
/*
let key = "rps";
let player = key.charAt(Math.floor(Math.random()*3));
let computer = key.charAt(Math.floor(Math.random()*3));
let game = 
player === computer ? "Tie" 
: player === "r" && computer === "p" ? "computer won!"
: player === "p" && computer === "s" ? "computer won!"
: player === "s" && computer === "r" ? "computer won!"
: "player won!";
console.log(game);
*/
////////////////////////////////////////////////////////////////////////
// decision tree thinking using ternary operator + Math.random method 

let key = "rps"; // r = rock, p = paper, s = scissors ****
// let's generate random choice for both player and computer
let player = key.charAt(Math.floor(Math.random()*3));
let computer = key.charAt(Math.floor(Math.random()*3));
let game = // let's use ternary condition to create rock,paper,scissors game 
player === computer ? "Tie"
: player === "r" /* rock */ && computer === "p" /* let's make computer win */ ? "computer won!"
: player === "p" /* paper */ && computer === "s" ? "computer won!"
: player === "s" /* scissors */ && computer === "r" ? "computer won!"
: /* now all the else conditions gonna come uder this */ "player won!";
// that's the main feature of ternary operator. these are next-level if else statements 
// which requires less line of code and not bulky like regular if else statements***
console.log(game);
 







































