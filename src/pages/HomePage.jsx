import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the Home page</p>
      <Link to="/about">Go to About</Link>
    </div>
  )
}

export default HomePage
