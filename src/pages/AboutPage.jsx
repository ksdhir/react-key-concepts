import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page</p>
      <Link to="/">Go to Home</Link>
    </div>
  )
}

export default AboutPage
