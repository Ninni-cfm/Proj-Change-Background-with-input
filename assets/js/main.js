//*****************************************************************
// define vars for the input elements (easy access)
let txt = document.getElementById("color-text");
let btn = document.getElementById("submit");


function buttonClicked() {

    // draw a blue border around the button...
    btn.classList.add("blue-border");

    // and remove the blue border from the input-text
    txt.classList.remove("blue-border");

    // get the background definition from the input-text...
    let bgColor = txt.value;

    // ... and set the background of the body
    document.body.style.background = bgColor;
}


function textClicked() {

    // draw a blue border around the input-text...
    txt.classList.add("blue-border");

    // and remove the blue border from the button
    btn.classList.remove("blue-border");
}
