import classes from './Form.module.css'

import { useReducer } from 'react'
import formReducer from '../../../router/FormReducer'

const initialState = {
  email: '',
  isEmailValid: false,
  password: '',
  isPasswordValid: false,
}

function Form() {
  const [state, dispatch] = useReducer(formReducer, initialState)

  function changeEmailHandler(event) {
    const value = event.target.value
    dispatch({ type: 'set_email', email: value })
  }

  function changePasswordHandler(event) {
    const value = event.target.value
    dispatch({ type: 'set_password', password: value })
  }

  function submitFormHandler(event) {
    event.preventDefault()

    const formIsValid = state.isEmailValid && state.isPasswordValid
    if (!formIsValid) {
      alert('Invalid form inputs!')
      return
    }

    console.log('Good job!')
    console.log(state)
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" onChange={changeEmailHandler} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={changePasswordHandler} />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Form
