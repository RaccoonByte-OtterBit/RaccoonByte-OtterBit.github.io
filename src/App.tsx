import React, { useEffect, useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
import grayMatter from 'gray-matter-browser';

function App() {
  const [postContent, setPostContent] = useState('');
  const [postFrontmatter, setPostFrontmatter] = useState<{
    title: string;
    date: string;
    author: string;
    categories: string;
  }>({
    title: '',
    date: '',
    author: '',
    categories: '',
  });

  useEffect(() => {
    const postPath = '/post/test.md';

    fetch(postPath)
      .then((response) => response.text())
      .then((data) => {
        const { content, data: frontmatterData } = grayMatter(data);
        setPostContent(content);
        setPostFrontmatter((Frontmatter) => ({
          ...Frontmatter,
          ...frontmatterData,
        }));
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
              <div className="post-title">{postFrontmatter.title}</div>
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
