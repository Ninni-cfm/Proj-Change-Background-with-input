let btn = document.getElementById("submit");

function changeBodyColor() {
    console.log("changeBodyColor()");

    btn.style.boxShadow = "0 0 15px 5px blue";

    let bgColor = document.getElementById("color-value").value;
    console.log(bgColor);

    document.body.style.background = bgColor;

}


function buttonFocusOut() {
    btn.style.boxShadow = "none";
}
