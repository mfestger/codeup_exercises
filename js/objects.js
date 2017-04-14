"use strict";

// EXAMPLE 1
var person = {};
person.firstName = "Mike";
person.lastName = "Festger";
console.log("Hello from " + person.firstName + " " + person.lastName + "!");
console.log("----------------------");

// EXAMPLE 2
var shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
];
shoppers.forEach(function (shopper) {
        var discountRate = .35;
        var totalDollarsPaid = 0;
        var discountBreakpointDollars = 200;
    if (shopper.amount >= discountBreakpointDollars){
        var totalDiscount = (shopper.amount * discountRate);
        totalDollarsPaid = (shopper.amount - totalDiscount);
        console.log("Name: " + shopper.name + ".");
        console.log("Amount paid before discount: $" + shopper.amount);
        console.log("Amount of discount (if applicable): 35%.");
        console.log("Amount after discount applied: $" + totalDollarsPaid + ".");
        console.log("--------------------");
    } else {
        console.log(shopper.name + " did not spend more than $200 so there was no discount.");
        console.log("--------------------")
    }
});

// EXAMPLE 3
var books = [
    {title: "The World According to Garp", author: {firstName: "John", lastName: "Irving"}},
    {title: "Cat in the Hat", author: {firstName: "Dr.", lastName: "Suess"}},
    {title: "Hamlet", author: {firstName: "William", lastName: "Shakespeare"}},
    {title: "Eishnorn", author: {firstName: "Dan", lastName: "Abnett"}},
    {title: "The Last Chancers", author: {firstName: "Gav", lastName: "Thorpe"}},
    {title: "Fahrenheit 451", author: {firstName: "Ray", lastName: "Bradbury"}},
    {title: "The DaVinci Code", author: {firstName: "Dan", lastName: "Brown"}},
    {title: "To Kill a Mockingbird", author: {firstName: "Harper", lastName: "Lee"}},
    {title: "The Dark Knight Returns", author: {firstName: "Frank", lastName: "Miller"}},
    {title: "Brave New World", author: {firstName: "Aldous", lastName: "Huxley"}}
];

var i = 1;
books.forEach(function (book) {
    console.log("Book #" + i);
    console.log("Title: " + book.title);
    console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    console.log("---");
    i++;
});




