import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function PageHeader() {
  const currentPage = useLocation().pathname;

  return (
    <div className="page-header-wrapper">
      <header className="page-header">
        <div className="home-section">
          <Link
            to={{ pathname: '//' }}
            className={`link ${currentPage === '/' ? 'active' : ''}`}
          >
            na-log
          </Link>
        </div>
        <div className="category-section">
          <Link
            to="/about"
            className={`link ${currentPage === '/about' ? 'active' : ''}`}
          >
            about
          </Link>
        </div>
      </header>
    </div>
  );
}
export default PageHeader;
