import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudyPage from './pages/Casestudypage.jsx';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;