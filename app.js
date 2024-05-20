  const buttons = document.querySelectorAll('.button');
  const display = document.getElementById('screenDisplay');

  let currentInput = '';
  let operator = null;
  let firstOperand = null;
  let secondOperand = null;

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const value = this.getAttribute('value');
      const type = this.getAttribute('data-type');

      // CLEAR BUTTON //
      if (type === 'clear') {
        // this button will clear the display and reset all variables
        currentInput = '';
        operator = null;
        firstOperand = null;
        secondOperand = null;
        display.textContent = '';

      // "=" EQUALS BUTTON (operates the equation) //
      } else if (value === '=') {
        // Calculate and display the result
        secondOperand = parseFloat(currentInput);
        if (firstOperand !== null && operator !== null && !isNaN(secondOperand)) {
          let result;
          if (operator === '+') {
            result = firstOperand + secondOperand;
          } else if (operator === '-') {
            result = firstOperand - secondOperand;
          } else if (operator === '*') {
            result = firstOperand * secondOperand;
          } else if (operator === '/') {
            result = firstOperand / secondOperand;
          }
          display.textContent = result;
          currentInput = result.toString();
          firstOperand = result;
          operator = null;
        }
      } else if (['+', '-', '*', '/'].includes(value)) {
        // checks for operator and then stores operand
        if (currentInput !== '') {
          firstOperand = parseFloat(currentInput);
          operator = value;
          currentInput = '';
        }
      } else {
        // appends the digit to the end //
        currentInput += value;
        display.textContent = currentInput;
      }
    });
  });


