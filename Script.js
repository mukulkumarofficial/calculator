function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    let display = document.getElementById('display');
    let equation = display.value;
    
    try {
      let result = eval(equation);
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }
  