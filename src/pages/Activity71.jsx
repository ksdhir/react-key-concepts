import '../styles/Activity71.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Form from '../components/activity-7-1/Form'

const Activity71 = function () {
 


  return (
    <div>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
      <h1>Activity 7.1</h1>
      <p>Extract User Input Values</p>
      <div>
        <Form />
      </div>
    </div>
  )
}

export default Activity71
