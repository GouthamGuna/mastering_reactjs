import React, { useState } from "react";
import axios from "axios";

const FileDataReader = () => {
  const [filePath, setFilePath] = useState("");
  const [fileContent, setFileContent] = useState("");

  const base_URL =
    "http://localhost:8080/api/v1/util/data-reader?filePath=" + filePath;

  /* Axios GET Request Staring Here! */

  const submitFilePath = () => {
    axios.get(base_URL).then((res) => {
      setFileContent(JSON.stringify(res.data));
    });
  };

  /* Axios GET Request Ending Here! */

  /*  const getResultFileContent = () => {
    let pushHtml = document.querySelector('#result-appender');
    let inputElement = document.createElement("textarea");
    inputElement.setAttribute("value", fileContent);
    pushHtml.appendChild(inputElement);
  } */

  return (
    <div>
      <h1>FileDataReader</h1>
      {/* <Link to="/">Home</Link>
        <Link to="/staffTimeSheets">Staff Time Sheets</Link> */}
      <div>
        <p>
          <label htmlFor="file-path">Enter Your File Path : </label>
        </p>
        <textarea
          type="text"
          id="file-path"
          onChange={(e) => setFilePath(e.target.value)}
        />
        <p>
          <button onClick={submitFilePath} className="file-reader-submit-btn">
            Submit
          </button>
        </p>
      </div>
      <div>
        <p>
          <label>Result :</label>
        </p>
        <textarea cols="30" rows="10" value={fileContent} readOnly />
      </div>
    </div>
  );
};

export default FileDataReader;
