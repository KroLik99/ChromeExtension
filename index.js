/*
Log out "Button clicked!" when the user clicks the SAVE input button
 */

function clicked(){
    console.log("Button clicked from onclick attribute!")
}
let inputBtn = document.getElementById("input-btn");
inputBtn.addEventListener("click", function () {
    console.log("Button clicked from addEvenListener.")
})