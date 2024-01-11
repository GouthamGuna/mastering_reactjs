import { React, useState } from "react";
import axios from "axios";

const StudentRegistration = () => {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);

    const student = {
        firstName : name,
        lastname : 'hard code '
    }

    const response =  axios
    .post('http://localhost:8080/api/v1/student/save-new-student', student)

    console.log('Form data submitted successfully:', response.data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="student-reg">
          <label className="sr-feilds">First Name :</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="sr-feilds">Last Name :</label>
          <input type="text" name="lastname" id="lastname" />

          <label className="sr-feilds">Gender :</label>
          <input type="text" name="gender" id="gender" />

          <label className="sr-feilds">DOB :</label>
          <input type="text" name="dob" id="dob" />

          <label className="sr-feilds">Mobile No :</label>
          <input type="text" name="mobileno" id="mobileno" />
        </div>
        <div className="student-reg">
          <label className="sr-feilds">Email ID :</label>
          <input type="text" name="emailId" id="emailId" />

          <label className="sr-feilds">Address :</label>
          <input type="text" name="address" id="address" />

          <label className="sr-feilds">Admission No :</label>
          <input type="text" name="admissinno" id="admissinno" />
        </div>
        <div className="student-reg">
          <label className="sr-feilds">Father Name :</label>
          <input type="text" name="fathername" id="fathername" />

          <label className="sr-feilds">Mother Name :</label>
          <input type="text" name="mothername" id="mothername" />
        </div>
        <input type="submit"/>
      </form>
    </>
  );
};

export default StudentRegistration;
