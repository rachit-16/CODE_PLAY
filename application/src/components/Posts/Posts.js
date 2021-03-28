import React from 'react'
import Post from './Post/Post'
import styles from './Posts.module.css'
import SideBar from '../Sidebar/Sidebar'
import Auxillary from '../../hoc/Auxiliary/Auxillary'
const Posts = () => {
  return (
    <div className={styles.posts}>
      <SideBar />
      <div className={styles.Posts}>
      <Post />
    </div>
    </div>
      


   
  )
}

export default Posts
