import React, { useEffect, useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';

function App() {
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    const postPath = '/post/test.md';

    fetch(postPath)
      .then((response) => response.text())
      .then((data) => {
        const withoutFM = data.replace(/^---[\s\S]*?---/, ''); // Frontmatter 제거
        setPostContent(withoutFM);
      });
  }, []);

  return (
    <div className="page-wrapper">
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
      <body>
        <div className="page-content">
          <p>Hello, Bono-log!</p>
          <div className="post-card-wrapper">
            <a className="post-card" href="/">
              <div className="post-title">title</div>
              <p className="post-content">
                <ReactMarkdown>{postContent}</ReactMarkdown>
              </p>
            </a>
          </div>
        </div>
      </body>
      <footer className="page-footer-wrapper">
        <div className="page-footer">
          <p>copyright</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
