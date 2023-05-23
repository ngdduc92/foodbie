import React from 'react';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: DashboardLayoutProps) {
  return (
    <div className="container-fluid">
      <Header />
      <div className="body">{children}</div>
      <Footer />
    </div>
  );
}
export default Layout;
