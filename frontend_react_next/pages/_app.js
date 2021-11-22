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

// Custom components.
// import { SyncSystemNSContext, objContext } from '../components_react/syncsystem-ns-cb-context.js';
import { SyncSystemNSContextProvider } from '../components_react/syncsystem-ns-cb-context.js';

// CSS styles (third party).
import '../app_js/nprogress/nprogress.min.css'; // nProgress CSS.

// CSS styles (custom).
// import '../static/app_styles/styles-frontend.css';
import '../app_styles/styles-frontend.css';
// import { useState } from 'react';
// ----------------------

/**
 * ContextProvider.
 * @param {any} Component
 * @param {any} pageProps
 * @return {JsxElement}
 */
export default function ContextProvider({ Component, pageProps }) {
  // Get menu data via GraphQL query in `pageProps`.
  // const { menu } = pageProps;

  // Store menu as state for the MenuProvider.
  // const [navMenu] = useState(menu);

  return (
    <SyncSystemNSContextProvider>
      <Component {...pageProps} />
    </SyncSystemNSContextProvider>
  );
};
