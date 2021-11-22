'use strict';
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

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
      <Html lang="en">
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};
