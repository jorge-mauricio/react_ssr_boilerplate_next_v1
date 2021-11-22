'use strict';

// Import Node Modules.
// ----------------------
import React from 'react';
import Link from 'next/link';
// ----------------------

const About = () => {
  return (
    <React.Fragment>
      <h1>
        About
      </h1>
      <div>
        Some description
        <img src="/static/frontend-layout-logo-client.png" alt="" />
      </div>
    </React.Fragment>
  );
};

export default About;
