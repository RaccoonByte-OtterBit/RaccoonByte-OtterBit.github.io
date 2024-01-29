import React from 'react';
import ReactMarkdown from 'react-markdown';

interface PostData {
  title: string;
  content: string;
  date: string;
  categories: string;
}

interface PostCardProps {
  postData: PostData;
}

function PostCard({ postData }: PostCardProps) {
  return (
    <div className="post-card-wrapper">
      <a className="post-card" href="/">
        <div className="post-title">{postData.title}</div>
        <p className="post-content">
          <ReactMarkdown>{postData.content}</ReactMarkdown>
        </p>
        <div className="post-info">
          <div className="post-date">{postData.date}</div>
          <div className="post-categories">{postData.categories}</div>
        </div>
      </a>
    </div>
  );
}

export default PostCard;
