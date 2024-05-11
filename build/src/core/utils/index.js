/**
 *
 * @file index.ts
 * @description utility function
 */
// Module
import moment from 'moment';
// Utilities
import { SIDEBAR_TOGGLE } from '../constants/constant';
/**
 * Check for string value
 * @param str
 * @returns
 */
export var isString = function (str) {
    return (typeof str === 'string' || new String(str)) ? true : false;
};
/**
 * Convert string into number
 * @param str
 * @returns
 */
export var getInt = function (str) {
    return isString(str) ? parseInt(str, 10) : str;
};
/**
 * Convert string into float number
 * @param str
 * @returns
 */
export var getFloat = function (str) {
    return isString(str) ? parseFloat(str) : str;
};
/**
 * Formate remote date into local date
 * @param str
 * @returns
 */
export var localDate = function (str) {
    return str ? moment(str, 'MM/DD/YYYY').format('ll') : str;
};
/**
 * Remove HTML tags from string
 * @param str
 * @returns
 */
export var removeHtml = function (str) {
    return str.replace(/<\/?[^>]+(>|$)/g, '');
};
/**
 * Check element has class
 * @param el
 * @param className
 * @returns
 */
export var hasClass = function (el, className) {
    return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
};
/**
 * Add class on element
 * @param el
 * @param className
 */
export var addClass = function (el, className) {
    if (!hasClass(el, className))
        el.className += (el.className ? ' ' : '') + className;
};
/**
 * Remove class from element
 * @param el
 * @param className
 */
export var removeClass = function (el, className) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};
/**
 * Toggle sidebar on button click
 * @param event
 */
export var toggleSidebar = function (event) {
    var target = event.currentTarget;
    var body = document.body;
    if (body.hasAttribute(SIDEBAR_TOGGLE)) {
        removeClass(target, 'active');
        body.removeAttribute(SIDEBAR_TOGGLE);
    }
    else {
        addClass(target, 'active');
        body.setAttribute(SIDEBAR_TOGGLE, 'true');
    }
};
/**
 * Get suitable artist name for player
 * @param data
 * @returns
 */
export var getPersonName = function (data) {
    return data === null || data === void 0 ? void 0 : data.map(function (d) { return d.name; }).join(', ');
};
/**
 * Get person data from api data
 * @param data
 * @returns
 */
export var getPersonInfo = function (data) {
    var list = [];
    if (data) {
        list = data.map(function (item) {
            item.id = getInt(item.id);
            item.name = item.name;
            return item;
        });
    }
    return list;
};
/**
 * Get the reverse prefix base on string.
 * Ex. (ms-1 to me-1), (me-1 to ms-1), (ps-1 to pe-1), (pe-1 to ps-1)
 *
 * @param name
 * @returns
 */
export var getReversePrefix = function (name) {
    var list = name.split('-');
    var prefix = list[0];
    var replace = prefix.endsWith('e')
        ? prefix.replace('e', 's')
        : prefix.replace('s', 'e');
    list[0] = list[0].replace(prefix, replace);
    return list.join('-');
};
/**
 * Get the reverse suffix base on string.
 * Ex. (text-start to text-end), (text-end to text-start)
 *
 * @param name
 * @returns
 */
export var getReverseSuffix = function (name) {
    var replace = name.endsWith('start')
        ? name.replace('start', 'end')
        : name.replace('end', 'start');
    name = name.replace(name, replace);
    return name;
};
/**
 * Check theme mode
 * @param theme
 * @returns
 */
export var isDark = function (theme) {
    return (theme === 'dark' || (theme === 'system'
        && window.matchMedia
        && window.matchMedia('(prefers-color-scheme: dark)').matches));
};
// Export Utils class
var Utils = {};
export default Object.assign(Utils, {
    isString: isString,
    getInt: getInt,
    getFloat: getFloat,
    localDate: localDate,
    removeHtml: removeHtml,
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleSidebar: toggleSidebar,
    getPersonName: getPersonName,
    getPersonInfo: getPersonInfo,
    getReversePrefix: getReversePrefix,
    getReverseSuffix: getReverseSuffix,
    isDark: isDark
});
