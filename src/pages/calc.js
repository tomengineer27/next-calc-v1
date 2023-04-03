import React, { useState, useEffect } from 'react'
import styles from '../styles/calc.module.css'

function calc() {
  const [num1, setNum1] = useState([])
  const [num2, setNum2] = useState([])
  const [op, setOp] = useState('')

  const addToNum1 = (num) => {
    setNum1([...num1, num]);
    document.getElementById('calcVisorNum').value = num1.join('');
  }

  useEffect(() => {
    document.getElementById('calcVisorNum').value = num1.join('');
  }, [num1])

  const addToNum2 = (num) => {
    setNum2([...num2, num]);
    document.getElementById('calcVisorNum').value = num2.join('');
  }

  useEffect(() => {
    document.getElementById('calcVisorNum').value = num2.join('')
  }, [num2])

  const operation = (op) => {
    document.getElementById('numpanel2').className = styles.numpanel2;
    document.getElementById('numpanel1').className = styles.unshow;
    document.getElementById('calcVisorNum').value = num2.join('');
    disableOps()
    setNum2([]);
    setOp(op);
  }

  const disableOps = () => {
    document.getElementById('sum').setAttribute("disabled", "")
    document.getElementById('sub').setAttribute("disabled", "")
    document.getElementById('mul').setAttribute("disabled", "")
    document.getElementById('div').setAttribute("disabled", "")
    document.getElementById('res').removeAttribute("disabled", "")
  }

  const operate = (num1, num2, op) => {
    const number1 = Number(num1.join(''))
    const number2 = Number(num2.join(''))
    let result = 0;
    if (op === '+') {result = number1 + number2}
    else if (op === '-') {result = number1 - number2}
    else if (op === '*') {result = number1 * number2}
    else if (op === '/') {result = number1 / number2}
    document.getElementById('calcVisorNum').value = result;
    document.getElementById('calcVisorNum').style.color = "blue"
  }

  return (
    <div className={styles.calc}>
      <div className={styles.calcVisor}>
        <input className={styles.calcVisorNum} id="calcVisorNum" type="text" readOnly />
      </div>
      <div className={styles.panelCont}>
        <div className={styles.numpanel1} id='numpanel1'>
          <button className={styles.numPanelBtn} onClick={()=>{addToNum1(1)}}>1</button>
          <button className={styles.numPanelBtn} onClick={()=>{addToNum1(2)}}>2</button>
          <button className={styles.numPanelBtn} onClick={()=>{addToNum1(3)}}>3</button>
          <button className={styles.numPanelBtn} onClick={()=>{addToNum1(4)}}>4</button>
          <button className={styles.numPanelBtn} onClick={()=>{addToNum1(5)}}>5</button>
          <button className={styles.numPanelBtn} onClick={()=>{addToNum1(6)}}>6</button>
          <button className={styles.numPanelBtn} onClick={()=>{addToNum1(7)}}>7</button>
          <button className={styles.numPanelBtn} onClick={()=>{addToNum1(8)}}>8</button>
          <button className={styles.numPanelBtn} onClick={()=>{addToNum1(9)}}>9</button>
          <button className={styles.numPanelBtn} onClick={()=>{addToNum2(0)}}>0</button>
        </div>
        <div className={styles.unshow} id='numpanel2'>
          <button className={styles.numPanelBtn} onClick={()=>{addToNum2(1)}}>1</button>
          <button className={styles.numPanelBtn} onClick={()=>{addToNum2(2)}}>2</button>
          <button className={styles.numPanelBtn} onClick={()=>{addToNum2(3)}}>3</button>
          <button className={styles.numPanelBtn} onClick={()=>{addToNum2(4)}}>4</button>
          <button className={styles.numPanelBtn} onClick={()=>{addToNum2(5)}}>5</button>
          <button className={styles.numPanelBtn} onClick={()=>{addToNum2(6)}}>6</button>
          <button className={styles.numPanelBtn} onClick={()=>{addToNum2(7)}}>7</button>
          <button className={styles.numPanelBtn} onClick={()=>{addToNum2(8)}}>8</button>
          <button className={styles.numPanelBtn} onClick={()=>{addToNum2(9)}}>9</button>
          <button className={styles.numPanelBtn} onClick={()=>{addToNum2(0)}}>0</button>
        </div>
        <div className={styles.calcOpPanel}>
          <button className={styles.cleanBtn} onClick={() => location.reload()}>clean</button>
          <button id='sum' className={styles.opPanelBtn} onClick={()=>{operation("+")}}>+</button>
          <button id='sub' className={styles.opPanelBtn} onClick={()=>{operation("-")}}>-</button>
          <button id='mul' className={styles.opPanelBtn} onClick={()=>{operation("*")}}>x</button>
          <button id='div' className={styles.opPanelBtn} onClick={()=>{operation("/")}}>/</button>
          <button id='res' className={styles.opPanelBtn} disabled="" onClick={() => operate(num1, num2, op)}>=</button>
        </div>
      </div>
    </div>
  )
}

export default calc