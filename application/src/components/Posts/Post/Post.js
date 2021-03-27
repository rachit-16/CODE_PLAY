import React from 'react'
import { IconContext } from 'react-icons'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi'
import styles from './Post.module.css'

const Post = () => {
  return (
    <div className={styles.Post}>
      <div className={styles.postBody}>
        <div className={styles.postHeader}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.author}>- Author</p>
        </div>
        <p className={styles.postContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={styles.postFooter}>
        <IconContext.Provider
          value={{ size: '1.3em', style: { fill: 'blue' } }}
        >
          <div className={styles.icons}>
            <div className={styles.upvote}>
              <FiThumbsUp />
              <p className={styles.upvoteCount}>111</p>
            </div>
            <div className={styles.downvote}>
              <FiThumbsDown />
              <p className={styles.downvoteCount}>22</p>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default Post
