import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function PageDetail() {
  const location = useLocation();
  const postData = location.state.post;

  return (
    <div className="page-detail">
      <h1>{postData.title}</h1>
      <div className="post-info">
        <div className="post-date">{postData.date}</div>
        <div className="post-categories">{postData.categories}</div>
      </div>
      <div className="post-content">
        <ReactMarkdown>{postData.content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default PageDetail;
