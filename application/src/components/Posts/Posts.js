import React from 'react'
import Post from './Post/Post'
import styles from './Posts.module.css'

const Posts = () => {
  return (
    <div className={styles.Posts}>
      <Post />
    </div>
  )
}

export default Posts
