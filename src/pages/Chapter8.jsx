import { useState } from 'react'
import { Link } from 'react-router-dom'

import Alert from '../components/chapter-8/Alert'

const Chapter8 = () => {
  const [showAlert, setShowAlert] = useState(false)

  function showAlertHandler() {
    // state updating is done by passing a function to setShowAlert
    // because the new state depends on the previous state (it's the opposite)
    setShowAlert((isShowing) => !isShowing)
  }

  return (
    <div>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
      <h1>Chapter 8</h1>
      <div>
      <p>When to use return in useEffect</p>
        <button onClick={showAlertHandler}>
          {showAlert ? 'Hide' : 'Show'} Alert
        </button>
        {showAlert && <Alert />}
      </div>
    </div>
  )
}

export default Chapter8
