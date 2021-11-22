'use strict';

// Import Node Modules.
// ----------------------
// Context.
// import { useContext } from "react";
// import { SyncSystemNSContext } from '../components_react/syncsystem-ns-cb-context.js';
import { useSyncSystemNSContext, SyncSystemNSContext } from '../components_react/syncsystem-ns-cb-context.js';

// import { gSystemConfig } from '../config-application.js';
import React from 'react';
// import Link from 'next/link';

// Components - custom.
import LayoutFrontendMain from '../app_views/layout-frontend-main-cb-component.js';
import FrontendHome from '../components_react/frontend-home-cb-component.js';
// ----------------------

const Index = () => {
  // Variables.
  const SyncSystemNSContext = useSyncSystemNSContext(); // Context (using hooks).
  // console.log('SyncSystemNSContext (insite index function)=', SyncSystemNSContext);

  return (
  /*
  <LayoutFrontendMain titleCurrent={'Home title'} cphBody={()=>{
    <FrontendHome></FrontendHome>
  }}>

  </LayoutFrontendMain>
  */

    <LayoutFrontendMain titleCurrent={'Home title'}>
      <FrontendHome />
    </LayoutFrontendMain>
  );
};

export default Index;
