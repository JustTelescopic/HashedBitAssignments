import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay('0.');
      setWaitingForSecondOperand(false);
      return;
    }

    if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
  };

  const clearAll = () => {
    setDisplay('0');
    setOperator(null);
    setMemory(null);
    setWaitingForSecondOperand(false);
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (memory === null) {
      setMemory(inputValue);
    } else if (operator) {
      const result = calculate(memory, inputValue, operator);
      setMemory(result);
      setDisplay(String(result));
      
      // Add to history
      setHistory([...history, `${memory} ${operator} ${inputValue} = ${result}`]);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (firstOperand, secondOperand, op) => {
    switch (op) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '×':
        return firstOperand * secondOperand;
      case '÷':
        if (secondOperand === 0) {
          alert('Cannot divide by zero');
          return firstOperand;
        }
        return firstOperand / secondOperand;
      case '^':
        return Math.pow(firstOperand, secondOperand);
      default:
        return secondOperand;
    }
  };

  const performEquals = () => {
    if (operator && memory !== null) {
      const inputValue = parseFloat(display);
      const result = calculate(memory, inputValue, operator);
      setDisplay(String(result));
      
      // Add to history
      setHistory([...history, `${memory} ${operator} ${inputValue} = ${result}`]);
      
      setMemory(null);
      setOperator(null);
      setWaitingForSecondOperand(false);
    }
  };

  const toggleSign = () => {
    setDisplay(String(-parseFloat(display)));
  };

  const calculatePercentage = () => {
    const currentValue = parseFloat(display);
    setDisplay(String(currentValue / 100));
  };

  const calculateSquareRoot = () => {
    const currentValue = parseFloat(display);
    if (currentValue < 0) {
      alert('Cannot calculate square root of a negative number');
      return;
    }
    setDisplay(String(Math.sqrt(currentValue)));
  };

  const calculateSin = () => {
    const currentValue = parseFloat(display);
    setDisplay(String(Math.sin(currentValue)));
  };

  const calculateCos = () => {
    const currentValue = parseFloat(display);
    setDisplay(String(Math.cos(currentValue)));
  };

  const calculateTan = () => {
    const currentValue = parseFloat(display);
    setDisplay(String(Math.tan(currentValue)));
  };

  const calculateLog = () => {
    const currentValue = parseFloat(display);
    if (currentValue <= 0) {
      alert('Cannot calculate logarithm of a non-positive number');
      return;
    }
    setDisplay(String(Math.log10(currentValue)));
  };

  const calculateLn = () => {
    const currentValue = parseFloat(display);
    if (currentValue <= 0) {
      alert('Cannot calculate natural logarithm of a non-positive number');
      return;
    }
    setDisplay(String(Math.log(currentValue)));
  };

  const backspace = () => {
    if (display.length === 1 || (display.length === 2 && display.startsWith('-'))) {
      setDisplay('0');
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="calculator-display">
          <div className="output">{display}</div>
        </div>
        
        <div className="calculator-keypad">
          <div className="scientific-functions">
            <button className="key function" onClick={calculateSin}>sin</button>
            <button className="key function" onClick={calculateCos}>cos</button>
            <button className="key function" onClick={calculateTan}>tan</button>
            <button className="key function" onClick={calculateLog}>log</button>
            <button className="key function" onClick={calculateLn}>ln</button>
            <button className="key function" onClick={() => handleOperator('^')}>x^y</button>
            <button className="key function" onClick={calculateSquareRoot}>√</button>
            <button className="key function" onClick={calculatePercentage}>%</button>
            <button className="key function" onClick={() => setShowHistory(!showHistory)}>
              {showHistory ? 'Hide' : 'Hist'}
            </button>
          </div>
          
          <div className="input-keys">
            <div className="function-keys">
              <button className="key clear" onClick={clearAll}>AC</button>
              <button className="key clear" onClick={clearDisplay}>C</button>
              <button className="key function" onClick={backspace}>⌫</button>
              <button className="key operator" onClick={() => handleOperator('÷')}>÷</button>
            </div>
            
            <div className="digit-keys">
              <button className="key digit" onClick={() => inputDigit('7')}>7</button>
              <button className="key digit" onClick={() => inputDigit('8')}>8</button>
              <button className="key digit" onClick={() => inputDigit('9')}>9</button>
              <button className="key operator" onClick={() => handleOperator('×')}>×</button>
              
              <button className="key digit" onClick={() => inputDigit('4')}>4</button>
              <button className="key digit" onClick={() => inputDigit('5')}>5</button>
              <button className="key digit" onClick={() => inputDigit('6')}>6</button>
              <button className="key operator" onClick={() => handleOperator('-')}>−</button>
              
              <button className="key digit" onClick={() => inputDigit('1')}>1</button>
              <button className="key digit" onClick={() => inputDigit('2')}>2</button>
              <button className="key digit" onClick={() => inputDigit('3')}>3</button>
              <button className="key operator" onClick={() => handleOperator('+')}>+</button>
              
              <button className="key digit" onClick={toggleSign}>±</button>
              <button className="key digit" onClick={() => inputDigit('0')}>0</button>
              <button className="key digit" onClick={inputDecimal}>.</button>
              <button className="key equal" onClick={performEquals}>=</button>
            </div>
          </div>
        </div>
      </div>
      
      {showHistory && (
        <div className="history-panel">
          <h3>History</h3>
          {history.length === 0 ? (
            <p>No calculations yet</p>
          ) : (
            <ul>
              {history.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          <button onClick={() => setHistory([])}>Clear History</button>
        </div>
      )}
    </div>
  );
};

export default Calculator;