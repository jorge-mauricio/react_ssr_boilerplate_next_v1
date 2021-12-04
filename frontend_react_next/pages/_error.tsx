'use strict';

// Import Node Modules.
// ----------------------
// Context.
import { SyncSystemNSContext } from '../components_react/syncsystem-ns-cb-context';

// Components - react.
import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';

// Components - custom.
import LayoutFrontendMain from '../app_views/layout-frontend-main-cb-component';
import FrontendError from '../components_react/frontend-error-cb-component';
// ----------------------


// Interfaces / types.
interface IErrorProps {
  props?: object,
  context?: any,
}

interface IErrorState {
}

/**
 * Frontend Error Component.
 */
class AppError extends React.Component<IErrorProps, IErrorState> {
  // Properties.
  objParametersQueryString: any;

  // Context.
  static contextType = SyncSystemNSContext;

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
    // this.objParametersQueryString = this.props.query;
    // ----------------------

    // Debug.
    if (gSystemConfig.configDebug === true) {
      // console.log('qs=', qs);
      // console.log('props=', this.props);
      // console.log('context=', context);
      // console.log('this.objParametersQueryString (index)=', this.objParametersQueryString);
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
      <LayoutFrontendMain { ...this.props} cphBody={<FrontendError { ...this.props} /> }>
      </LayoutFrontendMain>
    );
  }
  // **************************************************************************************
}

export default AppError;
