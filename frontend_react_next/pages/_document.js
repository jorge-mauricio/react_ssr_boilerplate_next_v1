'use strict';
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

/**
 * Document object as base for all html pages.
 */
export default class DocumentLayoutFrontendMain extends Document {
  /**
   * @return {JsxElement}
   * Render output.
   */
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="uft=8" />

          {/* <link rel="stylesheet" href="../../app_styles/styles-frontend.css" /> */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" />
          {/* <link href='nprogress.css' /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
};
