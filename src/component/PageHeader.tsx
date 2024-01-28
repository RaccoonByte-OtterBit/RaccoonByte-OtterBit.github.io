import React from 'react';

function PageHeader() {
  return (
    <header className="page-header">
      <div className="page-header-wrapper">
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
      </div>
    </header>
  );
}
export default PageHeader;
