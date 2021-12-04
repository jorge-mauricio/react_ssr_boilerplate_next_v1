'use strict';

// Author Information and Copyright License:
// **************************************************************************************
/*
SyncSystem – less code, more logic. A product owned by the company Planejamento Visual – Arte, Tecnologia e Comunicação – all rights reserved.

Development and conception carried out by Jorge Mauricio (JM) – Full Stack Web Developer / Designer and company’s head partner.

Any modification or implementation in the github code must be informed / consulted and approved with the company or the author. The code is free for use commercially and personally, without the need of written or verbal authorization.

The developer provides professional training for better understanding of its architecture and use of the code. Price quotes can be requested through the website.

Website / contact:
http://fullstackwebdesigner.com
*/
// **************************************************************************************

// Import Node Modules.
// ----------------------
// const os = require("os"); // utility to get hostname // ref: https:// nodejs.org/api/os.html#os_os_hostname
// ----------------------

// Create a namespace to help export all variables / properties.
let gSystemConfig: any = {};

// NodeJS configuration.
// **************************************************************************************
gSystemConfig.configDebug = false; // true (debug mode) | false (production mode)
// **************************************************************************************

// General configuration.
// **************************************************************************************
// Basic information.
// ----------------------
gSystemConfig.configSystemClientName = 'Planejamento Visual';
gSystemConfig.configSystemClientDocument = ''; // SSN | CPF
gSystemConfig.configSystemClientCompanyNameLegal = '';
gSystemConfig.configSystemClientCompanyDocument = ''; // CPNJ
gSystemConfig.configSystemClientCompanyDocument1 = ''; // I.M.
gSystemConfig.configSystemClientCompanyDocument2 = ''; // I.E.
gSystemConfig.configSystemClientAddress = '';
gSystemConfig.configSystemClientAddressNumber = '';
gSystemConfig.configSystemClientAddressComplement = '';
gSystemConfig.configSystemClientNeighborhood = '';
gSystemConfig.configSystemClientDistrict = '';
gSystemConfig.configSystemClientCounty = '';
gSystemConfig.configSystemClientCity = '';
gSystemConfig.configSystemClientState = '';
gSystemConfig.configSystemClientCountry = '';
gSystemConfig.configSystemClientZipCode = '';
gSystemConfig.configSystemClientPhone = '';
gSystemConfig.configSystemClientCel = '+1 999-222-3333';
gSystemConfig.configSystemClientEmail = 'contact@domain.com';

gSystemConfig.configDevSite = 'http://www.fullstackwebdesigner.com';
gSystemConfig.configCopyrightYear = '2021';

// gSystemConfig.configSystemURL = "http:// localhost:3000"; // http:// multiplatformv1.syncsystem.com.br
gSystemConfig.configSystemURL = process.env.CONFIG_SYSTEM_URL; // http:// multiplatformv1.syncsystem.com.br
// gSystemConfig.configSystemURL = process.env.REACT_APP_CONFIG_SYSTEM_URL; // http:// multiplatformv1.syncsystem.com.br
// gSystemConfig.configSystemURL = window.location.origin; // http:// multiplatformv1.syncsystem.com.br
// gSystemConfig.configSystemURLSSL = "http:// localhost:3000"; // http:// multiplatformv1.syncsystem.com.br
gSystemConfig.configSystemURLSSL = process.env.CONFIG_SYSTEM_URL_SSL; // http:// multiplatformv1.syncsystem.com.br
// gSystemConfig.configSystemURLSSL = process.env.REACT_APP_CONFIG_SYSTEM_URL_SSL; // http:// multiplatformv1.syncsystem.com.br
// gSystemConfig.configSystemURLSSL = window.location.origin; // http:// multiplatformv1.syncsystem.com.br

gSystemConfig.configAPIURL = gSystemConfig.configSystemURLSSL; // process.env.CONFIG_API_URL;
gSystemConfig.configURLFrontendReact = process.env.CONFIG_URL_FRONTEND_REACT;

gSystemConfig.configSystemURLImages = '/'; // ".." = relative path | "/" = root | http:// www.nomedodominio.com.br = absolute path | remote (AWS s3): https:// multiplatformnodev1.s3.sa-east-1.amazonaws.com (note: gSystemConfig.configDirectoryFilesSD has to be "")
// gSystemConfig.configSystemURLImages = "https:// multiplatformnodev1.s3.sa-east-1.amazonaws.com";
//gSystemConfig.configSystemURLImagesRemote = 'https://multiplatformnodev1.s3.sa-east-1.amazonaws.com'; // maybe it´s not needed
gSystemConfig.configFrontendReactURLImages = gSystemConfig.configSystemURL + '/';
// gSystemConfig.configFrontendReactURLImages = "https:// multiplatformnodev1.s3.sa-east-1.amazonaws.com";

gSystemConfig.configFrontendDefaultView = 'frontend_react'; // frontend_node | frontend_react
gSystemConfig.configFrontendMobileDefaultView = 'frontend_node_mobile';
// ----------------------

// DB especial configuration.
// ----------------------
/*
Moved to .env file.
const configSystemDBTablePrefix = "prefix_ssmv1_";
const configSystemDBType = 2; // 2 - MySQL | 3 - SQL Server
const enableSystemDBSizeOptimize = 0; // 0-disable (all fields created) | 1-enable (only enabled fields created on database setup)
*/

// Table names.
gSystemConfig.configSystemDBTableCounter = 'counter';
gSystemConfig.configSystemDBTableCategories = 'categories';
gSystemConfig.configSystemDBTableFiles = 'files';
gSystemConfig.configSystemDBTableContent = 'content';
gSystemConfig.configSystemDBTableProducts = 'products';
gSystemConfig.configSystemDBTablePublications = 'publications';
gSystemConfig.configSystemDBTableRegisters = 'registers';
gSystemConfig.configSystemDBTableQuizzes = 'quizzes';
gSystemConfig.configSystemDBTableQuizzesOptions = 'quizzes_options';
gSystemConfig.configSystemDBTableQuizzesLog = 'quizzes_log';
gSystemConfig.configSystemDBTableForms = 'forms';
gSystemConfig.configSystemDBTableFormsFields = 'forms_fields';
gSystemConfig.configSystemDBTableFormsFieldsOptions = 'forms_fields_options';
gSystemConfig.configSystemDBTableFiltersGeneric = 'filters_generic';
gSystemConfig.configSystemDBTableFiltersGenericBinding = 'filters_generic_binding';
gSystemConfig.configSystemDBTableUsers = 'users';
// ----------------------

// Media configuration.
// ----------------------
gSystemConfig.configImagePopup = 4; // 0 - no pop-up | 1 - LightBox 2 (JQuery) | 3 - fancybox (JQuery) | 4 - GLightbox (vanilla js)
gSystemConfig.configImagePopupBGColor = '#000000';
gSystemConfig.configImagePopupW = '890';
gSystemConfig.configImagePopupBGColor = '530';
// ----------------------

// Directories configuration.
// ----------------------
gSystemConfig.configPhysicalPathRoot = __dirname;

// gSystemConfig.configDirectoryRootPhysical = __dirname;
/**/
gSystemConfig.configDirectoryAdmin = 'admin_node';
// gSystemConfig.configDirectorySystem = 'backend_node'; // trash
gSystemConfig.configDirectoryBackend = 'backend_node';
// gSystemConfig.configDirectorySystemRoute = "system"; // trash
gSystemConfig.configDirectoryComponents = 'components_node';

gSystemConfig.configDirectoryFilesVisualization = 'app_files_public';
gSystemConfig.configDirectoryFiles = 'app_files_public';
gSystemConfig.configDirectoryFilesLayout = 'app_files_layout';
gSystemConfig.configDirectoryFonts = 'app_fonts';
gSystemConfig.configDirectoryResources = 'app_resources';
gSystemConfig.configDirectoryStyles = 'app_styles';
gSystemConfig.configDirectoryViews = 'app_views';
gSystemConfig.configDirectoryDist = 'dist'; // webpack distribution folder files (production / minifying)
gSystemConfig.configDirectoryBuildReact = 'build'; // webpack distribution folder files - react (production / minifying)
gSystemConfig.configDirectoryBuildReactClient = 'public'; // webpack distribution folder files - react client (production / minifying)
gSystemConfig.configDirectoryJS = 'app_js';

// Upload directories.
gSystemConfig.configDirectoryFilesUpload = gSystemConfig.configPhysicalPathRoot + '/' + gSystemConfig.configDirectoryFilesVisualization;
// gSystemConfig.configDirectoryFilesUpload = gSystemConfig.configPhysicalPathRoot + "\\" + gSystemConfig.configDirectoryFilesVisualization;
// ----------------------

// Static directories configuration (public alias).
// ----------------------
gSystemConfig.configFrontendDefaultViewSD = 'frontend';
gSystemConfig.configDirectorySystemSD = 'backend';
gSystemConfig.configDirectoryAdminSD = 'admin';

// gSystemConfig.configDirectoryFilesSD = ""; // "" - when using remote file storage
gSystemConfig.configDirectoryFilesSD = 'files'; // "" - when using remote
gSystemConfig.configDirectoryFilesLayoutSD = 'files-layout';
gSystemConfig.configDirectoryFontsSD = 'fonts';
gSystemConfig.configDirectoryStylesSD = 'css';
gSystemConfig.configDirectoryJSSD = 'js';
gSystemConfig.configDirectoryDistSD = 'dist';
gSystemConfig.configDirectoryBuildReactSD = 'build'; // TODO: Maybe change to frontend_react
gSystemConfig.configDirectoryBuildReactClientSD = 'public';
// ----------------------

// Routes configuration.
// ----------------------
gSystemConfig.configRouteAPI = 'api';
gSystemConfig.configRouteAPIActionEdit = 'edit';
gSystemConfig.configRouteAPIActionSend = 'send';
gSystemConfig.configRouteAPIActionLog = 'log';
gSystemConfig.configRouteAPIDetails = 'details';
gSystemConfig.configRouteAPIRecords = 'records';

gSystemConfig.configRouteAPICategories = 'categories';
gSystemConfig.configRouteAPIFiles = 'files';
gSystemConfig.configRouteAPIContent = 'content';
gSystemConfig.configRouteAPIProducts = 'products';
gSystemConfig.configRouteAPIPublications = 'publications';
gSystemConfig.configRouteAPIRegisters = 'registers';
gSystemConfig.configRouteAPIQuizzes = 'quizzes';
gSystemConfig.configRouteAPIQuizzesOptions = 'quizzes-options';
gSystemConfig.configRouteAPIForms = 'forms';
gSystemConfig.configRouteAPIFormsFields = 'forms-fields';
gSystemConfig.configRouteAPIFormsFieldsOptions = 'forms-fields-options';
gSystemConfig.configRouteAPIFiltersGeneric = 'filters-generic';
gSystemConfig.configRouteAPIUsers = 'users';
gSystemConfig.configRouteAPIAuthentication = 'authentication';
gSystemConfig.configRouteAPILogin = 'login';

gSystemConfig.configRouteBackend = 'system';
gSystemConfig.configRouteBackendLogin = 'login';
gSystemConfig.configRouteBackendLogOff = 'logoff'; // TODO: change to logoff.
gSystemConfig.configRouteBackendLoginUsers = 'login-users';
// gSystemConfig.configRouteBackendLogOffUsers = "logoff-users";
gSystemConfig.configRouteBackendLogOffUsersRoot = 'logoff-users-root'; // TODO: change to logoff.
gSystemConfig.configRouteBackendDashboard = 'dashboard'; // main

gSystemConfig.configRouteBackendActionEdit = 'edit';
gSystemConfig.configRouteBackendDetails = 'details';
gSystemConfig.configRouteBackendRecords = 'records';
gSystemConfig.configRouteBackendCategories = 'categories';
gSystemConfig.configRouteBackendFiles = 'files';
gSystemConfig.configRouteBackendContent = 'content';
gSystemConfig.configRouteBackendProducts = 'products';
gSystemConfig.configRouteBackendPublications = 'publications';
gSystemConfig.configRouteBackendRegisters = 'registers';
gSystemConfig.configRouteBackendQuizzes = 'quizzes';
gSystemConfig.configRouteBackendQuizzesOptions = 'quizzes-options';
gSystemConfig.configRouteBackendForms = 'forms';
gSystemConfig.configRouteBackendFormsFields = 'forms-fields';
gSystemConfig.configRouteBackendFormsFieldsOptions = 'forms-fields-options';
gSystemConfig.configRouteBackendFiltersGeneric = 'filters-generic';
gSystemConfig.configRouteBackendUsers = 'users';

gSystemConfig.configRouteFrontend = 'en'; // (blank) - root | en
gSystemConfig.configRouteFrontendMobile = 'en-mobile'; // (blank) - responsive |  // NOTE: only in use if layout not responsive

gSystemConfig.configRouteFrontendActionEdit = 'edit';
gSystemConfig.configRouteFrontendActionSend = 'send';
gSystemConfig.configRouteFrontendDetails = 'details';
gSystemConfig.configRouteFrontendRecords = 'records';

gSystemConfig.configRouteFrontendCategories = 'categories';
gSystemConfig.configRouteFrontendFiles = 'files';
gSystemConfig.configRouteFrontendContent = 'content';
gSystemConfig.configRouteFrontendForms = 'forms';
gSystemConfig.configRouteFrontendProducts = 'products';
gSystemConfig.configRouteFrontendPublications = 'publications';
gSystemConfig.configRouteFrontendRegisters = 'registers';
gSystemConfig.configRouteFrontendQuizzes = 'quizzes';
gSystemConfig.configRouteFrontendLogin = 'login';
gSystemConfig.configRouteFrontendLogoff = 'logoff';

gSystemConfig.configRouteFrontendDashboard = 'dashboard';
gSystemConfig.configRouteFrontendDashboardCategories = 'dashboard-categories';
gSystemConfig.configRouteFrontendDashboardFiles = 'dashboard-files';
gSystemConfig.configRouteFrontendDashboardContent = 'dashboard-content';
gSystemConfig.configRouteFrontendDashboardProducts = 'dashboard-products';
gSystemConfig.configRouteFrontendDashboardPublications = 'dashboard-publications';
gSystemConfig.configRouteFrontendDashboardRegisters = 'dashboard-registers';
gSystemConfig.configRouteFrontendDashboardQuizzes = 'dashboard-quizzes';
// ----------------------

// Cryptography.
// ----------------------
gSystemConfig.configCookieSetType = 1; // 0 - disable (without path - directory) | 1 - enable (set with path - directory)
gSystemConfig.configCookieDirectory = '/'; //  / - full site

gSystemConfig.configCookiePrefix = 'ss';
gSystemConfig.configCookiePrefixUserRoot = 'user_root';
gSystemConfig.configCookiePrefixUser = 'user';

gSystemConfig.configCookieDefaultOptions = {
  path: gSystemConfig.configCookieDirectory,
  overwrite: true,
  // domain: '127.0.0.1:4444',
  // secure: process.env.NODE_ENV === 'production'? true: false, / Forces to use https in production.
  // expires: new Date(Date.now() + 900000),
  // maxAge: 1000 * 60 * 10,
  httpOnly: true, //  You can't access these tokens in the client's javascript.
}; // ref: https:// alligator.io/nodejs/express-cookies/
gSystemConfig.configCookieDeleteDefaultOptions = {
  path: gSystemConfig.configCookieDirectory,
  overwrite: true,
  // domain: '127.0.0.1:4444',
  // secure: process.env.NODE_ENV === 'production'? true: false, / Forces to use https in production.
  expires: new Date(),
  maxAge: 0,
  httpOnly: true, //  You can't access these tokens in the client's javascript.
}; // ref: https:// alligator.io/nodejs/express-cookies/

gSystemConfig.configSessionBackendTimeout = '1440';
// ----------------------

// Cryptography.
// ----------------------
gSystemConfig.configCryptType = 2; // 0 - no cryptography | 1 - hash (doesn´t allow decryptography) | 2 - Data (allows decryptography)
gSystemConfig.configCryptHash = 23; // 23 - Crypto Module
gSystemConfig.configCryptData = 26; // 23 - Crypto Module algorithm: aes-128-cbc and simple key password | 24 - Crypto Module algorithm: aes-128-cbc - 16 byte key and 16 byte iv | 26 - Crypto Module algorithm: aes-256-cbc - 32 byte key and 16 byte iv

gSystemConfig.configCryptKey = 'system_crypt_key'; // generate key data
gSystemConfig.configCryptKey16Byte = '95f19c6f734f9f4fdc1d4258277a1c7d'; // not in use
gSystemConfig.configCryptKey32Byte = 'd0a7e7997b6d5fcd55f4b5c32611b87cd923e88837b63bf2941ef819dc8ca282'; // not in use
gSystemConfig.configCryptiv16Byte = 'bd1e41c05f861867e225d5d998f10813'; // not in use
gSystemConfig.configCryptiv32Byte = '21f534b09237b9716ab561149367ebb8d2d0ab0e0bfec395baf7ba112cb2872f'; // not in use
gSystemConfig.configCryptSalt = 'syncsystem'; // generate a salt data // TODO: think of a way to change salt and key and generate a new master user password
// ----------------------

// Image configuration.
// ----------------------
gSystemConfig.configUploadType = 1; // 1 - Save Files Locally | 2 - Amazon S3
gSystemConfig.configUploadComponent = 1; // 1 - formidable | 2 - multer (TODO) | 3 - multyparty (TODO)
gSystemConfig.configImageComponent = 1; // 1 - sharp
gSystemConfig.configImageQuality = 100; // image quality percentage on resizing
gSystemConfig.configImageFormats = '.bmp, .gif, .jpg, .jpeg, .png'; // formats allowed for image resizing

// Image size configuration.
gSystemConfig.enableDefaultImageSize = 1; // 0 - disable (image sizes different for each table) | 1 - enable (default image sizes)

// prefix;w;h
gSystemConfig.configArrDefaultImageSize = ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrCategoriesImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrFilesImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrContentImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrProductsImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrPublicationsImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrRegistersImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrQuizzesImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrQuizzesOptionsImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrFormsFieldsOptionsImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrFiltersGenericImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrUsersImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
// ----------------------

// e-mail configuration.
// ----------------------
gSystemConfig.configEmailComponent = 11; // 11 - nodemailer
gSystemConfig.configEmailFormat = 1; // 0 - text | 1 - HTML
// ----------------------

// APIs.
// ----------------------
// .env
// gSystemConfig.configAPIKeyInternal = "createSecretPassword";
gSystemConfig.configAPIKeySystem = 'createSecretPassword'; // Note: for node deploy, value must be hard coded (TODO: Reaserch architecture to retrieve server variables .env in react).
// gSystemConfig.configAPIKeySystem = process.env.CONFIG_API_KEY_SYSTEM;
// ----------------------
// **************************************************************************************

// Global system configuration.
// **************************************************************************************
gSystemConfig.configBackendTemplateEngine = 1; // 1 - EJS

gSystemConfig.configBackendTextBox = 17; // 1 - no formatting | 2 - basic formatting (CKEditor) | 3 - advanced formatting (CKEditor) | 4 - basic formatting (Ajax HTMLEditorExtender) | 5 - advanced formatting (Ajax HTMLEditorExtender) | 6 - formatting (Ajax HTMLEditor) | 7 - advanced formatting (Ajax HTMLEditor) | 11 - basic (CLEditor) | 12 - advanced formatting (CLEditor) | 13 - basic (Quill) | 14 - advanced formatting (Quill) | 15 - basic (FroalaEditor) | 16 - advanced formatting (FroalaEditor) | 17 basic (TinyMCE) | 18 - advanced formatting (TinyMCE)
gSystemConfig.configFrontendTextBox = 1; // 1 - no formatting | 2 - basic formatting (CKEditor) | 3 - advanced formatting (CKEditor) | 4 - basic formatting (Ajax HTMLEditorExtender) | 5 - advanced formatting (Ajax HTMLEditorExtender) | 6 - formatting (Ajax HTMLEditor) | 7 - advanced formatting (Ajax HTMLEditor) | 11 - basic (CLEditor) | 12 - advanced formatting (CLEditor) | 13 - basic (Quill) | 14 - advanced formatting (Quill) | 15 - basic (FroalaEditor) | 16 - advanced formatting (FroalaEditor) | 17 basic (TinyMCE) | 18 - advanced formatting (TinyMCE)

gSystemConfig.configSystemTimeZone = 'America/Sao_Paulo'; // America/Sao_Paulo (pt-BR) | Atlantic/South_Georgia (en-US) | America/New_York (en-US)  | (en-GB)
gSystemConfig.configBackendLanguage = 'en_US'; //  en_US | pt_BR - DELETE - moved to language (check to see if node code uses)
gSystemConfig.configFrontendLanguage = 'en_US'; //  en_US | pt_BR

gSystemConfig.configBackendDateFormat = 1; // 1 - portuguese dd/mm/yyyy | 2 - britanic mm/dd/yyyy
gSystemConfig.configBackendDateFieldType = 11; // 0 - simple field | 1 - JQuery DatePicker | 2 - dropdown menu | 11 - js-datepicker (https:// www.npmjs.com/package/js-datepicker)
gSystemConfig.configFrontendDateFormat = 1; // 1 - portuguese dd/mm/yyyy | 2 - britanic mm/dd/yyyy
gSystemConfig.configFrontendDateFieldType = 1; // 0 - simple field | 1 - JQuery DatePicker | 2 - dropdown menu

// Currency.
gSystemConfig.configSystemCurrency = 'R$'; // R$ | $ | € | £
gSystemConfig.configSystemWeight = 'g'; // g | ounces (1 pound -> 16 ounces)
gSystemConfig.configSystemWeight2 = 'kg'; // kg | Pounds (453.6 grams)
gSystemConfig.configSystemHeight = 'ft'; // ft | m
gSystemConfig.configSystemMetric = 'm²'; // m² | ft²
gSystemConfig.configSystemMetricDistance = 'KM'; // KM | MI
// **************************************************************************************

// Languages.
// **************************************************************************************
// const appLabels = require("./app_resources/language-en-us.js");

// gSystemConfig.languageFrontend = appLabels; // working
// gSystemConfig.configLanguageFrontend = require('./' + gSystemConfig.configDirectoryResources + '/language-en-us.js');
gSystemConfig.configLanguageFrontend = require('./' + gSystemConfig.configDirectoryResources + '/language-en-us');
// gSystemConfig.languageBackend = appLabels; // working
// gSystemConfig.configLanguageBackend = require('./' + gSystemConfig.configDirectoryResources + '/language-en-us.js');
gSystemConfig.configLanguageBackend = require('./' + gSystemConfig.configDirectoryResources + '/language-en-us');
// **************************************************************************************

// Content - configuration and resources.
// **************************************************************************************
gSystemConfig.configContentSort = 'id ASC'; // options: id | sort_order | date_creation esc | date_creation desc
gSystemConfig.enableContentSortCustom = 1; // 0 - disable | 1 - enable
/*
gSystemConfig.configContentInputOrder = ["inputRowContent_id_parent",
                                            "inputRowContent_sort_order",
                                            "inputRowContent_date1",
                                            "inputRowContent_id_register_user",
                                            "inputRowContent_content_type",
                                            "inputRowContent_content_columns",
                                            "inputRowContent_align_text",
                                            "inputRowContent_align_image",
                                            "inputRowContent_content_text",
                                            "inputRowContent_content_url",
                                            "inputRowContent_caption",
                                            "inputRowContent_file",
                                            "inputRowContent_activation"
                                          ];*/ /* not in use */

// Basic resources.
gSystemConfig.enableContentSortOrder = 1; // 0 - disable | 1 - enable
gSystemConfig.enableContentIdParentEdit = 1; // 0 - disable | 1 - enable
gSystemConfig.enableContentURL = 1; // 0 - disable | 1 - enable
// gSystemConfig.enableContentCaption = 1; // 0 - disable | 1 - enable
gSystemConfig.enableContentFileThumbnail = 1; // 0 - disable | 1 - enable
gSystemConfig.enableContentColumns = 1; // 0 - disable | 1 - enable
gSystemConfig.enableContentImageNoResize = 1; // 0 - disable | 1 - enable

gSystemConfig.enableContentHTML = 1; // 0 - disable | 1 - enable
gSystemConfig.enableContentVideos = 1; // 0 - disable | 1 - enable
gSystemConfig.enableContentFiles = 1; // 0 - disable | 1 - enable

gSystemConfig.enableContentBindRegisterUser = 1; // 0 - disable | 1 - enable
gSystemConfig.configContentBindRegisterUserMethod = 1; // 1 - category ID | 2 - register type
gSystemConfig.configContentBindRegisterUserIDReference = 3892; // category ID / register type ID | 0 - all registeres
gSystemConfig.configContentBindRegisterUserSort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order
// **************************************************************************************

// Quizzes / Polls - configuration and resources.
// **************************************************************************************
gSystemConfig.configQuizzesSort = 'id DESC'; // options: id | sort_order | title
gSystemConfig.configQuizzesOptionsSort = 'id DESC'; // options: id | sort_order | title
gSystemConfig.configQuizzesInputOrder = ['inputRowPublications_id_parent', 'inputRowPublications_sort_order', 'inputRowPublications_id_register_user', 'inputRowPublications_title', 'inputRowPublications_description', 'inputRowPublications_url_alias', 'inputRowPublications_meta_title', 'inputRowPublications_meta_description', 'inputRowPublications_keywords_tags', 'inputRowPublications_info1', 'inputRowPublications_number1', 'inputRowPublications_image_main', 'inputRowPublications_file1', 'inputRowPublications_file2', 'inputRowPublications_activation', 'inputRowPublications_id_status', 'inputRowPublications_notes'];

// Basic resources.
gSystemConfig.enableQuizzesIdParentEdit = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesSortOrder = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesType = 0; // 0 - disable | 1 - enable
// gSystemConfig.configQuizzesTypeDefault = 2; // 1 - poll | 2 - quiz (multiple questions)  | 3 - (written template answer) | (Valid only if enableQuizzesType = 0)

gSystemConfig.enableQuizzesBindRegisterUser = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesBindRegisterUserMethod = 1; // 1 - category ID | 2 - register type
gSystemConfig.configQuizzesBindRegisterUserIDReference = 3892; // category ID / register type ID | 0 - all registeres
gSystemConfig.configQuizzesBindRegisterUserSort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enableQuizzesDescription = 1; // 0 - disable | 1 - enable

gSystemConfig.configQuizzesURLAlias = 1; // 0 - disable | 1 - automatic | 2 - custom
gSystemConfig.enableQuizzesKeywordsTags = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesMetaDescription = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesMetaTitle = 1; // 0 - disable | 1 - enable

gSystemConfig.enableQuizzesImageMain = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesImageMainCaption = 1; // 0 - disable | 1 - enable

gSystemConfig.enableQuizzesStatus = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesNotes = 1; // 0 - disable | 1 - enable

// Pagination.
gSystemConfig.enableQuizzesBackendPagination = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesBackendPaginationNumbering = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesBackendPaginationNRecords = 15;

// Resources.
gSystemConfig.enableQuizzesContent = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesImages = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesVideos = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesFiles = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesZip = 1; // 0 - disable | 1 - enable

// Big information fields.
gSystemConfig.enableQuizzesInfo1 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesInfo1FieldType = 12; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableQuizzesInfo2 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesInfo2FieldType = 11; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableQuizzesInfo3 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesInfo3FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableQuizzesInfo4 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesInfo4FieldType = 2; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableQuizzesInfo5 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesInfo5FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

// Big number fields (up to 34 digits).
gSystemConfig.enableQuizzesNumber1 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesNumber1FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableQuizzesNumber2 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesNumber2FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableQuizzesNumber3 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesNumber3FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableQuizzesNumber4 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesNumber4FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableQuizzesNumber5 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesNumber5FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

// Activation fields.
gSystemConfig.enableQuizzesActivation1 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesActivation2 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesActivation3 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesActivation4 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesActivation5 = 1; // 0 - disable | 1 - enable

// Frontend configuration.
gSystemConfig.configQuizzesImagePlaceholder = 1; // 0 - disable | 1 - enable

gSystemConfig.enableQuizzesFrontendPagination = 1; // 0 - disable | 1 - enable (custom) | 11 - enable (bootstrap)
gSystemConfig.enableQuizzesFrontendPaginationNumbering = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesFrontendPaginationNRecords = 10;

// Options.
// TODO: Create extra column id_quizzes_options_answer in quizzes_options, if want to enable multiple answers right.
gSystemConfig.enableQuizzesOptionsSortOrder = 1; // 0 - disable | 1 - enable

// gSystemConfig.enableQuizzesOptionsTitle = 1; // 0 - disable | 1 - enable
// gSystemConfig.enableQuizzesOptionsDescription = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesOptionsImageMain = 1; // 0 - disable | 1 - enable
// gSystemConfig.enableQuizzesOptionsImageMainCaption = 1; // 0 - disable | 1 - enable

gSystemConfig.enableQuizzesOptionsAnswer = 1; // 0 - disable | 1 - enable

// Optional fields (field titles in the language configuration file).
// Big information fields.
gSystemConfig.enableQuizzesOptionsInfo1 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesOptionsInfo1FieldType = 12; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableQuizzesOptionsInfo2 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesOptionsInfo2FieldType = 11; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableQuizzesOptionsInfo3 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesOptionsInfo3FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableQuizzesOptionsInfo4 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesOptionsInfo4FieldType = 2; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableQuizzesOptionsInfo5 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesOptionsInfo5FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

// Big number fields (up to 34 digits).
gSystemConfig.enableQuizzesOptionsNumber1 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesOptionsNumber1FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableQuizzesOptionsNumber2 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesOptionsNumber2FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableQuizzesOptionsNumber3 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesOptionsNumber3FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableQuizzesOptionsNumber4 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesOptionsNumber4FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableQuizzesOptionsNumber5 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesOptionsNumber5FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals
// **************************************************************************************

// Export module.
export { gSystemConfig };
