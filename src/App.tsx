import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHeader from './component/PageHeader';
import PageFooter from './component/PageFooter';
import Home from './component/Home';
import NotFound from './component/NotFound';

import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      <BrowserRouter>
        <PageHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <PageFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
