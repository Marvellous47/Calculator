const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = localStorage.getItem('calcValue') || '';
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
    } else if (value === 'C') {
      currentInput = '';
    } else {
      currentInput += value;
    }

    localStorage.setItem('calcValue', currentInput);
    display.textContent = currentInput || '0';
  });
});