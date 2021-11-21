import React from 'react';

// Next components.
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import nProgress from 'nprogress';

//Hooks.
Router.onRouteChangeStart = (url) => {
  // Debug.
  console.log('url=', url);
  
  nProgress.start();
};

Router.onRouteChangeComplete = () => {
  nProgress.done();
};

Router.onRouteChangeError = () => {
  nProgress.done();
};

const LayoutFrontendMain = ({ children, cphBody, titleCurrent }) => {
  return (
    <React.Fragment>
      <Head>
        <title>
          React SSR Next Boilerplate
        </title>
      </Head>
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
