import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
