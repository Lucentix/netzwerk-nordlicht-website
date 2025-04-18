import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import JobsPage from './pages/JobsPage';
import ContactPage from './pages/ContactPage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';

import './App.css';
import './assets/placeholders.css';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className="App">
      <Router>
        {loading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

        <AnimatePresence>
          {!loading && (
            <>
              <Header />
              <main className="main-content">
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/jobs" element={<JobsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/impressum" element={<ImpressumPage />} />
                    <Route path="/datenschutz" element={<DatenschutzPage />} />
                  </Routes>
                </AnimatePresence>
              </main>
              <Footer />
            </>
          )}
        </AnimatePresence>
      </Router>
    </div>
  );
};

export default App;
