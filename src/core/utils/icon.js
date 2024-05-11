/**
 *
 * @file icon.ts
 * @description convert icon name {string} to react element.
 */
// Modules
import { createElement } from 'react';
import * as Icons from '@remixicon/react';
/**
 *
 * Convert icon name to lib compatible
 *
 * @example
 * 'ri-arrow-top-line' to 'RiArrowTopLine'
 *
 * @param name
 * @returns
 */
function iconName(name) {
    name = name.toLowerCase();
    return name.replace(/(^|\/|-)(\S)/g, function (s) { return s.toUpperCase(); }).replace(/-/g, '');
}
/**
 *
 * Get react element from icon name
 *
 * @example
 * 'ri-arrow-top-line' to '<RiArrowTopLine />'
 *
 * @param name
 * @param size
 * @returns
 */
export default function IconEl(name, size) {
    if (size === void 0) { size = 24; }
    name = iconName(name);
    return createElement(Icons[name], { size: size });
}
