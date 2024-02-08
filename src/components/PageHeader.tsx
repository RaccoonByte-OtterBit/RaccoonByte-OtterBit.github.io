import React from 'react';
import { useLocation } from 'react-router-dom';

function PageHeader() {
  const currentPage = useLocation().pathname;

  return (
    <div className="page-header-wrapper">
      <header className="page-header">
        <div className="home-section">
          <a className={`link ${currentPage === '/' ? 'active' : ''}`} href="/">
            bono-log
          </a>
        </div>
        <div className="category-section">
          <a className="link" href="/">
            about
          </a>
        </div>
      </header>
    </div>
  );
}
export default PageHeader;
