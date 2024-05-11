/**
 * @name Scrollbar
 * @file scrollbar.tsx
 * @description react-custom-scrollbars-2 scrollbar component
 */
"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { Scrollbars } from 'react-custom-scrollbars-2';
// Contexts
import { useTheme } from '../contexts/theme';
// Hooks
import useCSSVar from '../hooks/useCSSVar';
var Scrollbar = function (props) {
    var _a = useTheme(), theme = _a.theme, rtl = _a.rtl;
    var thumbColor = (theme === 'dark') ? '#474761' : useCSSVar('gray-400');
    var trackStyles = rtl ? { left: 2 } : { right: 2 };
    /**
     *
     * Get scrollbar margin based on text direction
     * @param style
     * @returns
     */
    var getViewMargin = function (style) {
        var marginRight = style.marginRight;
        return rtl
            ? { marginLeft: marginRight, marginRight: 0 }
            : { marginRight: marginRight };
    };
    return (<Scrollbars universal={true} renderView={function (_a) {
            var style = _a.style, props = __rest(_a, ["style"]);
            return <div {...props} style={__assign(__assign({}, style), getViewMargin(style))}/>;
        }} renderTrackHorizontal={function (_a) {
            var style = _a.style, props = __rest(_a, ["style"]);
            return <div {...props} style={__assign(__assign({}, style), { height: 4, left: 0, width: '100%', bottom: 0 })}/>;
        }} renderThumbHorizontal={function (_a) {
            var style = _a.style, props = __rest(_a, ["style"]);
            return <div {...props} style={{
                    backgroundColor: thumbColor
                }}/>;
        }} renderTrackVertical={function (_a) {
            var style = _a.style, props = __rest(_a, ["style"]);
            return <div {...props} style={__assign(__assign(__assign({}, style), trackStyles), { width: 4, height: '100%', top: 0, borderRadius: 4 })}/>;
        }} renderThumbVertical={function (_a) {
            var style = _a.style, props = __rest(_a, ["style"]);
            return <div {...props} style={{
                    backgroundColor: thumbColor
                }}/>;
        }} {...props}/>);
};
Scrollbar.displayName = 'Scrollbar';
export default Scrollbar;
