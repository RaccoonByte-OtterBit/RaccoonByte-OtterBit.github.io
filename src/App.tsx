import React, { useEffect, useState } from 'react';
import grayMatter from 'gray-matter-browser';
import PageHeader from './component/PageHeader';
import PageFooter from './component/PageFooter';
import Bio from './component/Bio';
import PostCard from './component/PostCard';
import './App.css';

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
          <Bio />
          <PostCard postList={postList} />
        </div>
      </body>
      <PageFooter />
    </div>
  );
}

export default App;
