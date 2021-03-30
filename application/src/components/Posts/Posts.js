import React, { Component } from 'react'
import axios from 'axios'
import Post from './Post/Post'
import styles from './Posts.module.css'
import SideBar from '../Sidebar/Sidebar'
import Spinner from '../Spinner/Spinner'
import { ImSearch } from 'react-icons/im'

class Posts extends Component {
  state = { posts: null }
  inputElement = undefined
  // mapping post's id --> idx
  postMap = new Map()

  componentDidMount() {
    this.inputElement = document.getElementById('searchText')
    this.inputElement.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const searchText = this.inputElement.value
        if (searchText !== '') {
          this.searchPost(searchText)
        }
      }
    })
    // fetch all posts
    axios
      .get('/getposts')
      .then((response) => {
        console.log('get all posts response:::', response.data)
        let posts = response.data.map((post, idx) => {
          this.postMap[post._id] = idx
          return (
            <Post
              key={idx}
              {...post}
              votingHandler={(id, voteMethod) =>
                this.votingHandler(id, voteMethod)
              }
            />
          )
        })
        this.setState({ posts: posts })
        console.log('map posts:::', this.state.posts)
      })
      .catch((error) => {
        console.log('get all posts error:::', error)
      })
  }

  votingHandler = (id, voteMethod) => {
    // console.log('upvote:::', id)
    // console.log(this.state)
    // console.log(this.postMap)
    axios
      .post(`/${voteMethod}/${id}`)
      .then((response) => {
        console.log(`${voteMethod} response:::`, response)
        let updatedPosts = [...this.state.posts]
        updatedPosts[this.postMap[id]] = (
          <Post
            key={this.postMap[id]}
            {...response.data}
            votingHandler={(id) => this.votingHandler(id)}
          />
        )
        this.setState({ posts: updatedPosts })
      })
      .catch((error) => {
        console.log('upvote error:::', error)
      })
  }

  searchPost = (searchText) => {
    axios
      .get('/getpost')
      .then((response) => {
        console.log('getpost response:::', response)
      })
      .catch((error) => {
        console.log('getpost error:::', error)
      })
  }

  createNewPost = (event) => {
    event.preventDefault()
    const newPostData = new FormData(event.target)
    console.log('new post data:::', event.target, newPostData)

    axios
      .post('/makepost', newPostData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        console.log('create post response:::', response.data)
      })
      .catch((error) => {
        console.log('create post error:::', error)
      })
  }

  render() {
    return (
      <div className={styles.Posts}>
        <div className={styles.container}>
          <SideBar />
          <div className={styles.posts}>
            {this.state.posts ? this.state.posts : <Spinner />}
          </div>
          <div className={styles.makePost}>
            <form onSubmit={(event) => this.createNewPost(event)}>
              <h3>Create New Post</h3>
              <div>
                <label htmlFor="newPostTitle">Title</label>
                <input type="text" name="newPostTitle" required />
              </div>
              <div>
                <label htmlFor="newPostContent">Content</label>
                <textarea name="newPostContent" required />
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
        <div className={styles.searchArea}>
          <input
            id="searchText"
            type="text"
            className={styles.input}
            name="searchText"
            placeholder="Search by title..."
            autoComplete="off"
          ></input>
          <ImSearch
            id="searchButton"
            size="1.5em"
            onClick={() => this.searchPosts(this.inputElement.value)}
          />
        </div>
      </div>
    )
  }
}

export default Posts
