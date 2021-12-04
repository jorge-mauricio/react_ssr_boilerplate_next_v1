'use strict';

// Import modules.
// ----------------------
import { gSystemConfig } from '../config-application'; // System configuration.
// ----------------------

module.exports = class FunctionsGeneric {
  // Return the label in the right terminal.
  // **************************************************************************************
  /**
   * Return the label in the right terminal.
   * @static
   * @param { object } objAppLabels
   * @param { string } labelName
   * @returns { string }
   * @example
   * SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageBackend.appLabels, 'labelName')
   */
  static appLabelsGet(objAppLabels: object, labelName: string): string {
    // Variables.
    // ----------------------
    let strReturn = '';
    // ----------------------

    if (labelName != null && labelName !== '' && typeof labelName !== 'undefined' && objAppLabels !== null && typeof objAppLabels !== 'undefined') {
      if (objAppLabels.hasOwnProperty(labelName)) {
        // Check if object as property.
        strReturn = objAppLabels[labelName];
        strReturn = strReturn.replace(/(?:\r\n|\r|\n)/g, '<br />');
      }
    } else {
      strReturn = '';
    }

    return strReturn;
  }
  // **************************************************************************************

  // Data treatment for displaying information.
  // **************************************************************************************
  /**
   * Data treatment for displaying information.
   * @static
   * @param { string } strContent
   * @param { string } specialInstructions db | utf8_encode | htmlentities | config-application | env (.env - environment variables) | pdf (convert to text) | json_encode (JavaScript String Encode) | url | linkStyle=ss-backend-links01
   * @return { string }
   * @example
   * SyncSystemNS.FunctionsGeneric.contentMaskRead('db', 'configSiteTile');
   */
  static contentMaskRead(strContent: string, specialInstructions: string = ''): string {
    // Variables.
    // ----------------------
    let strReturn = strContent;
    // ----------------------

    // db
    // ----------------------
    if (specialInstructions.includes('db') === true) {
      if (strReturn) {
        // Convert line breaks to html br tags.
        strReturn = strReturn.replace(/(?:\r\n|\r|\n)/g, '<br />');
      }
    }
    // ----------------------

    // config-application
    // ----------------------
    if (specialInstructions.includes('config-application') === true) {
      strReturn = strReturn;
    }
    // ----------------------

    return strReturn;
  }
  // **************************************************************************************
};
