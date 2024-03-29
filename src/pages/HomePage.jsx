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
      <div>
        <Link to="/activity-5-2">
          Go to Activity 5.2: Outputting a List of Products
        </Link>
      </div>
      <div>
        <Link to="/activity-7-1">
          Go to Activity 7.1: Extract User Input Values
        </Link>
      </div>
      <div>
        <Link to="/activity-7-2">Go to Activity 7.2: Add a Side-Drawer</Link>
      </div>
      <div>
        <Link to="/chapter-8">Go to Chapter 8: Understanding Hooks</Link>
      </div>
      <div>
        <Link
          to="/activity-8-1"
          state={{
            pageName: 'Activity 8.1',
            description: 'Handling Side Effects',
          }}
        >
          Go to Activity 8.1: Handling Side Effects
        </Link>
      </div>
      <div>
        <Link
          to="/chapter-9"
          state={{
            pageName: 'Chapter 9',
            description: 'React and Optimization: memo',
          }}
        >
          Go to Chapter 9: React and Optimization: memo
        </Link>
      </div>
      <div>
        <Link
          to="/activity-9-1"
          state={{
            pageName: 'Activity 9.1',
            description: 'Optimize an Existing App',
          }}
        >
          Go to Activity 9.1: Optimize an Existing App
        </Link>
      </div>
      <div>
        <Link
          to="/activity-10-1"
          state={{
            pageName: 'Activity 10.1',
            description: 'Migrating an App to Context API',
          }}
        >
          Go to Activity 10.1: Migrating an App to Context API
        </Link>
      </div>
      <div>
        <Link
          to="/activity-10-2"
          state={{
            pageName: 'Activity 10.2',
            description: 'Replacing useState() from useReducer()',
          }}
        >
          Go to Activity 10.2: Replacing useState() from useReducer()
        </Link>
      </div>
      <div>
        <Link
          to="/activity-11-1"
          state={{
            pageName: 'Activity 11.1',
            description: 'Build a Custom Keyboard Input Hook',
          }}
        >
          Go to Activity 11.1: Build a Custom Keyboard Input Hook
        </Link>
      </div>
    </div>
  )
}

export default HomePage
