import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import Upload from './pages/upload/Upload'
import Lab from './pages/lab/Lab'
import Mental from './pages/mental/Mental'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/mental" element={<Mental />} />
      </Routes>
    </Router>
  );
}

export default App;