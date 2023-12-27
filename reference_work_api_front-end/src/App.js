// import "./App.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StaffTimeTable from "./components/StaffTimeTable";
import TeacherClassTeacher from "./components/TeacherClassTeacher";
import FileDataReader from "./components/FileDataReader";
import PageNotFound from "./pages/PageNotFound";
import LoginPage from "./pages/login_page/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Navbar />}>
            <Route
              path="teacher-class-teacher"
              element={<TeacherClassTeacher />}
            />
            <Route path="staff-time-sheets" element={<StaffTimeTable />} />
            <Route path="file-data-reader" element={<FileDataReader />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
