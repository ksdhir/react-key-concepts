import classes from '../../styles/Chapter9.module.css'

import { Link } from 'react-router-dom'
import { useEffect, memo } from 'react'

function Error({ message }) {
  console.log('bingo')

  useEffect(() => {
    console.log('did it run?')
  }, [])

  if (!message) {
    console.log(message)
    return null
  }

  return <p className={classes.error}>{message}</p>
}

export default (Error)

// export default memo(Error)
