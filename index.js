/*
Create 2 variables:
myLeads -> should be assigned to an empty array
inputEl -> should be assigned to the text input
 */
let myLeads = [];
const inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function (){
    console.log("Clicked")
    console.log(inputEl)
    }
)

