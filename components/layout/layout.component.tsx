import React from 'react';
import Header from '../header/header.component';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: DashboardLayoutProps) {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
