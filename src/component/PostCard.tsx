import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

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
          <Link
            to={`/post/${postData.id}`}
            state={{ post: postData }}
            className="post-card"
          >
            <div className="post-title">{postData.title}</div>
            <p className="post-content">
              <ReactMarkdown>{postData.content}</ReactMarkdown>
            </p>
            <div className="post-info">
              <div className="post-date">{postData.date}</div>
              <div className="post-categories">{postData.categories}</div>
            </div>
          </Link>
        </div>
      ))}
      {postList.length >= 4 && <button type="button">more</button>}
    </div>
  );
}

export default PostCard;
