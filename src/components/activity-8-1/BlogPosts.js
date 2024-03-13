import classes from './BlogPosts.module.css'

function BlogPosts({ posts }) {
  return (
    <ul className={classes.posts}>
      {posts.map((post, idx) => {
        return <li key={idx}>{post.title}</li>
      })}
    </ul>
  )
}

export default BlogPosts
