import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import NewPost from '../components/activity-8-1/NewPost'
import BlogPosts from '../components/activity-8-1/BlogPosts'

const Activity81 = function () {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(result => result.json()).then(data => {
      setPosts((prev) => prev.concat(data))
    })
  }, [])


  // posting result

  const postingBlog = function (postTitle) {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: postTitle,
        body: '',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }



  return (
    <div>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
      <h1>Activity 8..1</h1>
      <p>Building a Basic Blog</p>
      {/* container */}
      <section>
        <NewPost postingBlog={postingBlog} />
        <BlogPosts posts={posts} />
      </section>
    </div>
  )
}

export default Activity81
