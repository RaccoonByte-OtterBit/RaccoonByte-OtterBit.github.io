import React from 'react';

function PageHeader() {
  return (
    <div className="page-header-wrapper">
      <header className="page-header">
        <div className="home-section">
          <a className="link" href="/">
            bono-log
          </a>
        </div>
        <div className="category-section">
          <a className="link" href="/">
            about
          </a>
          <a className="link" href="/">
            pages
          </a>
        </div>
      </header>
    </div>
  );
}
export default PageHeader;
