import '../styles/Activity41.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Activity41 = () => {
  const [selectedOperator, setSelectedOperator] = useState('+')
  const [result, setResult] = useState(0)

  // numbers used
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)

  const add = (a, b) => {
    return Number(a) + Number(b)
  }

  const subtract = (a, b) => {
    return Number(a) - Number(b)
  }

  const multiply = (a, b) => {
    return Number(a) * Number(b)
  }

  const divide = (a, b) => {
    if (a === 0 || b === 0) return 0
    return Number(a) / Number(b)
  }

  // addition effect
  useEffect(() => {
    switch (selectedOperator) {
      case '+':
        setResult(() => add(number1, number2))
        break
      case '-':
        setResult(() => subtract(number1, number2))
        break
      case '*':
        setResult(() => multiply(number1, number2))
        break
      case '/':
        setResult(() => divide(number1, number2))
        break
      default:
        setResult(0)
    }
  }, [selectedOperator, number1, number2])

  return (
    <div>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
      <h1>Activity 4.2</h1>
      <p>Enhancing the Calculator</p>
      <div className="complete-block">
        <div className="sub-block">
          <input
            type="number"
            value={number1}
            onChange={(e) => {
              setNumber1(() => e.target.value)
            }}
          ></input>
          <select value={selectedOperator} onChange={(e) => {setSelectedOperator(() => e.target.value)}}>
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
          </select>
          <input
            type="number"
            value={number2}
            onChange={(e) => {
              setNumber2(() => e.target.value)
            }}
          ></input>
        </div>
        <div className='result-block'>
          <p>Result: {result}</p>
        </div>
      </div>
    </div>
  )
}

export default Activity41
