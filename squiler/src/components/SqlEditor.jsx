import React from "react";

import Editor from "@monaco-editor/react";

const SqlEditor = ({ setValue, value }) => {

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="40vh"
        width="100%"
        language={"sql"}
        value={value}
        theme={'vs-dark'}
        defaultValue="//comment"
        onChange={(value) => setValue(value)}
      />
    </div>
  );
};
export default SqlEditor;