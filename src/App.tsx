import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import PageDetail from './components/PageDetail';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <PageHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<PageDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <PageFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
