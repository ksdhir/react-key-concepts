import { useState, useEffect, useCallback } from 'react'

function Alert() {
  const x = false
  const [enteredEmail, setEnteredEmail] = useState('')

  const [enteredPassword, setEnteredPassword] = useState('')

  function updateEmailHandler(event) {
    setEnteredEmail(event.target.value)
  }

  function updatePasswordHandler(event) {
    setEnteredPassword(event.target.value)
  }

  // instead of this 
  // function validateEmail () {
  //   if (!enteredEmail.includes('@')) {
  //     console.log('Invalid email!')
  //   }
  // }

  // use this -> useCallback as it only gets triggered when dependency changes
  const validateEmail = useCallback(
    function () {
      if (!enteredEmail.includes('@')) {
        console.log('Invalid email!')
      }
    },
    [enteredEmail]
  )

  useEffect(
    function () {
      console.log('insdie use effect')
      validateEmail()
    },
    [validateEmail]
  )

  return (
    <form>
      <div>
        <label>Email</label>

        <input type="email" onChange={updateEmailHandler} />
      </div>

      <div>
        <label>Password</label>

        <input type="password" onChange={updatePasswordHandler} />
      </div>

      <button>Save</button>
    </form>
  )
}

export default Alert
