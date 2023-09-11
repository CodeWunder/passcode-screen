// Cache frequently used DOM elements
const timeElement = document.getElementById('time');
const displayedNumber = document.getElementById('displayedNumber');
const deleteIcon = document.getElementById('deleteIcon');
const numberBar = document.getElementById('numberBar');

// Update the displayed time every second
function updateTime() {
    const now = new Date();
    const hoursMinutes = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    timeElement.textContent = hoursMinutes;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call

// Event listener for number buttons
document.querySelectorAll('.numbers button').forEach((button) => {
    button.addEventListener('click', () => {
        const number = button.textContent;
        updateDisplay(number);
    });
});

// Function to update the displayed number when a button is pressed
function updateDisplay(number) {
    let currentNumber = displayedNumber.textContent;
    currentNumber = (currentNumber + number).slice(0, 4);
    displayedNumber.textContent = currentNumber;
    checkPassword(currentNumber);
    toggleDeleteIcon();
}

// Function to check the entered password
function checkPassword(currentNumber) {
    if (currentNumber === "4444") {
        numberBar.style.border = '5px solid green';
        alert('The Password You Entered Is Correct');
    } else if (currentNumber.length === 4) {
        numberBar.style.border = '5px solid red';
    } else {
        numberBar.style.border = 'none';
    }
}

// Function to show/hide the delete icon
function toggleDeleteIcon() {
    deleteIcon.style.visibility = displayedNumber.textContent.length > 0 ? 'visible' : 'hidden';
}

// Function to delete the last entered number
function deleteLastNumber() {
    let currentNumber = displayedNumber.textContent;
    if (currentNumber.length > 0) {
        currentNumber = currentNumber.slice(0, -1);
        displayedNumber.textContent = currentNumber;
    }
    if (currentNumber.length === 0) {
        toggleDeleteIcon();
    }
    numberBar.style.border = 'none';
                            }
        
