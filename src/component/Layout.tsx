import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="page-wrapper">
      <main className="page-content">{children}</main>
    </div>
  );
}

export default Layout;
