'use strict';

// Import Node Modules.
// ----------------------
// Context.
// import { useSyncSystemNSContext, SyncSystemNSContext } from '../components_react/syncsystem-ns-cb-context.js';
import { SyncSystemNSContext } from '../components_react/syncsystem-ns-cb-context.js';

// Components - react.
import React from 'react';
import PropTypes from 'prop-types';

// Components - next.
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
// import { Head, Link } from 'next';
import nProgress from 'nprogress';

// Components - custom.
// ----------------------

// Router hooks.
// ----------------------
Router.onRouteChangeStart = (url) => {
  // Debug.
  // console.log('url=', url);

  nProgress.start();
};

Router.onRouteChangeComplete = () => {
  nProgress.done();
};

Router.onRouteChangeError = () => {
  nProgress.done();
};
// ----------------------


/**
 * Layout Frontend Component.
 */
class LayoutFrontendMain extends React.Component {
  // Context.
  static contextType = SyncSystemNSContext;

  // Props validation.
  static propTypes = {
    titleCurrent: PropTypes.string,
    cphBody: PropTypes.element,
    // children: PropTypes.JsxElement,
  };

  // Constructor.
  // **************************************************************************************
  /**
   * @param {any} props
   * @param {any} context
   * Constructor.
   */
  constructor(props, context) {
    super(props, context);
  }
  // **************************************************************************************

  // Render output.
  // **************************************************************************************
  /**
   * Render output.
   * @return {JsxElement}
   */
  render() {
    // Variables.
    // ----------------------
    // const SyncSystemNSContext = useSyncSystemNSContext(); // Context (using hooks).
    // const { gSystemConfig, SyncSystemNS, HTMLReactParser } = SyncSystemNSContext; // Context (using hooks).

    // const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem } = this.context;
    const { gSystemConfig, SyncSystemNS } = this.context;
    // ----------------------

    return (
      <React.Fragment>
        <Head>
          <meta charSet="uft=8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="format-detection" content="telephone=no" />

          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#009154" />
          <meta name="theme-color" content="#ffffff" />

          {/* Dynamic tags. */}

          {/*  Open Graph tags. */}
          {
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

          <meta name="robots" content="index,follow" />
          <meta name="language" content="english" />

          <meta name="author" content={ SyncSystemNS.FunctionsGeneric.contentMaskRead(gSystemConfig.configSystemClientName, 'config-application') } />
          <meta name="designer" content={ SyncSystemNS.FunctionsGeneric.contentMaskRead(gSystemConfig.configDevName, 'config-application') } />
          <meta name="copyright" content={ gSystemConfig.configCopyrightYear + ',' + SyncSystemNS.FunctionsGeneric.contentMaskRead(gSystemConfig.configSystemClientName, 'config-application') } />
          <meta name="rating" content="general" />{/* general | mature | restricted | 14 years */}

          {/* nProgress CSS. */}
          {/* <link rel="stylesheet" href="../../app_styles/styles-frontend.css" /> */}
          {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" /> */}
          {/* <link href='nprogress.css' /> */}
        </Head>
        <div id="root">
          <header className="ss-frontend-layout-header01">
            <div>
              <a href="/" title="Home" className="ss-frontend-layout-header-logo">
              </a>
            </div>

            <nav>
              <Link href='/'>
                <a className="ss-frontend-link01" title="Home">
                  Home
                </a>
              </Link>
              <Link href='/example-listing'>
                <a className="ss-frontend-link01" title="Example Listing">
                  Example Listing
                </a>
              </Link>
              <Link as="/example-listing/123/" href='/example-listing/?id=123'>
                <a className="ss-frontend-link01" title="Example Listing">
                  Example Listing (dynamic)
                </a>
              </Link>
            </nav>
          </header>

          <main>
            {/* Content place holder - current title */}
            <h1 id="titleCurrent" className="ss-frontend-heading01">
              {/* this.state.titleCurrent */}
              {/* this.props.cphTitle */}
              { this.props.titleCurrent }
            </h1>

            {/* props destructuring */}
            { this.props.titleCurrent }
            { this.props.cphBody }
            { /* this.props.children */ }

            {/* Bootstrap. */}
            <div className="d-none d-md-block d-lg-block d-xl-block">
              desktop, tablet, tv
            </div>
            <div className="d-md-none">
              mobile
            </div>
          </main>

          <footer>
            {/* Credits. */}
            <small className="ss-frontend-copyright ss-frontend-credit-layout">
              { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, 'layoutCopyright') } ©&nbsp;
              { gSystemConfig.configCopyrightYear }&nbsp;
              { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, 'configSiteTile') }.&nbsp;
              { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, 'layoutCopyright1') }

              {/* Development. */}
              <a href={gSystemConfig.configDevSite} target="_blank" rel="noreferrer" className="ss-frontend-credit" style={{ float: 'right' }}>
                { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, 'layoutDevelopment') }:&nbsp;
                { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, 'layoutDevName') }
              </a>
            </small>
          </footer>
        </div>
      </React.Fragment>
    );
  }
  // **************************************************************************************
}

export default LayoutFrontendMain;
