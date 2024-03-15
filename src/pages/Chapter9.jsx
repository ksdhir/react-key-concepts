import { Link } from 'react-router-dom'
import { useState } from 'react'
import Memo from '../components/chapter-9/Memo'
import UseMemoHook from '../components/chapter-9/useMemoHook'

// import classes from "../styles/Chapter9.module.css"

const Chapter9 = () => {
  const [example, setExample] = useState('')

  return (
    <div>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
      <h1>Chapter 9</h1>
      <div>
        <p>React and Optimization: memo, useMemo</p>
        <section>
          {example === '' && <p>Click Button to load Examples</p>}
          <div>
            <button
              onClick={() => {
                setExample(() => 'memo')
              }}
            >
              Memo Example
            </button>
            {example === 'memo' && <Memo />}
          </div>
          <div>
            <button
              onClick={() => {
                setExample(() => 'useMemo')
              }}
            >
              use Memo Hook Example
            </button>
            {example === 'useMemo' && <UseMemoHook />}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Chapter9
