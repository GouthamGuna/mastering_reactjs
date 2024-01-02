// import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StaffTimeTable from "./components/StaffTimeTable";
import TeacherClassTeacher from "./components/TeacherClassTeacher";
import FileDataReader from "./components/FileDataReader";
import PageNotFound from "./pages/PageNotFound";
import LoginPage from "./pages/login_page/LoginPage";
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Navbar />}>
            <Route path="home" element={<TeacherClassTeacher />} />
            <Route path="staff-time-sheets" element={<StaffTimeTable />} />
            <Route path="file-data-reader" element={<FileDataReader />} />
            <Route path="files-upload" element={<FileUpload />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
