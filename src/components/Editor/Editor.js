import React from "react";
// import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

const editor = (props) => {
  function onChange(newValue) {
    console.log("change", newValue);
  }

  // Render editor
  return (
    <AceEditor
      mode="c_cpp"
      theme="twilight"
      readOnly="true"
      defaultValue={props.code}
      name="UNIQUE_ID_OF_DIV"
     
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
      }}
    />
    // document.getElementById("example")
  );
};

export default editor;
