'use strict';

// Import Node Modules.
// ----------------------
// Context.
// import { useContext } from "react";
import { SyncSystemNSContext } from '../components_react/syncsystem-ns-cb-context';
// import { useSyncSystemNSContext, SyncSystemNSContext } from '../components_react/syncsystem-ns-cb-context.js';

// Components - react.
// import { gSystemConfig } from '../config-application.js';
import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';

// Components - next.
import { NextPageContext } from 'next';
// import Link from 'next/link';

// Components - custom.
import LayoutFrontendMain from '../app_views/layout-frontend-main-cb-component';
import FrontendExampleListing from '../components_react/frontend-example-listing-cb-component';
// ----------------------

// Interfaces / types.
interface IExampleListingProps {
  props?: object,
  context?: any,
  query?: object
}

interface IExampleListingState {
}

/**
 * Example listing component.
 */
class ExampleListing extends React.Component<IExampleListingProps, IExampleListingState> {
  // Properties.
  objParametersQueryString: any;
  
  // Context.
  static contextType = SyncSystemNSContext;

  /**
   * @param {any} query
   * @return {object}
   * Access query strings.
  */
  static getInitialProps({ query }: NextPageContext) {
    return ({ query });
  }

  // Props validation.
  static propTypes = {
    query: PropTypes.object,
  };

  // Constructor.
  // **************************************************************************************
  /**
   * @param { any } props
   * @param { any } context
   * Constructor.
   */
  constructor(props: any, context: any) {
    super(props, context);

    // Variables.
    // ----------------------
    // const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem } = this.context; // working
    const { gSystemConfig } = this.context;
    // ----------------------

    // Properties.
    // ----------------------
    // this.objParametersQueryString;
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
   * @return { ReactElement }
   */
  render(): ReactElement {
    return (
      <LayoutFrontendMain { ...this.props} cphBody={<FrontendExampleListing { ...this.props} /> }>
      </LayoutFrontendMain>
    );
  }
  // **************************************************************************************
}

export default ExampleListing;
