import { useState, lazy, Suspense } from 'react'

const DateCalculator = lazy(() => import('./DateCalculator'))

function App() {
  const [showDateCalc, setShowDateCalc] = useState(false)

  function openDateCalcHandler() {
    setShowDateCalc(true)
  }

  return (
    <>
      <p>This app might be doing all kinds of things.</p>

      <p>
        But you can also open a calculator which calculates the difference
        between two dates.
      </p>

      <button onClick={openDateCalcHandler}>Open Calculator</button>

      <Suspense fallback={<p>Loading...</p>}>
        {showDateCalc && <DateCalculator />}
      </Suspense>
    </>
  )
}

export default App
