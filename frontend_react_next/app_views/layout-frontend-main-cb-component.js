'use strict';

// Import Node Modules.
// ----------------------
// Context.
import { useSyncSystemNSContext, SyncSystemNSContext } from '../components_react/syncsystem-ns-cb-context.js';

import React from 'react';

// Next components.
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
// import { Head, Link } from 'next';
import nProgress from 'nprogress';
// ----------------------

// Router hooks.
// ----------------------
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
// ----------------------

const LayoutFrontendMain = ({ children, cphBody, titleCurrent }) => {
  // Variables.
  // ----------------------
  const SyncSystemNSContext = useSyncSystemNSContext(); // Context (using hooks).
  const { gSystemConfig, SyncSystemNS, HTMLReactParser } = SyncSystemNSContext;
  // ----------------------

  return (
    <React.Fragment>
      <Head>
        <meta charSet="uft=8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />

        <title>
          React SSR Next Boilerplate
        </title>

        <link rel="icon" type="image/png" sizes="32x32" href="static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="static/favicon-16x16.png" />
        <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="static/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="static/apple-touch-icon.png" />
        <link rel="manifest" href="static/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#009154" />
        <meta name="theme-color" content="#ffffff" />

        ${/* Dynamic tags. */}
        <meta name="title" content="" />${/*  Below 60 characters. */}
        <meta name="description" content="" />${/*  Below 160 characters. */}
        <meta name="keywords" content="" />${/*  Below 100 characters. */}

        ${/*  Open Graph tags. */}
        <meta property="og:title" content="" />
        <meta property="og:type" content="website" />${/*  ref: http:// ogp.me/#types | https://developers.facebook.com/docs/reference/opengraph/ */}
        <meta property="og:url" content="" />
        <meta property="og:description" content="" />

        ${
          /*
          Dimensions:
          ref: https://iamturns.com/open-graph-image-size/
          Horizontal:
              - home (1.9:1): 1200 x 630 pixels
              - products, articles, etc (2:1): 1200 x 600 | 300 x 157 (min) | 4096 x 4096 (max)
          Square:
              - home (1:1): 1200 x 1200 pixels
              - products, articles, etc (1:1): 600 x 600 | 144 x 144 (min) | 4096 x 4096 (max)
          */
        }
        <meta property="og:image" content="" />${/*  The recommended resolution for the OG image is 1200x627 pixels, the size up to 5MB. 120x120px, up to 1MB | JPG ou PNG, below 300k - minimum resolution: 300x200 pixels. */}
        ${/* <meta property="og:image:secure_url" content="" /> */}
        <meta property="og:image:alt" content="" />

        <meta property="og:locale" content={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, 'configFrontendLanguage') } />

        <meta name="robots" content="index,follow" />
        <meta name="language" content="english" />

        <meta name="author" content={ SyncSystemNS.FunctionsGeneric.contentMaskRead(gSystemConfig.configSystemClientName, 'config-application') } />
        <meta name="designer" content={ SyncSystemNS.FunctionsGeneric.contentMaskRead(gSystemConfig.configDevName, 'config-application') } />
        <meta name="copyright" content={ gSystemConfig.configCopyrightYear + ',' + SyncSystemNS.FunctionsGeneric.contentMaskRead(gSystemConfig.configSystemClientName, 'config-application') } />
        <meta name="rating" content="general" />${/* general | mature | restricted | 14 years */}

        {/* nProgress CSS. */}
        {/* <link rel="stylesheet" href="../../app_styles/styles-frontend.css" /> */}
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" /> */}
        {/* <link href='nprogress.css' /> */}
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
