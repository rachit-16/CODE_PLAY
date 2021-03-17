import React from 'react'
import styles from './Sidebar.module.css'

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
          <a href="/searching">Searching</a>
          <a href="/backtracking">Backtracking</a>
          <a href="/dynamic">Dynamic Programming</a>
          <a href="/Contact">Contact</a>
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
