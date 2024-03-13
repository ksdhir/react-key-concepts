import classes from './NewPost.module.css'
import { useState } from 'react'

function NewPost({ postingBlog }) {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [inProgress, setInProgress] = useState(false)

  function updateTitleHandler(event) {
    setEnteredTitle(event.target.value)
  }

  function submitHandler(event) {
    event.preventDefault()
    setInProgress(() => true)
    postingBlog(enteredTitle)
      .then((resp) => resp.json())
      .then((data) => {
        setInProgress(() => false)
        setEnteredTitle(() => '')
        console.log(data)
      })
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />
      </div>
      <button>{inProgress ? 'Saving...' : 'Save'}</button>
    </form>
  )
}

export default NewPost
