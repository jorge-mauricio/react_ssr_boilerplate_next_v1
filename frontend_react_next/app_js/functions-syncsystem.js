'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionsSyncSystem = void 0;
var configDebug = true;
var FunctionsSyncSystem = {};
exports.FunctionsSyncSystem = FunctionsSyncSystem;
var inputDataReorder = function (_arrInputOrder) {
    var arrInputOrder = __spreadArray([], __read(_arrInputOrder), false);
    var tableRowReference;
    var tableRowMove;
    if (arrInputOrder) {
        for (var countInputDataIDs = 0; countInputDataIDs < arrInputOrder.length; countInputDataIDs++) {
            if (countInputDataIDs > 0) {
                tableRowMove = document.getElementById(arrInputOrder[countInputDataIDs]);
                tableRowReference = document.getElementById(arrInputOrder[countInputDataIDs - 1]);
                if (tableRowMove && tableRowReference) {
                    tableRowReference.parentNode.insertBefore(tableRowMove, tableRowReference.nextSibling);
                    if (configDebug === true) {
                        console.log('tableRowMove=true');
                    }
                }
                if (configDebug === true) {
                    console.log('countInputDataIDs > 0=true');
                    console.log('tableRowMove=', tableRowMove);
                    console.log('tableRowReference=', tableRowReference);
                }
            }
            if (configDebug === true) {
                console.log('arrInputOrder=', arrInputOrder[countInputDataIDs]);
            }
        }
        if (configDebug === true) {
            console.log('arrInputOrder=', arrInputOrder);
        }
    }
};
FunctionsSyncSystem.inputDataReorder = inputDataReorder;
var formSubmit = function (idForm, formTarget, formMethod, formAction) {
    var formElement;
    if (idForm.indexOf('iframe:') >= 0) {
        formElement = document.getElementById(idForm);
    }
    else {
        formElement = document.getElementById(idForm);
    }
    if (formElement) {
        if (formTarget !== '') {
            formElement.target = formTarget;
        }
        if (formMethod !== '') {
            formElement.method = formMethod;
        }
        if (formAction !== '') {
            formElement.action = formAction;
        }
        formElement.submit();
    }
};
FunctionsSyncSystem.formSubmit = formSubmit;
var elementShowHideToggle = function (idHTML) {
    var elementHTML = document.getElementById(idHTML);
    if (elementHTML) {
        if (elementHTML.style.display === 'block') {
            elementHTML.setAttribute('style', 'display: none !important;');
        }
        else if (elementHTML.style.display === 'none' || elementHTML.style.display === '') {
            elementHTML.setAttribute('style', 'display: block !important;');
        }
        if (elementHTML.style.visibility === 'visible') {
            elementHTML.setAttribute('style', 'visibility: hidden !important;');
        }
        else if (elementHTML.style.display === 'hidden' || elementHTML.style.display === '') {
            elementHTML.setAttribute('style', 'visibility: visible !important;');
        }
    }
};
FunctionsSyncSystem.elementShowHideToggle = elementShowHideToggle;
var htmlGenericStyle01 = function (idHTML, styleName, parameterValue) {
    var elementHTML = document.getElementById(idHTML);
    if (elementHTML) {
        if (styleName === 'display') {
            elementHTML.style.setProperty(styleName, parameterValue, 'important');
        }
        if (styleName === 'height') {
            elementHTML.style.setProperty(styleName, parameterValue, 'important');
        }
        if (styleName === 'min-height') {
            elementHTML.style.setProperty(styleName, parameterValue, 'important');
        }
        if (styleName === 'margin-bottom') {
            elementHTML.style.setProperty(styleName, parameterValue, 'important');
        }
    }
};
FunctionsSyncSystem.htmlGenericStyle01 = htmlGenericStyle01;
var elementMessage01 = function (idElement, strMessage) {
    var elementHTML;
    if (idElement.indexOf('iframe:') >= 0) {
    }
    else if (idElement.indexOf('multiple:') >= 0) {
        var arrParameters = idElement.split(':');
        var _a = __read(arrParameters, 2), selectorType = _a[0], strQuerySelector = _a[1];
        var arrElements = void 0;
        if (selectorType === 'id') {
            arrElements = document.querySelectorAll('[id^="' + strQuerySelector + '"]');
            arrElements.forEach(function (nodeElement) {
                if (nodeElement) {
                    elementMessage01(nodeElement.getAttribute('id'), strMessage);
                }
            });
        }
    }
    else {
        elementHTML = document.getElementById(idElement);
        if (elementHTML) {
            if (elementHTML.getAttribute('type') === 'hidden') {
                elementHTML.value = strMessage;
            }
            if (elementHTML.getAttribute('type') === 'text') {
                elementHTML.value = strMessage;
            }
            if (elementHTML.getAttribute('type') === 'checkbox') {
                elementHTML.value = strMessage;
            }
            if (elementHTML.tagName.toLowerCase() === 'a') {
                elementHTML.innerHTML = strMessage;
            }
            if (elementHTML.tagName.toLowerCase() === 'div') {
                elementHTML.innerHTML = strMessage;
            }
            if (elementHTML.tagName.toLowerCase() === 'span') {
                elementHTML.innerHTML = strMessage;
            }
            if (elementHTML.tagName.toLowerCase() === 'h1') {
                elementHTML.innerHTML = strMessage;
            }
        }
    }
};
FunctionsSyncSystem.elementMessage01 = elementMessage01;
var dataHTMLCopy = function (idElementOrigin, idElementTarget, idElementOriginMethod, idElementTargetMethod) {
    if (idElementOriginMethod === void 0) { idElementOriginMethod = ''; }
    if (idElementTargetMethod === void 0) { idElementTargetMethod = ''; }
    var elementOrigin = document.getElementById(idElementOrigin);
    var elementTarget = document.getElementById(idElementTarget);
    if (elementOrigin) {
        if (elementTarget) {
            if (idElementTargetMethod === '') {
                elementTarget.innerHTML = '';
                if (idElementOriginMethod === '') {
                    elementTarget.innerHTML = elementOrigin.innerHTML;
                }
                if (idElementOriginMethod === 'outter') {
                    elementTarget.innerHTML = elementOrigin.outerHTML;
                }
            }
            if (idElementTargetMethod === 'add') {
                if (idElementOriginMethod === '') {
                    elementTarget.innerHTML += elementOrigin.innerHTML;
                }
                if (idElementOriginMethod === 'outter') {
                    elementTarget.innerHTML += elementOrigin.outerHTML;
                }
            }
        }
    }
};
FunctionsSyncSystem.dataHTMLCopy = dataHTMLCopy;
var dataHTMLDelete = function (idElement) {
    var element = document.getElementById(idElement);
    if (idElement) {
        if (element) {
            element.outerHTML = '';
        }
    }
};
FunctionsSyncSystem.dataHTMLDelete = dataHTMLDelete;
var elementCSSAdd = function (idElement, classNameCSS) {
    var elementHTML = document.getElementById(idElement);
    if (elementHTML) {
        elementHTML.classList.add(classNameCSS);
    }
};
var elementCSSRemove = function (idElement, classNameCSS) {
    var elementHTML = document.getElementById(idElement);
    if (elementHTML) {
        elementHTML.classList.remove(classNameCSS);
    }
};
FunctionsSyncSystem.elementCSSAdd = elementCSSAdd;
FunctionsSyncSystem.elementCSSRemove = elementCSSRemove;
var cssStyleInject = function (strCSS) {
    var htmlHead = document.head || document.getElementsByTagName('head')[0];
    var htmlStyleTag = document.getElementsByTagName('style')[0];
    htmlStyleTag.appendChild(document.createTextNode(strCSS));
};
FunctionsSyncSystem.cssStyleInject = cssStyleInject;
var radiobuttonCheck01 = function (idRadiobutton, radiobuttonSelect, idPrefixItemContent) {
    if (idPrefixItemContent === void 0) { idPrefixItemContent = ''; }
    var radiobuttonArray = document.getElementsByClassName(idRadiobutton);
    var countItems = radiobuttonArray.length;
    var radiobuttonCheck = 0;
    if (radiobuttonArray.length > 0) {
        for (var countCheckboxes = 0; countCheckboxes < radiobuttonArray.length; countCheckboxes++) {
            if (radiobuttonArray[countCheckboxes].checked === true) {
                radiobuttonCheck = countCheckboxes;
            }
        }
        if (radiobuttonSelect === 'next' && radiobuttonCheck + 1 !== countItems) {
            radiobuttonArray[radiobuttonCheck + 1].checked = true;
            htmlGenericStyle01(idPrefixItemContent + radiobuttonCheck, 'display', 'none');
            htmlGenericStyle01(idPrefixItemContent + (radiobuttonCheck + 1), 'display', 'block');
            console.log('idPrefixItemContent', idPrefixItemContent + (radiobuttonCheck + 1));
        }
        if (radiobuttonSelect === 'prev' && radiobuttonCheck !== 0) {
            radiobuttonArray[radiobuttonCheck - 1].checked = true;
            htmlGenericStyle01(idPrefixItemContent + radiobuttonCheck, 'display', 'none');
            htmlGenericStyle01(idPrefixItemContent + (radiobuttonCheck - 1), 'display', 'block');
        }
    }
};
FunctionsSyncSystem.radiobuttonCheck01 = radiobuttonCheck01;
var scrollToTarget = function (_elementTarget) {
    if (_elementTarget) {
        var elementTarget = document.querySelector('#' + _elementTarget);
        if (elementTarget) {
            elementTarget.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }
};
FunctionsSyncSystem.scrollToTarget = scrollToTarget;
var ajaxRecordsPatch01_async = function (_urlReference, _objBody, _callBackFunction) {
    if (_callBackFunction === void 0) { _callBackFunction = null; }
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, fetch(_urlReference, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(_objBody),
                    })
                        .then(function (res) {
                        if (res.ok) {
                            if (configDebug === true) {
                                console.log('res.ok (success)=', res.ok);
                            }
                        }
                        else {
                            if (configDebug === true) {
                                console.log('res.ok (error / not success)=', res.ok);
                            }
                        }
                        return res.json();
                    })
                        .then(function (resObjReturn) {
                        if (_callBackFunction) {
                            _callBackFunction(resObjReturn);
                        }
                        if (configDebug === true) {
                            console.log('resObjReturn=', resObjReturn);
                        }
                    })];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
};
FunctionsSyncSystem.ajaxRecordsPatch01_async = ajaxRecordsPatch01_async;
var cookieCreate = function (cookieName, cookieValue, cookieOptions) {
    if (cookieOptions === void 0) { cookieOptions = {}; }
    var strReturn = false;
    var cookiePeriod;
    var cookieString = '';
    var path;
    var domain;
    var expires;
    var maxAge;
    var secure = false;
    cookiePeriod = '';
    if (cookieOptions.hasOwnProperty('cookiePeriod') === true) {
        (cookiePeriod = cookieOptions.cookiePeriod);
    }
    path = '/';
    if (cookieOptions.hasOwnProperty('path') === true) {
        (path = cookieOptions.path);
    }
    domain = '';
    if (cookieOptions.hasOwnProperty('domain') === true) {
        (domain = cookieOptions.domain);
    }
    expires = '';
    if (cookieOptions.hasOwnProperty('expires') === true) {
        expires = new Date();
        expires.setTime(expires.getTime() + cookieOptions.expires * 24 * 60 * 60 * 1000);
    }
    maxAge = '';
    if (cookieOptions.hasOwnProperty('maxAge') === true) {
        (maxAge = cookieOptions.maxAge);
    }
    if (cookieOptions.hasOwnProperty('secure') === true) {
        (secure = cookieOptions.secure);
    }
    if (cookiePeriod === '1') {
        maxAge = 60 * 60 * 24 * 365;
    }
    if (cookieValue) {
        strReturn = true;
        cookieString += cookieName + '=' + cookieValue;
        cookieString += '; SameSite=strict';
        cookieString += '; path=' + path;
        if (domain !== '') {
            cookieString += '; domain=' + domain;
        }
        if (expires !== '') {
            cookieString += '; expires=' + expires;
        }
        if (maxAge !== '') {
            cookieString += '; max-age=' + maxAge;
        }
        if (secure === true) {
            cookieString += '; Secure';
        }
        document.cookie = cookieString;
    }
    return strReturn;
};
FunctionsSyncSystem.cookieCreate = cookieCreate;
var cookieRead = function (cookieName) {
    if (cookieName === void 0) { cookieName = ''; }
    var strReturn = '';
    var cookies = document.cookie;
    var arrCookies = [];
    if (cookieName) {
        arrCookies = cookies.trim().split(';');
        arrCookies.forEach(function (cookiePair) {
            var arrCookiePair = cookiePair.split('=');
            if (cookieName === arrCookiePair[0].trim()) {
                strReturn = arrCookiePair[1].trim();
            }
        });
    }
    else {
        strReturn = document.cookie;
    }
    return strReturn;
};
FunctionsSyncSystem.cookieRead = cookieRead;
var cookieDelete = function (cookieName, cookieOptions) {
    if (cookieName === void 0) { cookieName = ''; }
    if (cookieOptions === void 0) { cookieOptions = {}; }
    var strReturn = false;
    var cookieString = '';
    var path = '/';
    var domain = '';
    var secure = false;
    if (cookieOptions.hasOwnProperty('path') === true) {
        (path = cookieOptions.path);
    }
    if (cookieOptions.hasOwnProperty('domain') === true) {
        (domain = cookieOptions.domain);
    }
    if (cookieOptions.hasOwnProperty('secure') === true) {
        (secure = cookieOptions.secure);
    }
    if (cookieName) {
        cookieString = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
        cookieString += '; path=' + path;
        if (domain !== '') {
            cookieString += '; domain=' + path;
        }
        if (secure === true) {
            cookieString += '; Secure';
        }
        document.cookie = cookieString;
        strReturn = true;
    }
    return strReturn;
};
FunctionsSyncSystem.cookieDelete = cookieDelete;
//# sourceMappingURL=functions-syncsystem.js.map