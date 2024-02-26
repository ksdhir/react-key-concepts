import '../styles/Activity41.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Activity41 = () => {
  const [addition, setAddition] = useState(0)
  const [subtraction, setSubtraction] = useState(0)
  const [multiplication, setMultiplication] = useState(0)
  const [division, setDivision] = useState(0)

  // numbers used
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [number3, setNumber3] = useState(0)
  const [number4, setNumber4] = useState(0)
  const [number5, setNumber5] = useState(0)
  const [number6, setNumber6] = useState(0)
  const [number7, setNumber7] = useState(0)
  const [number8, setNumber8] = useState(0)

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
    setAddition(() => add(number1, number2))
  }, [number1, number2])

  // subtraction effect
  useEffect(() => {
    setSubtraction(() => subtract(number3, number4))
  }, [number3, number4])

  // multiplication effect
  useEffect(() => {
    setMultiplication(() => multiply(number5, number6))
  }, [number5, number6])

  // division effect
  useEffect(() => {
    setDivision(() => divide(number7, number8))
  }, [number7, number8])

  return (
    <div>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
      <h1>Activity 4.1</h1>
      <p>Building a Simple Calculator</p>
      <div className="complete-block">
        <div className="sub-block">
          <input
            type="number"
            value={number1}
            onChange={(e) => {
              setNumber1(() => e.target.value)
            }}
          ></input>
          <p>+</p>
          <input
            type="number"
            value={number2}
            onChange={(e) => {
              setNumber2(() => e.target.value)
            }}
          ></input>
          <p>=</p>
          <p>{addition}</p>
        </div>
        <div className="sub-block">
          <input
            type="number"
            value={number3}
            onChange={(e) => {
              setNumber3(() => e.target.value)
            }}
          ></input>
          <p>-</p>
          <input
            type="number"
            value={number4}
            onChange={(e) => {
              setNumber4(() => e.target.value)
            }}
          ></input>
          <p>=</p>
          <p>{subtraction}</p>
        </div>
        <div className="sub-block">
          <input
            type="number"
            value={number5}
            onChange={(e) => {
              setNumber5(() => e.target.value)
            }}
          ></input>
          <p>*</p>
          <input
            type="number"
            value={number6}
            onChange={(e) => {
              setNumber6(() => e.target.value)
            }}
          ></input>
          <p>=</p>
          <p>{multiplication}</p>
        </div>
        <div className="sub-block">
          <input
            type="number"
            value={number7}
            onChange={(e) => {
              setNumber7(() => e.target.value)
            }}
          ></input>
          <p>/</p>
          <input
            type="number"
            value={number8}
            onChange={(e) => {
              setNumber8(() => e.target.value)
            }}
          ></input>
          <p>=</p>
          <p>{division}</p>
        </div>
      </div>
    </div>
  )
}

export default Activity41
