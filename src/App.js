import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import Upload from './pages/upload/Upload'
import Lab from './pages/lab/Lab'
import Mental from './pages/mental/Mental'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
    <Header />
    <div className="main-content">
      <Router>
        <Routes>
          <Route path="/" element={<><Home /></>} />
          <Route path="/upload" element={<><Upload /></>} />
          <Route path="/lab" element={<><Lab /></>} />
          <Route path="/mental" element={<><Mental /></>} />
        </Routes>
      </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
