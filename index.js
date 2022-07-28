let myLeads = [];
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