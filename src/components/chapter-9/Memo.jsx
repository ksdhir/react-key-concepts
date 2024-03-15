import classes from '../../components/chapter-9/Error'

import { useState } from 'react'
import Error from './Error'

const Memo = () => {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState()

  function updateEmailHandler(event) {
    setEnteredEmail(event.target.value)
  }

  function submitHandler(event) {
    event.preventDefault()

    if (!enteredEmail.endsWith('.com')) {
      setErrorMessage('Email must end with .com.')
    }
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={enteredEmail}
          onChange={updateEmailHandler}
        />
      </div>

      <Error message={errorMessage} />

      <button>Sign Up</button>
    </form>
  )
}

export default Memo
