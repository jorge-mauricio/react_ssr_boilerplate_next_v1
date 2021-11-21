'use strict';

// Import Node Modules.
// ----------------------
const gSystemConfig = require('../config-application.js'); // System configuration.
// ----------------------

module.exports = class FunctionsGeneric {
  // Return the label in the right terminal.
  // **************************************************************************************
  /**
   * Return the label in the right terminal.
   * @static
   * @param {object} objAppLabels
   * @param {string} labelName
   * @returns {string}
   * @example
   * SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageBackend.appLabels, "labelName")
   */
  static appLabelsGet(objAppLabels, labelName) {
    // Variables.
    // ----------------------
    let strReturn = '';
    // ----------------------

    if (labelName != null && labelName !== '' && typeof labelName !== 'undefined' && objAppLabels !== null && objAppLabels !== '' && typeof objAppLabels !== 'undefined') {
      if (objAppLabels.hasOwnProperty(labelName)) {
        // check if object as property
        strReturn = objAppLabels[labelName];
        strReturn = strReturn.replace(/(?:\r\n|\r|\n)/g, '<br />');
      }
      // strReturn = "test app label"; // debug.
    } else {
      strReturn = '';
    }

    // Debug.
    // strReturn = objAppLabels;

    return strReturn;
  }
  // **************************************************************************************

  // Data treatment for displaying information.
  // **************************************************************************************
  /**
   * Data treatment for displaying information.
   * @static
   * @param {string} strContent
   * @param {string} specialInstructions
   * @return {string}
   * @example
   *
   */
  static contentMaskRead(strContent, specialInstructions = '') {
    // specialInstructions: db | utf8_encode | htmlentities | config-application | env (.env - environment variables) | pdf (convert to text) | json_encode (JavaScript String Encode) | url | linkStyle=ss-backend-links01

    // Variables.
    // ----------------------
    let strReturn = strContent;
    // ----------------------

    // db
    // ----------------------
    if (specialInstructions.includes('db') === true) {
      if (strReturn) {
        // strReturn = strContent;

        // Convert line breaks to html br tags.
        // ref: https:// stackoverflow.com/questions/784539/how-do-i-replace-all-line-breaks-in-a-string-with-br-tags
        // strReturn = strContent.replace(/(?:\r\n|\r|\n)/g, "<br />");
        strReturn = strReturn.replace(/(?:\r\n|\r|\n)/g, '<br />');
      }
    }
    // ----------------------

    // config-application
    // ----------------------
    // if(specialInstructions == "config-application")
    if (specialInstructions.includes('config-application') === true) {
      // strReturn = strContent;
      strReturn = strReturn;
    }
    // ----------------------

    return strReturn;
  }
  // **************************************************************************************
};
