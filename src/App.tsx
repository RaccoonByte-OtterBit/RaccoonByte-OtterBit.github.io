import React, { useEffect, useState } from 'react';
import './App.css';
import grayMatter from 'gray-matter-browser';
import PostCard from './component/PostCard';
import PageHeader from './component/PageHeader';

function App() {
  const [postList, setPostList] = useState<
    {
      id: number;
      title: string;
      date: string;
      author: string;
      categories: string;
      content: string;
    }[]
  >([]);

  const postPaths = ['/post/test.md', '/post/test2.md', '/post/test3.md'];

  useEffect(() => {
    Promise.all(
      postPaths.map((postPath) =>
        fetch(postPath)
          .then((response) => response.text())
          .then((data) => {
            const { content, data: frontmatterData } = grayMatter(data);
            return {
              id: frontmatterData.id,
              title: frontmatterData.title,
              date: frontmatterData.date,
              author: frontmatterData.author,
              categories: frontmatterData.categories,
              content,
            };
          })
      )
    ).then((posts) => {
      setPostList(posts);
    });
  }, []);

  return (
    <div className="page-wrapper">
      <PageHeader />
      <body>
        <div className="page-content">
          <p>Hello, Bono-log!</p>
          <PostCard postList={postList} />
          {postPaths.length >= 4 && <button type="button">more</button>}
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
