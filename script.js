let result = '';
function appendValue(value) {
    result += value;
    document.getElementById('result').value = result;
}
function clearResult() {
    result = '';
    document.getElementById('result').value = result;
}

let operator = '';
let firstOperand = '';

function operate(op) {
    if (result !== '') {
        firstOperand = result;
        operator = op;
        result = '';
        document.getElementById('result').value = result;
    }
}

function calculate() {
    if (firstOperand !== '' && operator !== '' && result !== '') {
        const secondOperand = result;
        let calculation = 0;

        switch (operator) {
            case '+':
                calculation = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                calculation = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                calculation = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                calculation = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
        }

        result = calculation.toString();
        document.getElementById('result').value = result;

        firstOperand = '';
        operator = '';
    }
}

function enableCalculateButton() {
    document.querySelector('button[onclick="calculate()"]').disabled = (firstOperand === '' || operator === '');
}

function appendValue(value) {
    result += value;
    document.getElementById('result').value = result;
    enableCalculateButton();
}

function operate(op) {
    if (result !== '') {
        firstOperand = result;
        operator = op;
        result = '';
        document.getElementById('result').value = result;
        enableCalculateButton();
    }
}

clearResult();