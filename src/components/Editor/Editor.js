import React from "react";
// import { render } from "react-dom";
import AceEditor from "react-ace";
//import classes from './Editor.module.css'

import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";
import Auxillary from '../../hoc/Auxillary'

const editor = (props) => {
  function onChange(newValue) {
    console.log("change", newValue);
  }
  let readOnly=false;
  if(props.code)
  {
    readOnly=true
  }
  if(props.template)
  {
    
  }

  // Render editor
  return (
    <Auxillary>
      <p style={{color:"white"}}>{props.text}</p>
       <AceEditor 
    height={props.height}
    width={props.width}
      mode={props.mode}
       theme="twilight"
      readOnly={readOnly}
      defaultValue={props.code?props.code:props.template}
      name="UNIQUE_ID_OF_DIV"
     
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
      }}
    />

    </Auxillary>
   
    // document.getElementById("example")
  );
};

export default editor;
