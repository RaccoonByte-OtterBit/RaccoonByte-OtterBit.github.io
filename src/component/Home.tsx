import React, { useState, useEffect } from 'react';
import grayMatter from 'gray-matter-browser';
import Bio from './Bio';
import PostCard from './PostCard';

function Home() {
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

  const postContext = require.context('/public/post', true, /\.md$/);
  const postPaths = postContext
    .keys()
    .map((key) => postContext.resolve(key).toString().replace('./public', ''));

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
    <body>
      <div className="page-content">
        <Bio />
        <PostCard postList={postList} />
      </div>
    </body>
  );
}

export default Home;
