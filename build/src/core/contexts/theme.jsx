/**
 * @name Theme
 * @file theme.tsx
 * @description use to change theme skins & direction
 */
"use client";
// Modules
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
// Utilities
import { getReversePrefix, getReverseSuffix, isDark } from '../utils';
import { ENABLE_RTL, HEADER_THEME, PLAYER_THEME, SIDEBAR_THEME, THEME, THEME_MODE } from '../constants/constant';
var ThemeContext = createContext({});
var Theme = function (props) {
    var _a = useState(THEME_MODE), themeMode = _a[0], setThemeMode = _a[1];
    var _b = useState(HEADER_THEME), headerSkin = _b[0], setHeaderSkin = _b[1];
    var _c = useState(PLAYER_THEME), playerSkin = _c[0], setPlayerSkin = _c[1];
    var _d = useState(SIDEBAR_THEME), sidebarSkin = _d[0], setSidebarSkin = _d[1];
    var _e = useState(ENABLE_RTL), isRTL = _e[0], setIsRTL = _e[1];
    // Change theme
    useEffect(function () {
        isDark(themeMode)
            ? document.body.setAttribute(THEME, 'dark')
            : document.body.removeAttribute(THEME);
    }, [themeMode]);
    // Change text direction
    useEffect(function () {
        isRTL
            ? document.documentElement.setAttribute('dir', 'rtl')
            : document.documentElement.removeAttribute('dir');
    }, [isRTL]);
    var setTheme = function (mode) { return setThemeMode(mode); };
    var changeComponentSkin = function (componentName, color) {
        switch (componentName) {
            case 'header':
                setHeaderSkin(color);
                break;
            case 'sidebar':
                setSidebarSkin(color);
                break;
            case 'player':
                setPlayerSkin(color);
                break;
            default:
                break;
        }
    };
    var replaceClassName = function (className) {
        var classList = className.split(' ');
        var prefixList = ['ms', 'me', 'ps', 'pe'];
        var suffixList = ['start', 'end'];
        if (isRTL) {
            classList.forEach(function (cl, index) {
                var isPrefix = prefixList.some(function (prefix) { return cl.startsWith(prefix); });
                var isSuffix = suffixList.some(function (suffix) { return cl.endsWith(suffix); });
                classList[index] = isPrefix
                    ? getReversePrefix(cl)
                    : isSuffix
                        ? getReverseSuffix(cl)
                        : cl;
            });
        }
        return classNames(classList);
    };
    var context = useMemo(function () { return ({
        toggleRTL: function () {
            setIsRTL(function (prev) { return !prev; });
        },
        replaceClassName: replaceClassName,
        changeComponentSkin: changeComponentSkin,
        setTheme: setTheme,
        headerSkin: headerSkin,
        playerSkin: playerSkin,
        sidebarSkin: sidebarSkin,
        theme: themeMode,
        rtl: isRTL,
    }); }, [themeMode, headerSkin, sidebarSkin, playerSkin, isRTL]);
    return <ThemeContext.Provider value={context} {...props}/>;
};
Theme.displayName = 'Theme';
export default Theme;
/**
 *
 * Theme context hook
 * @returns
 */
export var useTheme = function () {
    var context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a Theme');
    }
    return context;
};
