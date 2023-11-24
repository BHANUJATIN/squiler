import React, { useState } from "react";

import Editor from "@monaco-editor/react";

const CodeEditor = ({ setValue, value }) => {

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="40vh"
        width={`60vw`}
        language={"sql"}
        value={value}
        theme={'vs-dark'}
        defaultValue="//comment"
        onChange={(value) => setValue(value)}

      />
    </div>
  );
};
export default CodeEditor;