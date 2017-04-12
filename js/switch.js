/*
 * Created by michaelfestger on 4/10/17.
 */

'use strict';

console.log(" >>> Exercise 1 <<<");

var luckyNumber = Math.floor(Math.random()* 6);

var price = 60;

switch (luckyNumber){
    case 1:
        price = price * .10;
        console.log("Your lucky number is " + luckyNumber + " and the discount is: $" + price + ".");
        break;
    case 2:
        price = price * .25;
        console.log("Your lucky number is " + luckyNumber + " and the discount is: $" + price + ".");
        break;
    case 4:
        price = price * .50;
        console.log("Your lucky number is " + luckyNumber + " and the discount is: $" + price + ".");
        break;
    case 5:
        price = 0;
        console.log("Your lucky number is " + luckyNumber + " so your purchase is FREE!");
        break;
    default:
        console.log("There is no discount.");
}

console.log(" >>> Exercise 2 <<<");

var month = (Math.floor(Math.random() * 12) +1);

switch (month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
}