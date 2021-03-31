import React, { Component } from 'react'
import axios from 'axios'
import Post from './Post/Post'
import SideBar from '../Sidebar/Sidebar'
import Spinner from '../Spinner/Spinner'
import { ImSearch } from 'react-icons/im'
import styles from './Posts.module.css'

class Posts extends Component {
  state = { posts: null, noPosts: true }
  inputElement = undefined
  user = null
  // mapping post's id --> idx
  postMap = new Map()

  componentDidMount() {
    // get search text
    this.inputElement = document.getElementById('searchText')
    this.inputElement.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const searchText = this.inputElement.value
        if (searchText !== '') {
          this.searchPosts(searchText)
        }
      }
    })

    // fetch all posts
    axios
      .get('/getposts')
      .then((response) => {
        console.log('get all posts response:::', response.data)

        let posts =
          response.data.length === 0 ? (
            <p className={styles.noPostIndicator}>No posts yet!</p>
          ) : (
            response.data.map((post, idx) => {
              this.postMap[post._id] = idx
              return (
                <Post
                  key={post._id}
                  {...post}
                  votingHandler={(id, voteMethod) =>
                    this.votingHandler(id, voteMethod)
                  }
                />
              )
            })
          )
        this.setState(
          {
            posts: posts,
            noPosts: response.data.length === 0
          },
          () => {
            console.log('fetch state:::', this.state)
          }
        )
        // console.log('map posts:::', this.state.posts)
      })
      .catch((error) => {
        console.log('get all posts error:::', error)
      })

    // fetch current user
    const loginToken = localStorage.getItem('loginToken')
    console.log('login token:::', loginToken)
    axios
      .get(`/getUser/${loginToken}`)
      .then((response) => {
        console.log('user:::', response.data)
      })
      .catch((error) => {
        console.log('user error:::', error)
      })
  }

  votingHandler = (id, voteMethod) => {
    // console.log('upvote:::', id)
    // console.log(this.state)
    // console.log(this.postMap)
    const loginToken = localStorage.getItem('loginToken')
    // console.log('Voting-', loginToken)
    const temp = { name: 'naman' }
    axios
      .post(`/${voteMethod}/${id}`, temp, {
        headers: {
          Authorization: `Bearer ${loginToken}`
        }
      })
      .then((response) => {
        console.log(`${voteMethod} response:::`, response)
        const idx = this.postMap[id]
        let updatedPosts = [...this.state.posts]
        updatedPosts[idx] = (
          <Post
            key={id}
            {...response.data}
            votingHandler={(id, voteMethod) =>
              this.votingHandler(id, voteMethod)
            }
          />
        )

        this.setState(
          {
            posts: updatedPosts
          },
          () => {
            console.log('voting state:::', this.state)
          }
        )
      })
      .catch((error) => {
        console.log('upvote error:::', error)
      })
  }

  searchPosts = (searchText) => {
    axios
      .get(`/getposts/${searchText}`)
      .then((response) => {
        console.log('getposts by title response:::', response.data)
        let posts =
          response.data.length === 0 ? (
            <p className={styles.noPostIndicator}>No posts found!</p>
          ) : (
            response.data.map((post) => (
              <Post
                key={post._id}
                {...post}
                votingHandler={(id, voteMethod) =>
                  this.votingHandler(id, voteMethod)
                }
              />
            ))
          )

        this.setState({ posts })
      })
      .catch((error) => {
        console.log('getpost error:::', error)
      })
  }

  createNewPost = (event) => {
    event.preventDefault()
    const newPostData = new FormData(event.target)
    // console.log('event', newPostData)
    const loginToken = localStorage.getItem('loginToken')
    // console.log('Logut me token-', loginToken)

    axios
      .post('/makepost', newPostData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${loginToken}`
        }
      })
      .then((response) => {
        console.log('create post response:::', response.data)

        const newPost = (
          <Post
            key={response.data._id}
            {...response.data}
            votingHandler={(id, voteMethod) =>
              this.votingHandler(id, voteMethod)
            }
          />
        )
        let updatedPosts = null

        if (this.state.noPosts) {
          updatedPosts = []
          updatedPosts.push(newPost)
        } else {
          updatedPosts = [...this.state.posts]
          updatedPosts.unshift(newPost)
        }
        this.setState(
          {
            posts: updatedPosts,
            noPosts: false
          },
          () => {
            console.log('makepost state:::', this.state)
          }
        )
      })
      .catch((error) => {
        console.log('create post error:::', error)
      })
  }

  render() {
    console.log('render state:::', this.state)
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
                <input
                  type="text"
                  name="newPostTitle"
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label htmlFor="newPostContent">Content</label>
                <textarea name="newPostContent" required />
              </div>
              <button type="submit">Submit</button>
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
