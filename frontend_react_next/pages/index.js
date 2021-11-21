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

// Components.
import LayoutFrontendMain from '../app_views/layout-frontend-main-cb-component.js';
// ----------------------

/**
 * Frontend Home Component.
 */
class FrontendHome extends React.Component {
  // Context (using class based components).
  // static SyncSystemNSContext = useSyncSystemNSContext();
  static contextType = SyncSystemNSContext;
  // static contextType = useContext(SyncSystemNSContext);
  // static SyncSystemNSContext = SyncSystemNSContext;

  // Constructor.
  // **************************************************************************************
  /**
   * @param {any} props
   * @param {any} context
   * Frontend Home Component.
   */
  constructor(props, context) {
    super(props, context);

    // Debug.
    console.log('this.context (inside FrontendHome)=', this.context);
  }
  // **************************************************************************************

  // Lifecycle method.
  // **************************************************************************************
  /**
   * Lifecycle method.
   * @return {void} The sum of the two numbers.
   */
  async componentDidMount() {
    // Logic.
    // ----------------------
    /**/
    try {
      // Main build.
      await this.build();

      // Head content.
      // await this.headBuild();

      // Title content.
      // await this.titleCurrentBuild();


      // Debug.
      // console.log("this.titleCurrent=",this.titleCurrent);
      // console.log("this.objCategoriesCurrent=",this.objCategoriesCurrent);
    } catch (asyncError) {
      /*
      if (gSystemConfig.configDebug === true) {
        console.error(asyncError);
      }
      */
    } finally {
      // TODO:
    }
    // ----------------------
  }
  // **************************************************************************************
  
  // Build object´s content.
  // **************************************************************************************
  async build() {
  }
  // **************************************************************************************

  // Render.
  // **************************************************************************************
  /**
   * Render elements.
   * @return {JsxElement}
   */
  render() {
    // Variables.
    // ----------------------
    const { gSystemConfig, SyncSystemNS, frontendHomeLoaded } = this.context; // Object desconstruct.
    // const value = useContext(SyncSystemNSContext);
    // ----------------------

    // Debug.
    // const { frontendHomeLoaded } = this.context;
    // const { frontendHomeLoaded } = this.state.SyncSystemNSContext;
    // console.log('this.context=', this.context);
    // console.log('this.SyncSystemNSContext=', this.SyncSystemNSContext);
    // console.log('value=', value);
    console.log('frontendHomeLoaded=', frontendHomeLoaded);

    // Output.
    return (
      <React.Fragment>
        <h1>
          Home Page
        </h1>
        <div>
          Welcome to the home page 22
        </div>

        <div>
          Testing config read: { gSystemConfig.configSystemClientName }
        </div>

        <div>
          Testing context read: { frontendHomeLoaded.toString() }
        </div>

        <div>
          Testing language file read: { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, 'frontendHomeTitleMain') }
        </div>
      </React.Fragment>
    );
  }
  // **************************************************************************************
}

const Index = () => {
  // Variables.
  // const value = useContext(SyncSystemNSContext);
  const SyncSystemNSContext = useSyncSystemNSContext(); // Context (using hooks).
  console.log('SyncSystemNSContext (insite index function)=', SyncSystemNSContext);

  return (
  /*
  <LayoutFrontendMain titleCurrent={'Home title'} cphBody={()=>{
    <FrontendHome></FrontendHome>
  }}>

  </LayoutFrontendMain>
  */

    <LayoutFrontendMain titleCurrent={'Home title'}>
      <FrontendHome></FrontendHome>
    </LayoutFrontendMain>
  );
};

export default Index;
