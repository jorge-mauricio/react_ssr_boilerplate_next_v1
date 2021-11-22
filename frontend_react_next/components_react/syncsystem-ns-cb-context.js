'use strict';

// Import Node Modules.
// ----------------------
// React components.
import React from 'react';
import { createContext, useContext } from 'react';

// Node modules.
import HTMLReactParser from 'html-react-parser'; // error / webpack
const qs = require('query-string');
import Safe from 'react-safe';

// Custom components.
import { gSystemConfig } from '../config-application.js';

// Node functions.
const FunctionsGeneric = require('../' + gSystemConfig.configDirectoryComponents + '/functions-generic.js');
// ----------------------

// Context.
// export const SyncSystemNSContext = createContext();
export const SyncSystemNSContext = createContext();

/**
 * Context provider "namespace".
 */
export class SyncSystemNSContextProvider extends React.Component {
  state = {
    // Modules and components.
    HTMLReactParser: HTMLReactParser,
    Safe: Safe,
    qs: qs,

    // App config file.
    gSystemConfig: gSystemConfig,

    // Node functions.
    SyncSystemNS: {
      FunctionsGeneric: FunctionsGeneric,
      // ObjectFormsDetails: ObjectFormsDetails
    },

    // Custom react components.

    // Loading flags.
    frontendHomeLoaded: false,
  };

  /**
   * Render elements.
   * @return {JsxElement}
   */
  render() {
    return (
      <SyncSystemNSContext.Provider
        value={{ ...this.state }}
      >
        { this.props.children }
      </SyncSystemNSContext.Provider>
    );
  }
}

// Export useSyncSystemNSContext Hook.
/**
 * ContextProvider.
 * @return {JsxElement}
 */
export function useSyncSystemNSContext() {
  return useContext(SyncSystemNSContext);
}
