import React from 'react'
import styles from './Sidebar.module.css'
import {Link} from 'react-router-dom'

const sidebar = () => {
  const openNav = () => {
    document.getElementById('mySidebar').style.width = '250px'
    document.getElementById('main').style.marginLeft = '250px'
  }

  const closeNav = () => {
    document.getElementById('mySidebar').style.width = '0'
    document.getElementById('main').style.marginLeft = '0'
  }

  return (
    <div>
      <div id="mySidebar" className={styles.Sidebar}>
        <button className={styles.closebtn} onClick={closeNav}>
          x
        </button>
        <div className={styles.main}>
          <Link to="/searching">Searching</Link>
          <Link to="/backtracking">Backtracking</Link>
          <Link to="/dp">Dynamic Programming</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>

      <div id="main" className={styles.main}>
        <button className={styles.openbtn} onClick={openNav}>
          ☰
        </button>
      </div>
    </div>
  )
}

export default sidebar
