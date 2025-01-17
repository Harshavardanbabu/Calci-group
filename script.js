// Variables to store the current input, operator, and previous input
let currentInput = '';
let operator = '';
let previousInput = '';

// Function to append a value to the current input
function appendValue(value) {
    currentInput += value; // Concatenate the value
    updateResult(currentInput); // Update the display
}

// Function to set the operator and handle calculation chaining
function operate(op) {
    if (currentInput === '' && previousInput === '') return; // Ignore if no input
    if (previousInput !== '') calculate(); // Perform previous calculation if applicable
    operator = op; // Set the new operator
    previousInput = currentInput || previousInput; // Use the last result if no new input
    currentInput = ''; // Reset current input
    updateResult(`${previousInput} ${operator}`); // Show the current expression on the screen
}

// Function to perform the calculation
function calculate() {
    if (currentInput === '' || previousInput === '' || operator === '') return; // Ignore invalid cases

    const num1 = parseFloat(previousInput); // Convert previous input to a number
    const num2 = parseFloat(currentInput); // Convert current input to a number
    let result;

    // Perform the calculation based on the operator
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error'; // Handle division by zero
            break;
        default:
            return;
    }

    updateResult(result); // Display the result
    currentInput = result.toString(); // Update the current input with the result
    previousInput = ''; // Reset the previous input
    operator = ''; // Reset the operator
}

// Function to clear all inputs and reset the calculator
function clearResult() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateResult(''); // Clear the display
}

// Function to update the display with the current value
function updateResult(value) {
    document.getElementById('result').value = value || '0'; // Display value or default to "0"
}
