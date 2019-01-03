import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div>
      <p className="text-center text-primary">Made Next JS and Apollo Client &copy;2019</p>
    </div>
    <style jsx>{
      `
        .footer {
          background: white;
          height: 50px;
          position: absolute;
          bottom: 0;
          width: 100%;
        }
      `
    }</style>
    <style global jsx>{
      `
        body {
          padding-bottom: 50px;
        }
      `
    }</style>
  </footer>
);

export default Footer;
