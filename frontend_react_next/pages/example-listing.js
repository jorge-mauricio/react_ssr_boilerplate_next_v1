'use strict';

// Import Node Modules.
// ----------------------
// Context.
// import { useContext } from "react";
import { SyncSystemNSContext } from '../components_react/syncsystem-ns-cb-context.js';
// import { useSyncSystemNSContext, SyncSystemNSContext } from '../components_react/syncsystem-ns-cb-context.js';

// Components - react.
// import { gSystemConfig } from '../config-application.js';
import React from 'react';
import PropTypes from 'prop-types';

// Components - next.
// import Link from 'next/link';
// import { useRouter } from 'next/router'; // functional components
// import { withRouter } from "next/router"; // class based components

// Components - custom.
import LayoutFrontendMain from '../app_views/layout-frontend-main-cb-component.js';
import FrontendExampleListing from '../components_react/frontend-example-listing-cb-component.js';
// ----------------------

/**
 * Example listing component.
 */
class ExampleListing extends React.Component {
  // Context.
  static contextType = SyncSystemNSContext;

  /**
   * @param {any} query
   * @return {object}
   * Access query strings.
  */
  static getInitialProps({ query }) {
    return ({ query });
  }

  // Props validation.
  static propTypes = {
    query: PropTypes.object,
  };

  // Constructor.
  // **************************************************************************************
  /**
   * @param {any} props
   * @param {any} context
   * Constructor.
   */
  constructor(props, context) {
    super(props, context);

    // Variables.
    // ----------------------
    // const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem } = this.context; // working
    const { gSystemConfig } = this.context;
    // ----------------------

    // Properties.
    // ----------------------
    this.objParametersQueryString;
    // ----------------------

    // Define values.
    // ----------------------
    this.objParametersQueryString = this.props.query;
    // ----------------------

    // Debug.
    if (gSystemConfig.configDebug === true) {
      // console.log('qs=', qs);
      // console.log('props=', this.props);
      // console.log('context=', context);
      console.log('this.objParametersQueryString (example-listing)=', this.objParametersQueryString);
    }
  }
  // **************************************************************************************

  // Render output.
  // **************************************************************************************
  /**
   * Render output.
   * @return {JsxElement}
   */
  render() {
    return (
    /*
    <LayoutFrontendMain titleCurrent={'Home title'} cphBody={()=>{
      <FrontendHome></FrontendHome>
    }}>

    </LayoutFrontendMain>
    */

    /*
      <LayoutFrontendMain titleCurrent={'Home title from props'}>
        <FrontendHome />
      </LayoutFrontendMain>
    *//* working (with children) */
      <LayoutFrontendMain { ...this.props} cphBody={<FrontendExampleListing { ...this.props} /> }>
      </LayoutFrontendMain>
    );
  }
  // **************************************************************************************
}

export default ExampleListing;
