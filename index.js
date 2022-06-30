console.log("Hello World")
// const PI = 3.142;
// let radius = window.prompt("Enter the radius of the circle");
// radius = Number(radius);
// let circumference = 2 * PI * radius;
// console.log ("The circumferece of the circle is", circumference);

// let username;
// username = String(username);
// document.getElementById("myButton").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML = "Welcome, " + username;
// };

// let a;
// let b;
// let c;

// document.getElementById("submitButton").onclick = function(){
//    a = document.getElementById("aTextBox").value;
//    a = Number(a);
//    b = document.getElementById("bTextBox").value;
//    b = Number(b);
//    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//    console.log ("The value of c is", c);
//    document.getElementById("cLabel").innerHTML = "Side C is " + c;
// };

// let count = 0;
// document.getElementById("increaseButton").onclick = function(){
//     count += 2; 
//     document.getElementById("countLabel").innerHTML = count;
// }
// document.getElementById("resetButton").onclick = function(){
//     count = 0; 
//     document.getElementById("countLabel").innerHTML = count;
// };
// document.getElementById("decreaseButton").onclick = function(){
//     count -= 2; 
//     document.getElementById("countLabel").innerHTML = count;
// };


// let diceA;
// let diceB;
// document.getElementById("rollButton").onclick = function(){
//     diceA = (Math.floor(Math.random() * 6) + 1)
//     document.getElementById("diceA").innerHTML = diceA;

//     diceB = (Math.floor(Math.random() * 6) + 1)
//     document.getElementById("diceB").innerHTML = diceB; 
// }
//using .slice to extract variables. strict extracts section of a string without modifying the original

let fullName = "George Bush";
let firstName;
let lastName;
firstName = fullName.slice(0, 6);
console.log(firstName);

