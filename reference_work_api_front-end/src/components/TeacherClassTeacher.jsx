import { React, useEffect, useState } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
// import Select from 'react-select';

const TeacherClassTeacher = () => {
  const staffNameLists = ["Saran", "Gowtham", "Jay Kumar", "Manoj"];
  const [staffName, setStaffName] = useState("Saran");
  const [staffDBData, setStaffDBData] = useState([]);
  const [error, setError] = useState(null);

  // const options = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];

  const base_URL = "http://localhost:8080/api/v1/staff/staff-list";

  /* Axios GET Request Staring Here! */

  useEffect(() => {
    axios
      .get(base_URL)
      .then((response) => {
        setStaffDBData(response.data);
        //setStaffDBData(staffDBData.concat (response.data))
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  /* Axios GET Request Ending Here! */

  if (error) return `Error: ${error.message}`;

  return (
    <div>
      {/* <Link to="/staffTimeSheets">Staff Time Sheets</Link>
      <Link to="/file-data-reader">File-Data-Reader</Link> */}
      <h2>TeacherClassTeacher List</h2>

      <table class="home-page-tbl">
        <tbody>
          <tr>
            <th>
              <label>
                Dummy Staff List :{" "}
                <select
                  className="staff-list-selection"
                  name="staff-list-selection"
                  value={staffName}
                  onChange={(e) => setStaffName(e.target.value)}
                >
                  {staffNameLists.map((stafflists, _index) => (
                    <option key={_index}>{stafflists}</option>
                  ))}
                </select>
              </label>
            </th>
            <th>
              <label>
                Staff List From DB :{" "}
                <select
                  className="staff-list-from-db"
                  name="staff-list-from-db"
                  value={staffDBData}
                  //onChange={(e) => setStaffDBData(e.target.value)}
                >
                  {staffDBData.map((e) => {
                    <option key={e.staffId}>{e.staffName}</option>;
                  })}
                </select>
              </label>
            </th>
            {/* <th>
              <label>
                Another One Example : <Select options={options} />
              </label>
            </th> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TeacherClassTeacher;
