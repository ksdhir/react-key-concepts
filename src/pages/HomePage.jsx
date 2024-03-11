import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <h1>Activites: React Key Concepts</h1>
      <p>
        This app includes activites solution given in React Key Concept Book.{' '}
        <br />
        Open the links to view the solutions.
      </p>
      <div>
        <Link to="/activity-4-1">
          Go to Activity 4.1: Building a Simple Calculator
        </Link>
      </div>
      <div>
        <Link to="/activity-4-2">
          Go to Activity 4.2: Enhancing the Calculator
        </Link>
      </div>
      <div>
        <Link to="/activity-5-1">
          Go to Activity 5.1: Showing a Conditional Error Message
        </Link>
      </div>

    </div>
  )
}

export default HomePage
