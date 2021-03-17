import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import classes from './AlgorithmDescriber.module.css'
import {Link} from 'react-router-dom'
const algorithmDescriber = (props) => (
  <div className={classes.AlgorithmDescriber}>
    <Sidebar />
    <div className={classes.container}>
      <div className={classes.content}>
        <h2>{props.heading}</h2>
        <p>{props.content}</p>
      </div>
      <div className={classes.buttons}>
        <Link to={props.visualizer}><button className={classes.visualizeButton}>Vizualize</button></Link>
        <button className={classes.practiceButton}>Practice</button>
      </div>
    </div>
  </div>
)
export default algorithmDescriber
