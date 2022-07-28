/*
Log out "Button clicked!" when the user clicks the SAVE input button


function clicked(){
    console.log("Button clicked from onclick attribute!")
}
let inputBtn = document.getElementById("input-btn");
inputBtn.addEventListener("click", function () {
    console.log("Button clicked from addEvenListener.")
})


If possible use const, otherwise let
    Which variables below should be changed from let to const?
The customer wants to order some stuff. Here are the details:
    */
const basePrice = 520;
const discount = 120;
let shippingCost = 12;
let shippingTime = "5-12 days"

//Whoops, turns out shipping is more complex:

shippingCost = 15;
shippingTime = "7-14 days";

//calculating the full price
const fullprice = basePrice -discount + shippingCost

//finally notifying the customer;
console.log("Total cost: "+ fullprice + ". It will arrive in "+ shippingTime)
