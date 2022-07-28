let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

//Grab the ul and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function (){
    myLeads =[]
    myLeads.push(inputEl.value)
    renderLeads()
    }
)

function renderLeads(){
    let listItems =[];
    for(let i =0; i<myLeads.length;i++){
        /* Add the item to the listItems variable instead of the ulEl.innerHTML*/
        listItems += "<li>"+myLeads[i]+"</li>"
    }
    /*Render the listItems inside the unordered list using ulEl.innerHTML*/
    ulEl.innerHTML += listItems
}
