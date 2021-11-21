'use strict';

// Import Node Modules.
// ----------------------
// React components.
import React from 'react';
import { createContext, useContext } from 'react';

// Custom components.
import { gSystemConfig } from '../config-application.js';
// ----------------------

// Context.
// export const SyncSystemNSContext = createContext();
export const SyncSystemNSContext = createContext();

/**
 * Context provider "namespace".
 */
export class SyncSystemNSContextProvider extends React.Component {
  state = {
    // App config file.
    gSystemConfig: gSystemConfig,

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
