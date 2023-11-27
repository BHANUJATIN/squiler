
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-xcode";

const SqlEditor = ({ setValue, value }) => {

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <AceEditor
    mode="mysql"
    theme="xcode"
    width="100vw"
    height="40vh"
    onChange={(value) => setValue(value)}
    value={value}
    editorProps={{ $blockScrolling: true }}
  />
    </div>
  );
};
export default SqlEditor;