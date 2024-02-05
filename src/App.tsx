import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHeader from './component/PageHeader';
import PageFooter from './component/PageFooter';
import PageDetail from './component/PageDetail';
import Home from './component/pages/Home';
import NotFound from './component/pages/NotFound';

import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      <BrowserRouter>
        <PageHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post/:id" element={<PageDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <PageFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
