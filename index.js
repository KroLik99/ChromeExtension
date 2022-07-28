let myLeads = ["a","b","c"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

//push the value "www.awesomelead.com" to myArray when the input button is clicked

inputBtn.addEventListener("click", function (){
    myLeads.push(inputEl.value)
    console.log("Clicked")
    console.log("The input is: " + inputEl)
    console.log(myLeads)
    }
)
/* Log out the items in the myLeads array using a for loop*/
for(let i =0; i<myLeads.length;i++){
    console.log(myLeads[i]);
}
