import React, { useState } from "react";

const FileDataReader = () => {

    const [filePath, setFilePath] = useState('')

  return (
    <div>
      <h1>FileDataReader</h1>
      {/* <Link to="/">Home</Link>
        <Link to="/staffTimeSheets">Staff Time Sheets</Link> */}
      <label htmlFor="file-path">
        Enter Your File Path :
        <input 
        type="text" 
        className="get-file-path" 
        id="file-path" 
        onChange={(e) => setFilePath(e.target.value)}
        />
      </label>
    </div>
  );
};

export default FileDataReader;
