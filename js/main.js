// Get like buttons, submit buttons, save buttons and comments data
const likeBtn = document.getElementsByClassName("fa-thumbs-up");
const liked = document.getElementById("liked");
const saveButtons = document.getElementsByClassName("savebtn");
const likeButtons = document.getElementsByClassName("likebtn");

// Loop through each button and add an event listener to target each click of the save button
for (let i = 0; i < saveButtons.length; i++) {
    let button = saveButtons[i];
    button.addEventListener("click", saveForLater);
}

// Loop through each button and add an event listener to target each click of the save button
for (let i = 0; i < likeButtons.length; i++) {
    let likeBtn = likeButtons[i];
    likeBtn.addEventListener("click", likeButton);
}

// Set icon and message to like
function likeButton(event) {
 
     // Get event from clicked button
     let likeButton = event.target;

     // Target parent elements above the button element
     let likeItem = likeButton.parentElement.parentElement;
 
     // Get data from div element
     let newLikeItem = likeItem.getElementsByClassName("item").innerHTML;

    // If there is nothing saved at the start then save an empty array
    if(sessionStorage.getItem("Liked") == null) {
        sessionStorage.setItem("Liked", "[]");
    }

    // Get old item and save it to the new item
    let oldlikedItem = JSON.parse(sessionStorage.getItem("Liked"));
    oldlikedItem.push(newLikeItem);

    // If like button is clicked while the button is an outline white then set to solid white
    if (likeBtn[0].className == "fa-regular fa-thumbs-up") {
        likeBtn[0].className = "fa-solid fa-thumbs-up";
    } 
}  

// Function to save items for later
function saveForLater(event) {
    
    // Get event from clicked button
    let button = event.target;

    // Target parent elements above the button element
    let item = button.parentElement.parentElement;

    // Get data from div element
    let newItem = item.getElementsByClassName("item")[0].innerHTML;

    // If there is nothing saved at the start then save an empty array
    if(sessionStorage.getItem("SavedItems") == null) {
        sessionStorage.setItem("SavedItems", "[]");
    }

    // Get old item and save it to the new item
    let oldItem = JSON.parse(sessionStorage.getItem("SavedItems"));
    oldItem.push(newItem);

    // Save the old and new data to session storage
    sessionStorage.setItem("SavedItems", JSON.stringify(oldItem));

    // Get the number of items in the session storage
    let arrayFromStorage = JSON.parse(sessionStorage.getItem("SavedItems"));
    let arrayLength = arrayFromStorage.length;

    //let count = document.createTextNode(`Saved to folder. You have ${arrayLength} items in your folder`);
    let msg = `Saved to folder. You have ${arrayLength} items in your folder`;
    alert(msg);
};