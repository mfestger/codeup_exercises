/**
 * Created by michaelfestger on 4/25/17.
 */
"use strict";


$('#text01').hide();















$('.button').click(function () {
    var fate = Math.floor(Math.random() * 2 +1);
    console.log(fate);
    if (fate <= 1) {
        death();
    }
    else {
        freedom();
    }
    function death() {
        alert("You died");
        finish();
    }
    function freedom() {
        alert("FREEEDOOOOOOOM!!!!!")
        finish();
    }

});

function finish(){
    $('.button').hide();
    $('h1').hide()
}




