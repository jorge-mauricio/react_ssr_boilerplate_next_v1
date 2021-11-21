'use strict';
// ref: https://webdevstudios.com/2021/05/04/sharing-data-in-next-js-with-react-context/

// import '../static/app_styles/styles-frontend.css';
import { useState } from 'react';

// import { SyncSystemNSContext, objContext } from '../components_react/syncsystem-ns-cb-context.js';
import { SyncSystemNSContextProvider } from '../components_react/syncsystem-ns-cb-context.js';


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
