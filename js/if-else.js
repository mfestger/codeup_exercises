/**
 * Created by michaelfestger on 4/10/17.
 */

'use strict';

console.log("***EXAMPLE 1***");
// Example 1
var grade1 = 70;
var grade2 = 80;
var grade3 = 95;

var averageGrade =  (grade1 + grade2 + grade3) / 3;

if (averageGrade >= 80){
    console.log("You're awesome!");
} else {
    console.log("You need to practice more.");
}

// Example 2
console.log("***EXAMPLE 2***");
var AmountCameron = 180;
var AmountRyan = 250;
var AmountGeorge = 320;

if (AmountCameron >= 200){
    AmountCameron = AmountCameron * .35;
    console.log("Cameron bought $180 worth of products. Final payment: $" + AmountCameron);
}

if (AmountRyan >= 200){
    AmountRyan = AmountRyan * .35;
    console.log("Ryan bought $250 worth of products. Final payment: $" + AmountRyan);
}

if (AmountGeorge >= 200){
    AmountGeorge = AmountGeorge * .35;
    console.log("George bought $320 worth of products. Final payment: $" + AmountGeorge);
}


// Example 3
console.log("***EXAMPLE 1***");
var flipACoin = Math.floor(Math.random()* 2)

if (flipACoin == 0){
    console.log("Buy a car");
} else{
    console.log("Buy a house");
}

/*

 // Example 2 alt.
 var customer = "ryan";
 var costDollars = null;
 var discountRate = .35;
 var totalSpentDollars = null;
 var discountBreakpointDollars = 200;

 var cameronSpentDollars = 180;
 var ryanSpentDollars = 250;
 var georgeSpentDollars = 320;

 var cameron = "Cameron";
 var ryan = "Ryan";
 var george = "George";

 customer = cameron;
 totalSpentDollars = cameronSpentDollars;

 if (totalSpentDollars > discountBreakpointDollars) {
 costDollars = totalSpentDollars - (totalSpentDollars * discountRate)
 } else {
 costDollars = totalSpentDollars;
 }
 console.log( customer + "bought" + "$" + totalSpentDollars + "worth of products." + "Final payment: $" costDollars + ".");

/*
// Example 3 alt.

if (flipACoin){
    console.log("Buy a house");
} else{
    console.log("Buy a car");
}
var choice = (flipACoin) ? "Buy a house" : "Buy a car"

*/