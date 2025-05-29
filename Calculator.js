const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = localStorage.getItem('calcValue') || '';
let justEvaluated = false;
display.textContent = currentInput || '0';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
      justEvaluated = true;
    } else if (value === 'C') {
      currentInput = '';
      justEvaluated = false;
    } else if (value === '⌫') {
      currentInput = currentInput.slice(0, -1);
      justEvaluated = false;
    } else if (value === '%') {
      try {
        currentInput = (eval(currentInput) / 100).toString();
      } catch {
        currentInput = 'Error';
      }
      justEvaluated = true;
    } else {
      if (justEvaluated && /\d/.test(value)) {
        currentInput = value;
      } else {
        currentInput += value;
      }
      justEvaluated = false;
    }

    localStorage.setItem('calcValue', currentInput);
    display.textContent = currentInput || '0';
  });
});
