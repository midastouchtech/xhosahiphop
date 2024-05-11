/**
 * @name DownloadApp
 * @file download-app.tsx
 * @description download app button component
 */
"use client";
// Modules
import React from 'react';
import Link from 'next/link';
// Contexts
import { useTheme } from '@/core/contexts/theme';
// Utilities
import { APP } from '@/core/constants/constant';
var DownloadApp = function (_a) {
    var _b = _a.button, button = _b === void 0 ? 'default' : _b;
    var replaceClassName = useTheme().replaceClassName;
    return (APP.length && (<div className='app-btn-group'>
                {APP.map(function (item, index) {
            return <Link key={index} href={item.href} className={'btn btn-lg btn-' + button}>
                        <span className='btn__wrap'>
                            <item.icon />
                            <span className={replaceClassName('ms-2')}>{item.name}</span>
                        </span>
                    </Link>;
        })}
            </div>));
};
DownloadApp.displayName = 'DownloadApp';
export default DownloadApp;
