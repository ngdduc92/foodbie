import React from 'react';
import Header from '../header/header.component';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
