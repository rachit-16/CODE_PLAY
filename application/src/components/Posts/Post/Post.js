import React from 'react'
import axios from 'axios'
import { IconContext } from 'react-icons'
// import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi'
import styles from './Post.module.css'

const post = (props) => {
  return (
    <div id={props._id} className={styles.Post}>
      <div className={styles.postBody}>
        <div className={styles.postHeader}>
          <h4 className={styles.title}>{props.title}</h4>
          <p className={styles.author}>- {props.writtenBy}</p>
        </div>
        <p className={styles.postContent}>{props.body}</p>
      </div>
      <div className={styles.postFooter}>
        <IconContext.Provider value={{ size: '1.3em' }}>
          <div className={styles.icons}>
            <div className={styles.upvote}>
              <FiThumbsUp
                onClick={() => props.votingHandler(props._id, 'upvote')}
              />
              <p className={styles.upvoteCount}>{props.upvote}</p>
            </div>
            <div className={styles.downvote}>
              <FiThumbsDown
                onClick={() => props.votingHandler(props._id, 'downvote')}
              />
              <p className={styles.downvoteCount}>{props.downvote}</p>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default post
