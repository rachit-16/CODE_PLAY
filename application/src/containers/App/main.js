import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import signup from '../../components/Signup/Signup'
import about from '../../components/About/About'
import SearchingAbout from '../../components/Algorithms/searchingAlgorithms/searchingAlgorithmsAbout'
import BacktrackingAbout from '../../components/Algorithms/WordSearchVisualiser/wordSearchAbout'
import DpAbout from '../../components/Algorithms/dynamicProgramming/DPAbout'
import BinarySearchLayout from '../../components/Algorithms/searchingAlgorithms/BinarySearch/BinarySearchLayout'
import LinearSearchLayout from '../../components/Algorithms/searchingAlgorithms/LinearSearch/LinearSearchLayout'
import WordSearchLayout from '../../components/Algorithms/WordSearchVisualiser/BacktrackingLayout'
const main=(props)=>{

return(
    <div>
        
        <Route path="/" exact component={signup}/>
        <Route path="/about" exact component={about}/>
        <Route path="/searching" exact component={SearchingAbout}/>
        <Route path="/backtracking" exact component={BacktrackingAbout}/>
        <Route path="/dp" exact component={DpAbout}/>
        <Route path="/searching/binarySearch" exact component={BinarySearchLayout}/>
        <Route path="/searching/linearSearch" exact component={LinearSearchLayout}/>
        <Route path="/backtracking/wordSearch" exact component={WordSearchLayout}/>
        
       {/* <Route path="/signup" exact component={signup}/>
        <Route path="/signup" exact component={signup}/>
        <Route path="/signup" exact component={signup}/>
        <Route path="/signup" exact component={signup}/>
        <Route path="/signup" exact component={signup}/>

        <Route path="/signup" exact component={signup}/>

        <Route path="/signup" exact component={signup}/>
        <Route path="/signup" exact component={signup}/>
    */} 
    
    </div>
)



}
export default main