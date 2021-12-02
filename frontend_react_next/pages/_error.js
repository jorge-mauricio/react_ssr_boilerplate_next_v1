// import React, { Component } from 'react';
import React from 'react';
// import Link from 'next/link';

// Components.
import LayoutFrontendMain from '../app_views/layout-frontend-main-cb-component.js';

const Frontend404 = () => {
  return (
  /*
  <LayoutFrontendMain titleCurrent={'Home title'} cphBody={()=>{
    <FrontendHome></FrontendHome>
  }}>
  </LayoutFrontendMain>
  */

    <LayoutFrontendMain titleCurrent={'Error'}>
      <p>
        Page not found.
      </p>
    </LayoutFrontendMain>
  );
};

export default Frontend404;
