'use strict';

import { createContext, useContext } from 'react';

// export const SyncSystemNSContext = createContext();
const SyncSystemNSContext = createContext();

/*
export const objContext = {
  // Loading flags.
  frontendHomeLoaded: false,

};
*/
// Export Provider.
/**
 * ContextProvider.
 * @param {any} children
 * @return {JsxElement}
 */
export function SyncSystemNSContextProvider({ children }) {
  //const {value, children} = props;

  return (
    <SyncSystemNSContext.Provider value={{}}>
      { children }
    </SyncSystemNSContext.Provider>
  );
}

// Export useSyncSystemNSContext Hook.
/**
 * ContextProvider.
 * @return {JsxElement}
 */
export function useSyncSystemNSContext() {
  return useContext(SyncSystemNSContext);
}
