import "./App.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StaffTimeTable from "./components/StaffTimeTable";
import TeacherClassTeacher from "./components/TeacherClassTeacher";

function App() {
  return (
    <div className="App">
      <h1>Hello Lunar!</h1>
      <br />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TeacherClassTeacher />} />
          <Route path="/staffTimeSheets" element={<StaffTimeTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
