//*****************************************************************
// define vars for the input elements (easy access)
let txt = document.getElementById("txt-background");
let btn = document.getElementById("btn-submit");


//*****************************************************************
// The input-text got the focus, either by mouse-click or by
// keyboard.
function textFocused() {
    // draw a blue border around the input-text...
    txt.classList.add("blue-border");

    // and remove the blue border from the button
    btn.classList.remove("blue-border");
}


//*****************************************************************
// The submit button got the focus, either by mouse-click or by 
// keyboard.
function buttonFocused() {
    // draw a blue border around the button...
    btn.classList.add("blue-border");

    // and remove the blue border from the input-text
    txt.classList.remove("blue-border");
}


//*****************************************************************
// the click event for the submit button was triggered, either by
// mouse click or by keyboard.
function buttonClicked() {
    // do some styling
    buttonFocused();

    // set background of the body
    setBodyBackground();
}


//*****************************************************************
// Get value from the input-text and set the background definition
function setBodyBackground() {
    // The task is to change only the background color of the body:
    // document.body.style.backgroundColor = txt.value;

    // But there is no reason to extend the task and change not 
    // only the color but the full background of the body.
    // That allows us to use gradients and other cool features 😉 
    document.body.style.background = txt.value;
}
