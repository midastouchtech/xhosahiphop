/**
 * @name Settings
 * @file settings.tsx
 * @description template settings component
 */
"use client";
// Modules
import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { RiCheckboxCircleFill, RiCloseFill, RiInformation2Line, RiSettingsLine } from '@remixicon/react';
import { useEventListener } from 'usehooks-ts';
// Contexts
import { useTheme } from '../contexts/theme';
// Components
import Scrollbar from './scrollbar';
// Utilities
import { hasClass, removeClass } from '../utils';
import { SHOW } from '../constants/constant';
var Settings = function () {
    var _a = useTheme(), changeComponentSkin = _a.changeComponentSkin, replaceClassName = _a.replaceClassName, setTheme = _a.setTheme, toggleRTL = _a.toggleRTL, headerSkin = _a.headerSkin, playerSkin = _a.playerSkin, sidebarSkin = _a.sidebarSkin, theme = _a.theme;
    var _b = useState(false), isShowInfo = _b[0], setIsShowInfo = _b[1];
    var pathname = usePathname();
    var settingRef = useRef(null);
    var documentRef = useRef(null);
    var colors = ['red', 'green', 'blue', 'orange', 'yellow', 'purple', 'indigo', 'pink', 'violet', 'magenta'];
    var themeOptions = ['light', 'dark', 'system'];
    var componentOptions = [
        {
            title: 'header',
            colors: colors
        },
        {
            title: 'sidebar',
            colors: colors
        },
        {
            title: 'player',
            colors: colors
        }
    ];
    useEffect(function () { return setIsShowInfo(!pathname.startsWith('/music')); }, [pathname]);
    useEffect(function () { documentRef.current = document; }, []);
    /**
     *
     * Get `active` class based on component and color
     * @param component
     * @param color
     * @returns
     */
    var getActive = function (component, color) {
        if (component === 'header' && color === headerSkin) {
            return 'active';
        }
        else if (component === 'player' && color === playerSkin) {
            return 'active';
        }
        else if (component === 'sidebar' && color === sidebarSkin) {
            return 'active';
        }
    };
    /**
     *
     * Handle DOM click event to hide settings
     * @param event
     */
    var handleDOMClick = function (event) {
        var current = settingRef.current;
        if (current &&
            !current.contains(event.target) &&
            hasClass(settingRef.current, SHOW)) {
            removeClass(settingRef.current, SHOW);
        }
    };
    /**
     *
     * Toggle settings sidebar
     */
    var toggleSettings = useCallback(function () { var _a; return (_a = settingRef.current) === null || _a === void 0 ? void 0 : _a.classList.toggle('show'); }, []);
    useEventListener('click', handleDOMClick, documentRef);
    return (<div id='setting' ref={settingRef}>
            <a role='button' id='setting_toggler' aria-label='Settings' onClick={toggleSettings}>
                <RiSettingsLine />
            </a>
            
            <div className='setting__wrapper'>
                <div className='setting__head'>
                    <span className={replaceClassName('me-auto')}>Theme Settings</span>
                    <a role='button' id='setting_close' aria-label='Close settings' onClick={toggleSettings}>
                        <RiCloseFill />
                    </a>
                </div>
                <Scrollbar className='flex-1'>
                    <div className='setting__body'>
                        <span className='setting__title'>Theme Appearance</span>
                        <div className='setting__theme'>
                            {themeOptions.map(function (option) { return (<a key={option} role='button' onClick={function () { return setTheme(option); }} className={classNames('setting__option', theme === option && 'active')}>
                                    <Image src={'/images/misc/' + option + '.svg'} width={94} height={45} alt=''/>
                                    <div className='setting__theme__title'>{option}</div>
                                    <RiCheckboxCircleFill size={16} className='ri-checkbox-circle-fill'/>
                                </a>); })}
                        </div>

                        <div className='setting__rtl'>
                            <label htmlFor='rtl' className='setting__title mb-0'>Right-To-Left</label>
                            <div className={replaceClassName('ms-auto switch')}>
                                <input type='checkbox' id='rtl' className='setting__option' onChange={toggleRTL}/>
                                <label htmlFor='rtl'></label>
                            </div>
                        </div>

                        <span className='setting__title'>Component Appearance</span>
                        <div className='setting__card'>
                            {componentOptions.map(function (component) { return (<div key={component.title} className='setting__card__item'>
                                    <span className='setting__title'>{component.title}</span>
                                    <div className='setting__options'>
                                        {component.colors.map(function (color) { return (<a key={color} role='button' aria-label={'Color ' + color} onClick={function () { return changeComponentSkin(component.title, color); }} className={classNames('setting__option', 'setting__option--' + color, getActive(component.title, color))} data-color-option={color}/>); })}
                                    </div>
                                    
                                </div>); })}
                        </div>
                    </div>
                </Scrollbar>
                {isShowInfo && (<div className='setting__info'>
                        <span className={replaceClassName('me-2')}>
                            <RiInformation2Line />
                        </span>
                        <span className='flex-grow-1'>
                            You can observe the color change effect in the header, sidebar, and player components on the inner pages.
                        </span>
                    </div>)}
            </div>
        </div>);
};
Settings.displayName = 'Settings';
export default Settings;
