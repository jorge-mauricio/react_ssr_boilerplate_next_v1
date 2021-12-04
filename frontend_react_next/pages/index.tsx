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
// import { useRouter } from 'next/router'; // functional components
// import { withRouter } from "next/router"; // class based components

// Components - custom.
import LayoutFrontendMain from '../app_views/layout-frontend-main-cb-component';
import FrontendHome from '../components_react/frontend-home-cb-component';
// ----------------------

// Interfaces / types.
interface IIndexProps {
  props?: object,
  context?: any,
  query?: object
}

interface IIndexState {
}

/**
 * Index Component.
 */
class Index extends React.Component<IIndexProps, IIndexState> {
  // Properties.
  objParametersQueryString: any;

  // Context.
  static contextType = SyncSystemNSContext;

  /**
   * @param { object } context
   * @return { object }
   * Access query strings.
  */
  static async getInitialProps({ query }: NextPageContext): Promise<object> {
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
      console.log('this.objParametersQueryString (index)=', this.objParametersQueryString);
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
      <LayoutFrontendMain { ...this.props} cphBody={<FrontendHome { ...this.props} /> }>
      </LayoutFrontendMain>
    );
  }
  // **************************************************************************************
}

export default Index;
