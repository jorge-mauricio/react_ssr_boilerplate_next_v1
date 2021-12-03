'use strict';

// Import Node Modules.
// ----------------------
// React components.
import React, { ReactElement } from 'react';

// Next components.
import Document, { Html, Head, Main, NextScript } from 'next/document';
// ----------------------

interface IProps {
  props?: any,
  context?: any,
}

/**
 * Document object as base for all HTML pages.
 */
class DocumentLayoutFrontendMain extends Document<IProps> {
  // Constructor.
  // **************************************************************************************
  /**
   * @param { any } props
   * @param { any } context
   * Constructor.
   */
   constructor(props: any, context: any) {
    super(props, context);
  }
  // **************************************************************************************

  // Render output.
  // **************************************************************************************
  /**
   * Render output.
   * @return { ReactElement }
   */
  render(): ReactElement {
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
  // **************************************************************************************
};

export default DocumentLayoutFrontendMain;
