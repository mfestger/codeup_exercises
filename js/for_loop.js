/**
 * Created by michaelfestger on 4/11/17.
 */

"use strict";

console.log("*** EXAMPLE 1 ***");

var x = Math.floor(Math.random()* 10) +1;
for (var i = 1; i < 10; i++) {
    console.log(i);
}

console.log("*** EXAMPLE 2 ***");


for (var i = 1; i < 10; i++) {
    var i = Math.floor(Math.random() * 10) + 1;
    i % 2 ? console.log(i + " is odd") : console.log(i + "is even.")


}