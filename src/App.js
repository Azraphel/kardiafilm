import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudyPage from './pages/Casestudypage.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudyPage />} />
        <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;