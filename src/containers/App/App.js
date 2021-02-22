import React from "react";
import styles from "./App.module.css";
// import Sidebar from '../../components/Sidebar/Sidebar.js'
// import Signup from '../../components/Signup/Signup.js'
import LinearSearch from "../../components/Algorithms/searchingAlgorithms/LinearSearch/LinearSearch";
import WordSearch from '../../components/Algorithms/WordSearchVisualiser/WordSearch'
// import BinarySearch from "../../components/Algorithms/searchingAlgorithms/BinarySearch/BinarySearch";

function app() {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        {/* <Sidebar /> */}
        {/* <Signup /> */}
        <WordSearch />
        {/* <BinarySearch /> */}
      </div>
    </div>
  );
}

export default app;
