// The function that updates the time
function updateTime() {
    // Get the element that displays the time
    const timeElement = document.getElementById('time');

    // Get the current hour and minute, ensuring they have two digits
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); 
    const minutes = now.getMinutes().toString().padStart(2, '0'); 

    // Create a string in the format "hh:mm" for the current time
    const currentTime = hours + ':' + minutes;

    // Update the displayed time on the webpage
    timeElement.textContent = currentTime;
}

// Initialize and update the time every second
updateTime();
setInterval(updateTime, 1000);

// The function to update the displayed number when a button is pressed
function updateDisplay(number) {
    // Get references to elements on the webpage
    const displayedNumber = document.getElementById('displayedNumber');
    const deleteIcon = document.getElementById('deleteIcon');

    // Get the current number displayed
    let currentNumber = displayedNumber.textContent;

    // If the current number is less than 4 digits, add the pressed number
    if (currentNumber.length < 4) {
        currentNumber += number.toString();
    }
    else {
        // If there are already 4 digits, start over with the new number
        currentNumber = number.toString();
    }

    // Check if the entered number is the correct password (4444)
    if (currentNumber.length === 4 && currentNumber !== "4444") {
        // Show a red border to indicate the password is not correct
        numberBar.style.border = '5px solid red';
    }

   else if (currentNumber === "4444") {
        // Show a green border and display a success message
        numberBar.style.border = '5px solid green';
        alert('The Password You Entered Is Correct');
    }

    // If the entered number is not correct or not exactly 4 digits, remove the border
    else (currentNumber !== "4444" && currentNumber.length !== 4) {
        numberBar.style.border = 'none';
    }

// Function to delete the last entered number
function deleteLastNumber() {
    let currentNumber = displayedNumber.textContent;

    // If there is a number to delete (not empty), remove the last digit
    if (currentNumber.length > 0) {
        currentNumber = currentNumber.slice(0, -1);
        displayedNumber.textContent = currentNumber;
    }

    // If there are no digits left, hide the delete icon and remove any border
    if (currentNumber.length === 0) {
        hideDeleteIcon();
    }
    numberBar.style.border = 'none'
}

// Function to show the delete icon
function showDeleteIcon() {
    const deleteIcon = document.getElementById('deleteIcon');
    deleteIcon.style.visibility = 'visible';
}

// Function to hide the delete icon
function hideDeleteIcon() {
    const deleteIcon = document.getElementById('deleteIcon');
    deleteIcon.style.visibility = 'hidden';
}
