import React from 'react';

import Header from './Header';
import Footer from './Footer';

import '../styles/main.scss';

const AppLayout = ({ children }) => (
  <>
    <Header />
    <main>
      <div className="container">
        { children }
      </div>
    </main>
    <Footer />
    <style jsx>{
      `
        main {
          padding: 50px 0;
        }
      `
    }</style>
    <style global jsx>
      {`
        body {
          background: #EEE;
          min-height: 100vh;
          position: relative;
        }
      `}
    </style>
  </>
);

export default AppLayout;
