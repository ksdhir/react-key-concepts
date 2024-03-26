import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import useKeyEvent from '../hooks/useKeyEvent'

const Activity111 = function () {
  const { state } = useLocation()

  const pressedKey = useKeyEvent(['s', 'c', 'p'])

  let output = ''

  if (pressedKey === 's') {
    output = '😊'
  } else if (pressedKey === 'c') {
    output = '😭'
  } else if (pressedKey === 'p') {
    output = '🎉'
  }

  return (
    <div>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
      <h1>{state.pageName}</h1>
      <p>{state.description}</p>
      {/* container */}
      <section>
        <main>
          <h1>Press a key!</h1>
          <p>
            Supported keys: <kbd>s</kbd>, <kbd>c</kbd>, <kbd>p</kbd>
          </p>
          <p id="output">{output}</p>
        </main>
      </section>
    </div>
  )
}

export default Activity111
