import React from "react";
import styles from "./CodeSideBar.module.css";

import Editor from '../Editor/Editor'
const codeSideBar = (props) => {
  //console.log(code)
  console.log("props-", props);

  return (
    <div className={styles.Sidebar}>
      <h2>CODE</h2>
       <Editor mode="c_cpp" code={props.code}/>
       <button onClick={props.clicked}>Practice Code</button>
      
    </div>
  );
};

export default codeSideBar;
