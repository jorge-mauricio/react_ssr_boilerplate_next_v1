'use strict';

// Import Node Modules.
// ----------------------
// Components - react.
import React from 'react';
import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

// Node modules.
import HTMLReactParser from 'html-react-parser'; // error / webpack
// const qs = require('query-string');
import Safe from 'react-safe';

// Custom components.
import { gSystemConfig } from '../config-application';

// Node functions.
const FunctionsGeneric = require('../' + gSystemConfig.configDirectoryComponents + '/functions-generic');

// JS functions.
// import {elementMessage01} from "../app_js/functions-syncsystem.js";
import { FunctionsSyncSystem } from '../app_js/functions-syncsystem';
// ----------------------

// Interfaces.
interface ISyncSystemNSContextProviderProps {
  props?: object,
  context?: any,
  query?: object,
}

interface ISyncSystemNSContextProviderState {
  HTMLReactParser?: any,
  Safe?: any,
  gSystemConfig?: any,
  FunctionsSyncSystem?: any,
  SyncSystemNS?: any,
  frontendHomeLoaded?: any,
}

// Context.
// export const SyncSystemNSContext = createContext();
export const SyncSystemNSContext = createContext(null);

/**
 * Context provider "namespace".
 */
export class SyncSystemNSContextProvider extends React.Component<ISyncSystemNSContextProviderProps, ISyncSystemNSContextProviderState> {
  // Props validation.
  static propTypes = {
    children: PropTypes.element,
  };

  state = {
    // Modules and components.
    HTMLReactParser: HTMLReactParser,
    Safe: Safe,
    // qs: qs,

    // App config file.
    gSystemConfig: gSystemConfig,

    // JS functions.
    FunctionsSyncSystem: FunctionsSyncSystem,

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
 * @return { JsxElement }
 */
export function useSyncSystemNSContext(): JSX.Element {
  return useContext(SyncSystemNSContext);
};
