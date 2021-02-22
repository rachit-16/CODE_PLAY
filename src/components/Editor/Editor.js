import React from "react";
// import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

const editor = () => {
  function onChange(newValue) {
    console.log("change", newValue);
  }

  // Render editor
  return (
    <AceEditor
      mode="javascript"
      theme="twilight"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
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
