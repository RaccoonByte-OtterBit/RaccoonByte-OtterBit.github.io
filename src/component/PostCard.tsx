import React from 'react';
import ReactMarkdown from 'react-markdown';

interface PostData {
  id: number;
  title: string;
  content: string;
  date: string;
  categories: string;
}

interface PostCardProps {
  postList: PostData[];
}

function PostCard({ postList }: PostCardProps) {
  return (
    <div className="post-card-list">
      {postList.map((postData) => (
        <div key={postData.id} className="post-card-wrapper">
          <a className="post-card" href={`/post/${postData.id}`}>
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
      ))}
    </div>
  );
}

export default PostCard;
