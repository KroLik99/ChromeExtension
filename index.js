let myLeads = ["a","b","c"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

//Grab the ul and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el")
const buyEl = document.getElementById("buy-el")

inputBtn.addEventListener("click", function (){
    myLeads.push(inputEl.value)
    console.log("Clicked")
    console.log("The input is: " + inputEl)
    console.log(myLeads)
    }
)
/* Log out the items in the myLeads array using a for loop and add to ul*/
for(let i =0; i<myLeads.length;i++){
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li> "
}

buyEl.innerHTML = "<button>Buy!</button>"
/* When clicked, render a paragraph under the button in the container
that says "Thank you for buying"
 */
buyEl.addEventListener("click", function (){
    buyEl.innerHTML += "<p>Thank you for buying!</p>"
})
