import React from 'react';
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
function extractMarkdown(markdownText: string) {
  const content = markdownText
    .replace(/^(#+)\s+(.*)/gm, '$2') // 제목 헤더 제거
    .replace(/^[-*]\s+(.*)/gm, '$1') // 목록 항목 제거
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // 링크 제거
    .replace(/!\[([^\]]+)\]\([^)]+\)/g, '') // 이미지 제거
    .replace(/^\s*>.*$/gm, '') // 인용문 제거
    .replace(/\n{2,}/g, '\n'); // 여러 줄바꿈을 하나로 줄임

  return content.trim(); // 앞뒤 공백 제거
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
            <p className="post-content">{extractMarkdown(postData.content)}</p>
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
