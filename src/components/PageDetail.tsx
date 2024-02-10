import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';

function PageDetail() {
  const location = useLocation();
  const postData = location.state.post;

  return (
    <div className="page-detail">
      <header className="post-header">
        <h1>{postData.title}</h1>
        <div className="post-info">
          <div className="post-date">{postData.date}</div>
          <div className="post-categories">{postData.categories}</div>
        </div>
      </header>
      <div className="post-content">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
          remarkPlugins={[remarkGfm]}
        >
          {postData.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default PageDetail;
