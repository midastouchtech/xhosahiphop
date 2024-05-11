/**
 * @name Input
 * @file input.tsx
 * @description input component
 */
"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// Modules
import React from 'react';
import PropTypes from 'prop-types';
var propTypes = {
    /**
     * @default 'input'
     * The underlying HTML element to use when rendering the Input.
     *
     * @type ('input'|'textarea'|elementType)
     */
    as: PropTypes.elementType,
    /**
     * The HTML input `type`, which is only relevant if `as` is `'input'` (the default).
     */
    type: PropTypes.string,
    /**
     * Set input label
     */
    label: PropTypes.string,
};
var Input = React.forwardRef(function (_a, ref) {
    var _b = _a.as, Component = _b === void 0 ? 'input' : _b, _c = _a.type, type = _c === void 0 ? 'text' : _c, label = _a.label, id = _a.id, placeholder = _a.placeholder, props = __rest(_a, ["as", "type", "label", "id", "placeholder"]);
    var attr = Component === 'input' ? { type: type } : {};
    return (<>
            {label && (<label htmlFor={id} className='form-label fw-medium'>
                    {label}
                </label>)}
            <Component ref={ref} id={id} placeholder={placeholder} {...attr} {...props}/>
        </>);
});
Input.propTypes = propTypes;
Input.displayName = 'Input';
export default Input;
