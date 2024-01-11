import { React, useEffect, useState } from "react";
//import { Link } from "react-router-dom";

const StaffTimeTable = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8080/api/v1/staff/period-list")
      .then((response) => response.json())
      .then((json) => setData(json));
    setLoading(false);
  }, []);

  return (
    <div>
      <h1>StaffTimeTable</h1>
      {/* <Link to="/">Home</Link>
      <Link to="/file-data-reader">File-Data-Reader</Link> */}
      {JSON.stringify(data)}
    </div>
  );
};

export default StaffTimeTable;
