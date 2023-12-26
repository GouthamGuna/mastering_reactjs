import "./App.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StaffTimeTable from "./components/StaffTimeTable";
import TeacherClassTeacher from "./components/TeacherClassTeacher";
import FileDataReader from "./components/FileDataReader";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<TeacherClassTeacher />} />
          <Route path="/staffTimeSheets" element={<StaffTimeTable />} />
          <Route path="/file-data-reader" element={<FileDataReader />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
