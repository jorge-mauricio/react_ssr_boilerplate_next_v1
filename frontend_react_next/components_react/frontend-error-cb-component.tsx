'use strict';

// Import Node Modules.
// ----------------------
// Context.
// import { useContext } from "react";
import { SyncSystemNSContext } from '../components_react/syncsystem-ns-cb-context';
// import { useSyncSystemNSContext, SyncSystemNSContext } from '../components_react/syncsystem-ns-cb-context.js';

// Components - react.
// import { gSystemConfig } from '../config-application.js';
import React from 'react';
import PropTypes from 'prop-types';

// Components - next.
import Head from 'next/head';
// import Link from 'next/link';
// import fetch from 'isomorphic-fetch';

// Components - custom.
// ----------------------

// Interfaces.
interface IErrorProps {
  props?: object,
  context?: any,
  query?: object,
}

interface IErrorState {
  arrApiListingResponseJson?: any,
  dataLoaded?: boolean,
}

/**
 * Frontend Example Listing Component.
 */
class FrontendError extends React.Component<IErrorProps, IErrorState> {
  // Properties.
  objParametersQueryString: any;
  configLayoutType = 1;

  _masterPageFrontendSelect: string;

  _messageSuccess: string;
  _messageError: string;
  _messageAlert: string;

  queryDefault: string;

  titleCurrent: string;

  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  metaURLCurrent: string;

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
    // Component options.
    // configLayoutType: 1 - div layout (custom) | 11 - div layout (bootstrap) | 111 - responsive

    super(props, context);

    // Variables.
    // ----------------------
    // const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem, qs } = this.context;
    const { gSystemConfig } = this.context;
    // ----------------------

    // Properties.
    // ----------------------
    this.objParametersQueryString;
    this.configLayoutType = 1;

    this._masterPageFrontendSelect = '';

    this._messageSuccess = '';
    this._messageError = '';
    this._messageAlert = '';
    // this._nRecords = "";

    this.queryDefault = '';

    // this.objCategoriesCurrent = {};
    this.titleCurrent = '';

    this.metaTitle = '';
    this.metaDescription = '';
    this.metaKeywords = '';
    this.metaURLCurrent = '';
    // ----------------------

    // Value definition - props parameters.
    // ----------------------
    /*
    if(this.props.match.params.idParentCategories)
    {
        this._idParentCategories = this.props.match.params.idParentCategories;
    }
    */
    // ----------------------

    // Value definition - query string.
    // ----------------------
    /*
    if (this.props.query) {
      this.objParametersQueryString = this.props.query;
    }

    if (this.objParametersQueryString.masterPageFrontendSelect) {
      this._masterPageFrontendSelect = this.objParametersQueryString.masterPageFrontendSelect;
    }

    if (this.objParametersQueryString.messageSuccess) {
      this._messageSuccess = this.objParametersQueryString.messageSuccess;
    }

    if (this.objParametersQueryString.messageError) {
      this._messageError = this.objParametersQueryString.messageError;
    }

    if (this.objParametersQueryString.messageAlert) {
      this._messageAlert = this.objParametersQueryString.messageAlert;
    }
    */
    // ----------------------

    // Default query.
    if (this._masterPageFrontendSelect) {
      this.queryDefault += '&masterPageFrontendSelect=' + this._masterPageFrontendSelect;
    }

    // Bind objects, methods and functions.
    // this.objCategoriesListing = this.objCategoriesListing.bind(this);
    this.build = this.build.bind(this);
    this.headBuild = this.headBuild.bind(this);
    this.titleCurrentBuild = this.titleCurrentBuild.bind(this);

    // Build.
    // (async function () {
    (async () => {
      try {
        // await this.build();
        // this.build();
      } catch (asyncError) {
        if (gSystemConfig.configDebug === true) {
          console.error(asyncError);
        }
      } finally {
        // State creation.
        this.state = {
          dataLoaded: false,
        };
      }
    })();

    // Debug.
    if (gSystemConfig.configDebug === true) {
      // console.log('props=', props);
      // console.log('this.objParametersQueryString (frontend error)=', this.objParametersQueryString);
      // console.log('this.queryDefault=', this.queryDefault);
    }
  }
  // **************************************************************************************


  // Lifecycle method.
  // **************************************************************************************
  /**
   * Lifecycle method.
   * @return { void }
   */
  async componentDidMount(): Promise<void> {
    // Variables.
    // ----------------------
    // const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem, qs } = this.context;
    const { gSystemConfig } = this.context;
    // ----------------------

    // Logic.
    // ----------------------
    /**/
    try {
      // Main build.
      await this.build();

      // Head content.
      await this.headBuild();

      // Title content.
      await this.titleCurrentBuild();

      /*
      fetch("http:// localhost:3000/api/categories/details/813")
      .then(response => response.json())
      .then((data)=>{
          this.objCategoriesCurrent = data;

          // Define value - current category title.
          this.titleCurrent = this.objCategoriesCurrent.tblCategoriesTitle;

          // Set state.
          // this.setState({titleCurrent: "testing after fetch"});


          // Debug.
          console.log("this.titleCurrent=",this.titleCurrent);
          console.log("this.objCategoriesCurrent=",this.objCategoriesCurrent);
      });
      */

      // Check if this._idParentCategories is number. If not, search for the id based on the friendly name.

      // API - fetch data from backend.
      // let response = await fetch("http:// localhost:3000/api/categories/details/813");
      // this.objCategoriesCurrent = await response.json();
      // console.log("this.objCategoriesCurrent=",this.objCategoriesCurrent);
    } catch (asyncError) {
      if (gSystemConfig.configDebug === true) {
        console.error(asyncError);
      }
    } finally {
      // TODO:
    }
    // ----------------------

    // console.log("this.props=", JSON.stringify(this.props));
  }
  // **************************************************************************************

  // Build object´s content.
  // **************************************************************************************
  /**
   * Build object´s content.
   * @return { void }
   */
  async build(): Promise<void> {
    // Variables.
    // ----------------------
    // const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem } = this.context; // Deconstruct variables (each variable is allocated to it´s correspondent name).
    const { gSystemConfig, SyncSystemNS } = this.context;

    // let apiListingResponse: any;
    // let arrApiListingResponseJson: any;

    // let apiURLCategoriesHomeListing = ''; // working
    // let apiCategoriesHomeListingResponse; // working

    // let apiURLPublicationsHomeListing = ''; // working
    // let apiPublicationsListingHomeResponse; // working
    // ----------------------

    // Logic.
    // ----------------------
    /**/
    try {
      // Fetch API.
      // apiListingResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      // arrApiListingResponseJson = await apiListingResponse.json();


      // Value definition.
      // this.titleCurrent = this.objCategoriesCurrent.tblCategoriesTitle;
      // this.titleCurrent = SyncSystemNS.FunctionsGeneric.removeHTML01(this.objCategoriesCurrent.ocdRecord.tblCategoriesTitle);
      // this.titleCurrent = SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, 'frontendHomeTitleMain');
      this.titleCurrent = 'Error 404';
      // console.log("this.objCategoriesCurrent=",this.objCategoriesCurrent);

      // idParentCategories = this.props.match.params.idParentCategories;

      // this.metaTitle = SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "frontendHomeTitleMain") + " - " + this.titleCurrent; // Bellow 160 characters.
      this.metaTitle = SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, 'configSiteTile');
      this.metaTitle += ' - ' + this.titleCurrent; // Bellow 160 characters.

      // this.metaDescription = SyncSystemNS.FunctionsGeneric.removeHTML01(this.objCategoriesCurrent.ocdRecord.tblCategoriesMetaDescription); // Bellow 100 characters.
      this.metaDescription = SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, 'configSiteDescription'); // Bellow 100 characters.

      // this.metaKeywords = SyncSystemNS.FunctionsGeneric.removeHTML01(this.objCategoriesCurrent.ocdRecord.tblCategoriesKeywordsTags); // Bellow 60 characters.
      this.metaKeywords = SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, 'configSiteKeywords'); // Bellow 60 characters.

      this.metaURLCurrent = gSystemConfig.configSystemURL + '/';

      // this.objCategoriesHomeListing = this.objCategoriesHomeJson.oclRecords; // working
      // this.arrCategoriesHomeListing = this.objCategoriesHomeJson.oclRecords.resultsCategoriesListing; // working

      // this.objPublicationsHomeListing = this.objPublicationsListingHomeJson.oplRecords; // working
      // this.arrPublicationsHomeListing = this.objPublicationsListingHomeJson.oplRecords.resultsPublicationsListing; // working

      // Debug.
      if (gSystemConfig.configDebug === true) {
        console.log('gSystemConfig.configSystemURL=', gSystemConfig.configSystemURL);
        // console.log('process.env.REACT_APP_CONFIG_SYSTEM_URL=', process.env.REACT_APP_CONFIG_SYSTEM_URL);
        // console.log('process.env.NEXT_PUBLIC_CONFIG_PORT=', process.env.NEXT_PUBLIC_CONFIG_PORT);
        // console.log('process.env.NEXT_PUBLIC_CONFIG_PORT=', process.env.NEXT_PUBLIC_CONFIG_PORT);
      }
    } catch (asyncError) {
      if (gSystemConfig.configDebug === true) {
        console.error(asyncError);
      }
      // arrApiListingResponseJson = [];
    } finally {
      // Update state.
      // this.setState({ arrApiListingResponseJson: arrApiListingResponseJson });

      // this.setState({ objCategoriesHomeListing: this.objCategoriesHomeListing }); // working
      // this.setState({ arrCategoriesHomeListing: this.arrCategoriesHomeListing }); // working

      // objPublicationsHomeListing: this.objPublicationsHomeListing,
      // arrPublicationsHomeListing: this.arrPublicationsHomeListing,

      // Note: Place on the last part of the logic.
      this.setState({ dataLoaded: true });

      // Change state of in context.
      // this.context.frontendHomeLoaded = true;
    }
    // ----------------------
  }
  // **************************************************************************************

  // Head build.
  // **************************************************************************************
  /**
   * Head build.
   * @return { void }
   */
  async headBuild(): Promise<void> {
    /*
    // Variables.
    const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem } = this.context; // Deconstruct variables (each variable is allocated to it´s correspondent name).

    // Head elements.
    // document.title = this.titleCurrent;
    document.title = this.metaTitle;

    // Meta tags.
    document.querySelector('meta[name="title"]').setAttribute('content', this.metaTitle);
    document.querySelector('meta[name="description"]').setAttribute('content', this.metaDescription);
    document.querySelector('meta[name="keywords"]').setAttribute('content', this.metaKeywords);

    document.querySelector('meta[property="og:title"]').setAttribute('content', this.metaTitle);
    document.querySelector('meta[property="og:type"]').setAttribute('content', 'website');
    document.querySelector('meta[property="og:url"]').setAttribute('content', this.metaURLCurrent);
    document.querySelector('meta[property="og:description"]').setAttribute('content', this.metaDescription);

    // if(this.objCategoriesCurrent.ocdRecord.tblCategoriesImageMain != "")
    // {
    // document.querySelector('meta[property="og:image"]').setAttribute("content", gSystemConfig.configSystemURL + "/" +  gSystemConfig.configDirectoryFilesSD + "/" + this.objCategoriesCurrent.ocdRecord.tblCategoriesImageMain);
    // }else{
    document.querySelector('meta[property="og:image"]').setAttribute('content', gSystemConfig.configSystemURL + '/' + gSystemConfig.configDirectoryFilesLayoutSD + '/' + 'icon-logo-og.png');
    // }
    // document.querySelector('meta[property="og:image:secure_url"]').setAttribute("content", "Example with image url secure");
    document.querySelector('meta[property="og:image:alt"]').setAttribute('content', this.metaTitle);

    // document.querySelector('meta[property="og:locale"]').setAttribute("content", gSystemConfig.configBackendLanguage);
    document.querySelector('meta[property="og:locale"]').setAttribute('content', SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, 'configFrontendLanguage'));

    // document.querySelector('meta[property="og:title"]').setAttribute("content", "Example with title meta tag");

    // document.getElementsByTagName("meta")["og:title"].content = "Example with title meta tag";
    // document.head.querySelector('meta[name=og:title]').content = 'Example with title meta tag';

    // Debug.
    // console.log("this.objCategoriesListing=",this.objCategoriesListing);
    */
  }
  // **************************************************************************************

  // Current title build.
  // **************************************************************************************
  /**
   * Current title build.
   * @return { void }
   */
  async titleCurrentBuild(): Promise<void> {
    // Variables.
    // ----------------------
    // const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem } = this.context; // Deconstruct variables (each variable is allocated to it´s correspondent name).
    const { FunctionsSyncSystem } = this.context; // Deconstruct variables (each variable is allocated to it´s correspondent name).
    // ----------------------

    // Title Current.
    FunctionsSyncSystem.elementMessage01('titleCurrent', this.titleCurrent);
    // FunctionsSyncSystem.elementMessage01('titleCurrentMobile', this.titleCurrent);
  }
  // **************************************************************************************

  // Render output.
  // **************************************************************************************
  /**
   * Render output.
   * @return { JsxElement }
   */
  render(): JSX.Element {
    // Variables.
    // ----------------------
    // const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem, HTMLReactParser, SyncSystemRC } = this.context;
    // const { gSystemConfig, SyncSystemNS, HTMLReactParser, frontendHomeLoaded } = this.context;
    const { gSystemConfig, SyncSystemNS, frontendHomeLoaded } = this.context;

    const { arrApiListingResponseJson } = this.state;

    // let objCategoriesHome105; // working
    // let objPublicationsHome236; // working
    // ----------------------

    // Check if data is loaded.
    // ----------------------
    if (this.state.dataLoaded === false) {
      if (gSystemConfig.configDebug === true) {
        console.log('Still loading data (frontend-error-cb-component).');
      }

      /*
      return (
        <SyncSystemRC.FrontendElementsLoading configLayoutType={1}>
        </SyncSystemRC.FrontendElementsLoading>
      );
      */
      return (
        <React.Fragment>
        </React.Fragment>
      );
    }
    // ----------------------

    // Value definition.
    // ----------------------
    // ----------------------

    // Debug.
    if (gSystemConfig.configDebug === true) {
      // console.log('arrApiListingResponseJson=', arrApiListingResponseJson); // working
    }

    // Output.
    return (
      <React.Fragment>
        <Head>
          <title>
            { this.titleCurrent }
          </title>
          <meta name="title" content={ this.metaTitle } />
          <meta name="description" content={ this.metaDescription } />
          <meta name="keywords" content={ this.metaKeywords } />

          <meta property="og:title" content={ this.metaTitle } />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={ this.metaURLCurrent } />
          <meta property="og:description" content={ this.metaDescription } />

          <meta property="og:image" content={ gSystemConfig.configSystemURL + '/' + gSystemConfig.configDirectoryFilesLayoutSD + '/' + 'icon-logo-og.png' } />
          <meta property="og:image:alt" content={ this.metaTitle } />

          <meta property="og:locale" content={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, 'configFrontendLanguage') } />
        </Head>
        <React.Fragment>
          <div className="ss-frontend-error">
            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, 'statusMessageError404') }
          </div>
        </React.Fragment>
      </React.Fragment>
    );
  }
  // **************************************************************************************
}

export default FrontendError;
