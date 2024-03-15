import { useState, lazy, Suspense } from 'react'
import classes from './Authentication.module.css'

const Login = lazy(() => import('./Login/Login'))
const Signup = lazy(() => import('./Signup/Signup'))

function Authentication() {
  const [mode, setMode] = useState('login')

  function switchAuthModeHandler() {
    setMode((prevMode) => (prevMode === 'login' ? 'signup' : 'login'))
  }

  let authElement = <Login />
  let switchBtnCaption = 'Create a new account'

  if (mode !== 'login') {
    authElement = <Signup />
    switchBtnCaption = 'Login instead'
  }

  return (
    <div className={classes.auth}>
      <h1>You must authenticate yourself first!</h1>

      <Suspense fallback={<p>Loading...</p>}>{authElement}</Suspense>

      <button className={classes.btn} onClick={switchAuthModeHandler}>
        {switchBtnCaption}
      </button>
    </div>
  )
}

export default Authentication
