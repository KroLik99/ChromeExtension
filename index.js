let myLeads = ["a","b","c"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

//Grab the ul and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function (){
    myLeads.push(inputEl.value)
    console.log("Clicked")
    console.log("The input is: " + inputEl)
    console.log(myLeads)
    }
)
/* Log out the items in the myLeads array using a for loop and add to ul*/
for(let i =0; i<myLeads.length;i++){
    ulEl.textContent += myLeads[i] + " "
}
