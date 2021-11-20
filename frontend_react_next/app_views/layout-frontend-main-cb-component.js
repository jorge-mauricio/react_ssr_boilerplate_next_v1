//import React, { Component } from 'react';
import Link from 'next/link';

const LayoutFrontendMain = ({ children, cphBody, titleCurrent }) => {
  return (
    <React.Fragment>
      <header>
        some header text
      </header>
      <nav>
        <Link href='/'>
          <a>
            Go to Home
          </a>
        </Link>
        <Link href='/about'>
          <a>
            Go to about
          </a>
        </Link>
      </nav>
      
      {/* props destructuring */}
      { titleCurrent }
      { cphBody }
      { children }
      
      <footer>
        some footer text
      </footer>
    </React.Fragment>
  );
};

export default LayoutFrontendMain;