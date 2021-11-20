import React, { Component } from 'react';
// import Link from 'next/link';

// Components.
import LayoutFrontendMain from '../app_views/layout-frontend-main-cb-component.js';


class FrontendHome extends Component {
  // Constructor.
  // **************************************************************************************
  constructor(props, context) {
    super(props, context);
  }
  // **************************************************************************************
  
  // Lifecycle method.
  // **************************************************************************************
  async componentDidMount() {
    // Logic.
    // ----------------------
    /**/
    try {
      // Main build.
      await this.build();

      // Head content.
      //await this.headBuild();

      // Title content.
      //await this.titleCurrentBuild();



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
  render() {
    // Output.
    return (
      <React.Fragment>
        <h1>
          Home Page
        </h1>
        <div>
          Welcome to the home page 22
        </div>
      </React.Fragment>
    );
  }
  // **************************************************************************************
}

const Index = () => {
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
