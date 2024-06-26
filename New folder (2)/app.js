// Logic statement 
// if else
// else if
// nested if else
// ternory operators
// switch case
var marks = 75;
if (marks >= 90 && marks <= 100) {
    console.log("Grade : A1+ ");
}
else if (marks >= 80 && marks <= 89) {
    console.log("grade A+ ");
}
else if (marks >= 70 && marks <= 79) {
    console.log("grade : A ");
}
else if (marks >= 60 && marks <= 69) {
    console.log("grade : B");
}
else if (marks >= 50 && marks <= 59) {
    console.log("grade ; C");
}
else if (marks >= 40 && marks <= 49) {
    console.log("grade : D");
}
else {
    console.log("Fail");
}
var day = "monday";
if (true) {
    if (day === "monday") {
        console.log("Go to the work.");
    }
    else {
        console.log("today is sunday");
    }
    if (day === "tuesday") {
        console.log("this is second of week");
    }
    else {
        console.log("today is a hot day");
    }
}
var raining = true; // barish ho rahi hai
if (raining = true) {
    console.log("wear a rain cot.");
}
else {
    console.log("wear a sun glasses.");
}
var weather = "sunny";
if (weather === "raining") {
    console.log("wear a rain cot.");
}
else if (weather === "sunny") {
    console.log("wear a sun glasses.");
}
else {
    console.log("weather is cloudy");
}
var calculator;
if (calculator === undefined) {
    var num1 = 56;
    var num2 = 78;
    var num3 = num1 + num2;
    console.log("the sum of ".concat(num1, " and ").concat(num2, " is ").concat(num3));
}
else {
    console.log("invalid number");
}
