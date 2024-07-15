import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CatalogPage from './components/CatalogPage';
import VoyageDetailsPage from './components/VoyageDetailPage';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/catalog" element={<CatalogPage />} />
        <Route path="/voyage/:id" element={<VoyageDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;




