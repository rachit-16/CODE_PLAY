import React, { Component } from 'react'
// import WordSearch from '../../components/Algorithms/WordSearchVisualiser/WordSearch'
import Auxillary from '../Auxiliary/Auxillary'
// import Practice from '../../components/Practice/Practice'
// import classes from './Layout.module.css'
// import About from '../../components/About/About'
import WordSearchAboutPage from '../../components/Algorithms/WordSearchVisualiser/wordSearchAbout'
import BackTrackingAboutPage from '../../components/Algorithms/backTracking/backTrackingAbout'
import DynamicProgrammingAboutPage from '../../components/Algorithms/dynamicProgramming/DPAbout'
import SearchingAlgorithmsAboutPage from '../../components/Algorithms/searchingAlgorithms/searchingAlgorithmsAbout'

class Layout extends Component {
  state = {
    //To handle Practice section
    showPractice: false
  }

  showPracticeToggleHandler = () => {
    console.log('clicked')
    this.setState((prevState) => {
      return {
        showPractice: !prevState.showPractice
      }
    })
    console.log(this.state)
  }
  render() {
    return (
      <Auxillary>
        {/* <WordSearch clicked={this.showPracticeToggleHandler} /> */}
        {/* <Practice show={this.state.showPractice} /> */}
        {/* <About /> */}
        {/* <WordSearchAboutPage /> */}
        {/* <BackTrackingAboutPage /> */}
        {/* <DynamicProgrammingAboutPage /> */}
        <SearchingAlgorithmsAboutPage />
      </Auxillary>
    )
  }
}
export default Layout
