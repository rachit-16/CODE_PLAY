import React, { Component } from 'react'
import { IconContext } from 'react-icons'
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi'
import styles from './Post.module.css'

class Post extends Component {
  state = {
    id: null,
    upvotedBy: [],
    downvotedBy: []
  }

  render() {
    return (
      <div id={this.props._id} className={styles.Post}>
        <div className={styles.postBody}>
          <div className={styles.postHeader}>
            <h4 className={styles.title}>{this.props.title}</h4>
            <p className={styles.author}>- {this.props.writtenBy}</p>
          </div>
          <p className={styles.postContent}>{this.props.body}</p>
        </div>
        <div className={styles.postFooter}>
          <IconContext.Provider value={{ size: '1.3em' }}>
            <div className={styles.icons}>
              <div className={styles.upvote}>
                <FiThumbsUp
                  onClick={() =>
                    this.props.votingHandler(this.props._id, 'upvote')
                  }
                  fill={this.props.isUpvoted ? '#0962de' : '#161616'}
                />
                <p className={styles.upvoteCount}>{this.props.upvote}</p>
              </div>
              <div className={styles.downvote}>
                <FiThumbsDown
                  onClick={() =>
                    this.props.votingHandler(this.props._id, 'downvote')
                  }
                  fill={this.props.isDownvoted ? '#0962de' : '#161616'}
                />
                <p className={styles.downvoteCount}>{this.props.downvote}</p>
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    )
  }
}

export default Post
