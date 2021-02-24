import React from "react";
import styles from "./App.module.css";
// import Sidebar from '../../components/Sidebar/Sidebar.js'
// import Signup from '../../components/Signup/Signup.js'
// import LinearSearch from "../../components/Algorithms/searchingAlgorithms/LinearSearch/LinearSearch";
// import BinarySearch from "../../components/Algorithms/searchingAlgorithms/BinarySearch/BinarySearch";
// import WordSearch from '../../components/Algorithms/WordSearchVisualiser/WordSearch'
// import DynamicProgramming from "../../components/Algorithms/dynamicProgramming/DynamicProgramming";
import BackTracking from "../../components/Algorithms/backTracking/BackTracking";

function app() {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        {/* <Sidebar /> */}
        {/* <Signup /> */}
        {/* <LinearSearch /> */}
        {/* <BinarySearch /> */}
        {/* <WordSearch /> */}
        {/* <DynamicProgramming /> */}
        <BackTracking />
      </div>
    </div>
  );
}

export default app;
