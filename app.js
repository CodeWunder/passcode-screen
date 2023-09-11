function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); 
    const minutes = now.getMinutes().toString().padStart(2, '0'); 
    const currentTime = hours + ':' + minutes;

    timeElement.textContent = currentTime;
}
updateTime();
setInterval(updateTime, 1000);

const buttonRow = document.getElementById('buttonRow');
buttonRow.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('number-button')) {
        const number = target.getAttribute('data-number');
        updateDisplay(number);
    }
});

function updateDisplay(number) {
    let currentNumber = displayedNumber.textContent;

    if (currentNumber.length < 4) {
        currentNumber += number.toString();
    }

    if (currentNumber.length > 4) {
        currentNumber = currentNumber.slice(-4);
    }

    if (currentNumber !== "4444") {
        numberBar.style.border = '5px solid red';
    } else {
        numberBar.style.border = '5px solid green';
        alert('The Password you entered is correct');
    }

    displayedNumber.textContent = currentNumber;
    deleteIcon.style.visibility = 'visible';
}

function deleteLastNumber() {
    let currentNumber = displayedNumber.textContent;
    
    if (currentNumber.length > 0) {
        currentNumber = currentNumber.slice(0, -1);
        displayedNumber.textContent = currentNumber;
    }

    if (currentNumber.length === 0) {
        hideDeleteIcon();
    }
    numberBar.style.border = 'none'
}

function showDeleteIcon() {
    const deleteIcon = document.getElementById('deleteIcon');
    deleteIcon.style.visibility = 'visible';
}

function hideDeleteIcon() {
    const deleteIcon = document.getElementById('deleteIcon');
    deleteIcon.style.visibility = 'hidden';
}
