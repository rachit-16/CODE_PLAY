import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import classes from './AlgorithmDescriber.module.css'

const algorithmDescriber = (props) => (
  <div className={classes.AlgorithmDescriber}>
    <Sidebar />
    <div className={classes.container}>
      <div className={classes.content}>
        <h2>{props.heading}</h2>
        <p>{props.content}</p>
      </div>
      <div className={classes.buttons}>
        <button className={classes.visualizeButton}>Vizualize</button>
        <button className={classes.practiceButton}>Practice</button>
      </div>
    </div>
  </div>
)
export default algorithmDescriber
