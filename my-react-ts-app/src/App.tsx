import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentDetail from "./pages/Bai3_Students/StudentDetail";
import StudentList from "./pages/Bai3_Students/StudentList";
import NewsApp from "./pages/Bai4_News/NewsApp";
import WeatherApp from "./Weather";
import "./App.css";
import TrangChu from "./pages/TrangChu";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<TrangChu />} />
          <Route path="/trangchu" element={<TrangChu />} />
          <Route path="/bai1" element={<WeatherApp />} />
          <Route path="/bai2" element={<StudentList />} />
          <Route path="/bai2/:id" element={<StudentDetail />} />
          <Route path="/bai3" element={<NewsApp />} />
        </Routes>
      </div>
    </Router>
  );
}
