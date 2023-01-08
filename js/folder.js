// Get the number of items in the session storage
let arrayFromStorage = JSON.parse(sessionStorage.getItem("SavedItems"));
let arrayLength = arrayFromStorage.length;
console.log(arrayLength);

// Target the saved title to display the number of saved items
let header = document.getElementById("h2");
let count = document.createTextNode(` (${arrayLength})`);

// Add to the count value to the header text
header.appendChild(count);

// Function to get the saved items from session storage and display to the web page
function viewItems(){
    
    // if there is indeed data then continue
    if(sessionStorage.getItem("SavedItems") != null){
        document.getElementById("displayitems").innerHTML = JSON.parse(sessionStorage.getItem("SavedItems")).join(" ");
    }
}

// Function to display the saved items to the web page
viewItems();

