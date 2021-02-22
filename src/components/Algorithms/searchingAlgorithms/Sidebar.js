import React from "react";
import styles from "./Sidebar.module.css";

import Editor from '../../Editor/Editor'
const sidebar = (props) => {
  //console.log(code)
  console.log("props-", props);

  return (
    <div className={styles.Sidebar}>
      <h2>CODE</h2>
       <Editor code={props.code}/>
      
    </div>
  );
};

export default sidebar;
