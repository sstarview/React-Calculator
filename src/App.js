import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

function App() {
  const [data, setData] = useState('0');

  const handleClick = (e) => {
    const { value } = e.target;
    switch (value) {
      case 'clear':
        setData('0');
        break;
      default:
        setData(data + value);
        break;
    }
  };

  const solve = () => {
    let answer = evaluate(data);
    setData(answer);
  };

  return (
    // can use custom button for code reusability
    // but we have to type as many times anyway
    <div className='App'>
      <h1>Simple Calculator</h1>

      <div className='container'>
        <div id='display' className='row'>
          <p id='display-number'>{data}</p>
        </div>

        <div className='row'>
          <button id='clear' onClick={handleClick} value='clear'>
            CLEAR
          </button>
          <button id='sign' value='+/-'>
            +/-
          </button>
          <button id='divide' onClick={handleClick} value='/'>
            ÷
          </button>
        </div>

        <div className='row'>
          <button id='num7' onClick={handleClick} value='7'>
            7
          </button>
          <button id='num8' onClick={handleClick} value='8'>
            8
          </button>
          <button id='num9' onClick={handleClick} value='9'>
            9
          </button>
          <button id='multiply' onClick={handleClick} value='*'>
            ×
          </button>
        </div>

        <div className='row'>
          <button id='num4' onClick={handleClick} value='4'>
            4
          </button>
          <button id='num5' onClick={handleClick} value='5'>
            5
          </button>
          <button id='num6' onClick={handleClick} value='6'>
            6
          </button>
          <button id='subtract' onClick={handleClick} value='-'>
            -
          </button>
        </div>

        <div className='row'>
          <button id='num1' onClick={handleClick} value='1'>
            1
          </button>
          <button id='num2' onClick={handleClick} value='2'>
            2
          </button>
          <button id='num3' onClick={handleClick} value='3'>
            3
          </button>
          <button id='add' onClick={handleClick} value='+'>
            +
          </button>
        </div>

        <div className='row'>
          <button id='num0' onClick={handleClick} value='0'>
            0
          </button>
          <button id='decimal' onClick={handleClick} value='.'>
            .
          </button>
          <button id='solve' onClick={solve} value='='>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
