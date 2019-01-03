import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';


const Header = ({router}) => (
  <header>
    <nav className="navbar navbar--primary" color-on-scroll="500">
      <div className="container">
        <div className="navbar__translate align-self-center">
          <Link href="/" prefetch>
            <a className="navbar__brand">
              Logo
            </a>
          </Link>
        </div>
        <div className="navbar__collapse align-self-center justify-content-end">
          <ul className="navbar__nav">
            <li className="navbar__item">
              <Link href="/" prefetch>
                <a className="navbar__link" className={`navbar__link ${router.pathname === '/' ? 'navbar__linkActive' : ''}`}>
                  <p>Home</p>
                </a>
              </Link>
            </li>
            <li className="navbar__item">
              <Link href="/add" prefetch>
                <a className={`navbar__link ${router.pathname === '/add' ? 'navbar__linkActive' : ''}`}>
                  <p>Add Post</p>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default withRouter(Header);
