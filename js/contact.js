// Get like buttons, submit buttons, save buttons and comments data

const submitBtn = document.querySelector('.submit__btn');
const userName = document.querySelector('#user');
const comment = document.querySelector('#comment');
const commentsCont = document.querySelector('.comments__container');

// Set feedback when submit button is pressed
submitBtn.addEventListener('click', submitFeedback);
feedbackArr = [];
let positiveFeedback = false;

function submitFeedback(e){
    
    // Get User's name
    const userForm = userName.value; 

    // Get feedback
    const commentForm = comment.value;

    // If inputs are not empty
    if(userForm && commentForm !== '') {

        // create new feedback
        newFeedback = {
            "id": Math.floor((Math.random() * 1000)+ 1),
            "userName": userForm,
            "userComment": commentForm
        };

        // Add new feedback to array
        feedbackArr.push(newFeedback);
        
        // Clear inputs 
        resetForm();

        // Add feedback to list
        addFeedback(newFeedback);
    }

    // Stop default behaviour of the form submission
    e.preventDefault();
}

// Reset the form after data is submitted
function resetForm() {
    userName.value = '';
    comment.value = '';
    positiveFeedback = false;
}

// Add comments to the comment list
function addFeedback(item) {

    // Select first letter of the user name
    const letter = (item.userName).charAt(0);

    // Create new div
    const div = document.createElement('div');

    // Add class
    div.classList = 'comment__card';

    // Add id
    div.id = item.id;

    // Add html
    div.innerHTML = `
    <div class="pic center__display">
                    ${letter}
                </div>
                <div class="comment__info">
                    <small class="nickname">
                        ${item.userName}
                    </small>
                    <p class="comment">
                        ${item.userComment}
                    </p>
                </div>
    `;

    // Insert feedback into the list
    commentsCont.insertAdjacentElement('beforeend', div);
}

// Set contact form message on submit
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('submitForm');
    form.addEventListener('submit', function(event) {

      // prevent the form from submitting
      event.preventDefault();

      // display the message
      displayMessage();
    });
  });

function displayMessage() {

    const message = 'Thank you for submitting the form!';
       
    // Get the form element to hold the message
    const form = document.getElementById('submitMessage');
    
    // Insert the message element after the form
    form.innerHTML += message;

    // SetTimeOut to remove message after 2 seconds
    setTimeout(removeMessage, 3000);

    // Function to remove the message and input fields
    function removeMessage() {
        document.getElementById("submitMessage").innerHTML = "";
        document.getElementById("submitForm").reset(); 
    }
  }