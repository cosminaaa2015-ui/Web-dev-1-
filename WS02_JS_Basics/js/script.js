console.log("Hello World!");
alert("Hello World!");
const name = "Cosmina";
let age = 24;
const favouriteAnimal = "Black Horse";

console.log(name);
console.log(age);
console.log(favouriteAnimal);

console.log("Hello! My name is " + name + " and my favourite animal is the " + favouriteAnimal + ".");
const userName = prompt("What is your name?");
console.log("Hello " + userName + "! Welcome to JavaScript.");
const userAge = prompt("How old are you?");

if (userAge >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}
function greetUser(name) {
    console.log("Hello " + name + "!");
}

greetUser("Cosmina");
greetUser("John");
const button = document.getElementById("messageButton");

button.addEventListener("click", function() {
    alert("JavaScript works!");
});