
// Function to display value
function display(val) {
    document.getElementById("result").value += val;
}

// Function to handle keypress events and run different functions when certain conditions are met
function handleKeyPress(event) {
    const key = event.key;
    if ('0123456789+-*/'.includes(key)) {
        display(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clr();
    }
}

// Function to calculate the result and show it in the input element with id of result
function calculate() {
    try {
        const result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch (e) {
        document.getElementById("result").value = 'Error';
    }
}

// Function to clear the display of the input element with id of result
function clr() {
    document.getElementById("result").value = '';
}

// Attach keypress event to the document and call handleKeyPress function whenever a key is pressed
document.addEventListener('keypress', handleKeyPress);

// Attach keyup event for Enter key on the calculator element
document.getElementById("calc").addEventListener('keyup', function (event) {
    if (event.keyCode === 13) { // 13 is the Enter key
        calculate();
    }
});
