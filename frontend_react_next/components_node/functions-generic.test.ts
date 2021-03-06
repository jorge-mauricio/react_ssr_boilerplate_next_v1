'use strict';

// Import modules.
// ----------------------
//import { gSystemConfig } from '../config-application'; // System configuration.
//import { SyncSystemNS } from './syncsystem-ns';

const { gSystemConfig } = require('../config-application'); //System configuration.
// const FunctionsGeneric = require('./functions-generic'); //Node JS import method supported by jest.
const SyncSystemNS = require('./syncsystem-ns'); //Node JS import method supported by jest.
// ----------------------

//appLabelsGet unit test.
//**************************************************************************************
//With data.
test('SyncSystemNS.FunctionsGeneric.appLabelsGet: ' + 
SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageBackend.appLabels, 'testOutputString1') + ' (Development)', () => {
    //Test with data full.
    //----------------------
    //Build the test.
    //let testData = FunctionsGeneric.fileExtensionGet('.xyz');
    let testData = SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageBackend.appLabels, 'layoutDevelopment');

    //Expected result.
    expect(testData).toBe('Development');
    //----------------------
}); //2 arguments - description, call to function to test.
//}, 10000); //With set timeout changed.

//Without data.
test('SyncSystemNS.FunctionsGeneric.appLabelsGet: ' + 
    SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageBackend.appLabels, 'testOutputEmpty1'), () => {
    //Test with data empty.
    //----------------------
    //Build the test.
    //let testDataEmpty = FunctionsGeneric.fileExtensionGet('');
    let testDataEmpty = SyncSystemNS.FunctionsGeneric.appLabelsGet('', '');

    //Expected result.
    expect(testDataEmpty).toBe('');
    //----------------------


    //Test with data null.
    //----------------------
    //Build the test.
    //let testDataNull = FunctionsGeneric.fileExtensionGet(null);
    let testDataNull = SyncSystemNS.FunctionsGeneric.appLabelsGet(null, null);

    //Expected result.
    expect(testDataNull).toBe('');
    //----------------------


    //Test with data undefinied.
    //----------------------
    //Build the test.
    //let testDataUndefined = FunctionsGeneric.fileExtensionGet();
    let testDataUndefined = SyncSystemNS.FunctionsGeneric.appLabelsGet(undefined , undefined);

    //Expected result.
    expect(testDataUndefined).toBe('');
    //----------------------
});
//**************************************************************************************

//contentMaskRead unit test.
//**************************************************************************************
//With data.
test('SyncSystemNS.FunctionsGeneric.contentMaskRead: ' + 
    SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageBackend.appLabels, 'testOutputString1') + ' (content<br />test).', () => {
    //Test with data full.
    //----------------------
    //Build the test.
    let testData_db = SyncSystemNS.FunctionsGeneric.contentMaskRead('content\ntest', 'db');

    //Expected result.
    expect(testData_db).toBe('content<br />test');
    //----------------------


    //Test with data full.
    //----------------------
    //Build the test.
    let testData_config_application = SyncSystemNS.FunctionsGeneric.contentMaskRead('content test', 'config-application');

    //Expected result.
    expect(testData_config_application).toBe('content test');
    //----------------------
}); //2 arguments - description, call to function to test.
//}, 10000); //With set timeout changed.

//Without data.
test('SyncSystemNS.FunctionsGeneric.contentMaskRead: ' + 
    SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageBackend.appLabels, 'testOutputEmpty1'), () => {
    //Test with data empty.
    //----------------------
    //Build the test.
    let testDataEmpty_db = SyncSystemNS.FunctionsGeneric.contentMaskRead('', 'db');

    //Expected result.
    expect(testDataEmpty_db).toBe('');
    //----------------------


    //Test with data null.
    //----------------------
    //Build the test.
    let testDataNull = SyncSystemNS.FunctionsGeneric.contentMaskRead(null, null);

    //Expected result.
    expect(testDataNull).toBe('');
    //----------------------


    //Test with data undefinied.
    //----------------------
    //Build the test.
    let testDataUndefined = SyncSystemNS.FunctionsGeneric.contentMaskRead(undefined , undefined);

    //Expected result.
    expect(testDataUndefined).toBe('');
    //----------------------
});
//**************************************************************************************

export {};
