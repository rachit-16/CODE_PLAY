import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Posts from '../../components/Posts/Posts'
import about from '../../components/About/About'
import LoginSignup from '../../components/LoginSignup/LoginSignup'
import SearchingAbout from '../../components/Algorithms/searchingAlgorithms/searchingAlgorithmsAbout'
import BacktrackingAbout from '../../components/Algorithms/WordSearchVisualiser/wordSearchAbout'
import DpAbout from '../../components/Algorithms/dynamicProgramming/DPAbout'
import BinarySearchLayout from '../../components/Algorithms/searchingAlgorithms/BinarySearch/BinarySearchLayout'
import LinearSearchLayout from '../../components/Algorithms/searchingAlgorithms/LinearSearch/LinearSearchLayout'
import WordSearchLayout from '../../components/Algorithms/WordSearchVisualiser/BacktrackingLayout'
const main = (props) => {
  return (
    <>
      {/* <Route path="/" exact component={LoginSignup} /> */}
      {/* ---------------CHANGE THIS ROUTE FOR POSTS---------------- */}
      <Route path="/" exact component={Posts} />
      <Route path="/about" exact component={about} />
      <Route path="/searching" exact component={SearchingAbout} />
      <Route path="/backtracking" exact component={BacktrackingAbout} />
      <Route path="/dp" exact component={DpAbout} />
      <Route
        path="/searching/binarySearch"
        exact
        component={BinarySearchLayout}
      />
      <Route
        path="/searching/linearSearch"
        exact
        component={LinearSearchLayout}
      />
      <Route
        path="/backtracking/wordSearch"
        exact
        component={WordSearchLayout}
      />

      {/* <Route path="/signup" exact component={signup}/>
        <Route path="/signup" exact component={signup}/>
        <Route path="/signup" exact component={signup}/>
        <Route path="/signup" exact component={signup}/>
        <Route path="/signup" exact component={signup}/>

        <Route path="/signup" exact component={signup}/>

        <Route path="/signup" exact component={signup}/>
        <Route path="/signup" exact component={signup}/>
    */}
    </>
  )
}
export default main
