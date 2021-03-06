'use strict';
/*
Context refs
  - https://webdevstudios.com/2021/05/04/sharing-data-in-next-js-with-react-context/
    - https://github.com/syamjayaraj/next-context-api-example
  - https://www.netlify.com/blog/2020/12/01/using-react-context-for-state-management-in-next.js/
  - https://dev.to/evangunawan/react-context-the-easy-way-stateful-component-bh0
*/

// Import Node Modules.
// ----------------------
// React components.
import React from 'react';
import PropTypes from 'prop-types';

// Next components.
import { AppProps } from 'next/app';

// Custom components.
// import { SyncSystemNSContext, objContext } from '../components_react/syncsystem-ns-cb-context.js';
import { SyncSystemNSContextProvider } from '../components_react/syncsystem-ns-cb-context';

// CSS styles (third party).
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap.
import '../app_styles/nprogress/nprogress.min.css'; // nProgress CSS.

// CSS styles (custom).
// import '../static/app_styles/styles-frontend.css';
import '../app_styles/styles-frontend.css';
// import { useState } from 'react';
// ----------------------

/**
 * App Next.
 * @param { JsxElement } Component
 * @param { object } pageProps
 * @return { JsxElement }
 */
 export default function AppNext({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SyncSystemNSContextProvider>
      <Component {...pageProps} />
    </SyncSystemNSContextProvider>
  );
};

// Props validation.
AppNext.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};
