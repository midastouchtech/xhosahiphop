/**
 * @name Tab
 * @file tab.tsx
 * @description tab component
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
import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
// Context
import { useTheme } from '../contexts/theme';
var Tab = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    var rtl = useTheme().rtl;
    var tabRef = useRef(null);
    var lineRef = useRef(null);
    useEffect(function () {
        var current = tabRef.current;
        setTimeout(function () {
            if (current) {
                var el = current.querySelector('.nav-link.active');
                var handler_1 = function (event) {
                    return setLineProps(event.currentTarget);
                };
                setLineProps(el);
                var links = current.querySelectorAll('[data-bs-toggle="tab"]');
                Array.from(links).forEach(function (link) {
                    link.addEventListener('shown.bs.tab', handler_1);
                    return function () { return link.removeEventListener('shown.bs.tab', handler_1); };
                });
            }
        }, 1);
    }, [rtl]);
    /**
     *
     * Set active tab line indicator
     * @param el
     */
    var setLineProps = function (el) {
        var current = lineRef.current;
        if (current) {
            current.style.left = el.offsetLeft + 'px';
            current.style.width = el.clientWidth + 'px';
        }
    };
    return (
    // Mat tabs [[ Find at scss/components/nav.scss ]]
    <div ref={tabRef} className={classNames('mat-tabs', className)}>
            <ul className='nav nav-tabs' role='tablist' {...props}>
                {children}
            </ul>
            <span ref={lineRef} className='mat-tabs__line'></span>
        </div>);
};
Tab.displayName = 'Tab';
export default Tab;
