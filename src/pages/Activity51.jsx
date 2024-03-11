import '../styles/Activity51.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Activity51 = function () {
  const [isValidEmail, setIsValidEmail] = useState(true)

  function handleSubmit(e) {
    e.preventDefault()
    const email = e.target.email.value

    if (!email.includes('@')) {
      setIsValidEmail(() => false)
    }
  }

  return (
    <div>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
      <h1>Activity 5.1</h1>
      <p>Showing a Conditional Error Message</p>
      <div className="complete-block">
        {/* form block */}
        <form className="form-block" onSubmit={handleSubmit}>
          <label htmlFor="email">Your email</label>
          <input type="text" name="email" id="email" />
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
        {!isValidEmail && <div>Invalid email address entered!</div>}
      </div>
    </div>
  )
}

export default Activity51
