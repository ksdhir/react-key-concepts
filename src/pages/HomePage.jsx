import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the Home page</p>
      <div>
        <Link to="/about">Go to About</Link>
      </div>
      <div>
        <Link to="/activity-4-1">
          Go to Activity 4.1: Building a Simple Calculator
        </Link>
      </div>
    </div>
  )
}

export default HomePage
