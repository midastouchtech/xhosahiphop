/**
 * @name Volume
 * @file volume.tsx
 * @description audio player volume component
 */
"use client";
// Modules
import React, { useEffect, useState } from 'react';
import { RiVolumeDownFill, RiVolumeMuteFill, RiVolumeUpFill } from '@remixicon/react';
// Context
import { useTheme } from '@/core/contexts/theme';
// Hooks
import useCSSVar from '@/core/hooks/useCSSVar';
// Utilities
import { getInt, isDark } from '@/core/utils';
var Volume = function () {
    var theme = useTheme().theme;
    var darkColor = useCSSVar('dark-rgb');
    var _a = useState('50'), volume = _a[0], setVolume = _a[1];
    var _b = useState(), gradient = _b[0], setGradient = _b[1];
    var value = getInt(volume);
    useEffect(function () {
        var color = isDark(theme) ? '255, 255, 255' : darkColor;
        setGradient("linear-gradient(to right, rgb(".concat(color, ") 0%, \n            rgb(").concat(color, ") ").concat(value, "%, rgba(").concat(color, ", 0.2) ").concat(value, "%, \n            rgba(").concat(color, ", 0.2) 100%)"));
    }, [theme, volume]);
    return (<div className='player-volume dropdown d-none d-md-inline-flex'>
            <button className='btn btn-icon' data-bs-toggle='dropdown' data-bs-auto-close='outside' aria-label='Volume' aria-expanded='false'>
                {(value === 0)
            ? (<RiVolumeMuteFill size={20}/>)
            : (value > 0 && value < 70)
                ? (<RiVolumeDownFill size={20}/>)
                : (<RiVolumeUpFill size={20}/>)}
            </button>
            <div className='dropdown-menu'>
                <input type='range' className='amplitude-volume-slider' value={volume} min='0' max='100' onChange={function (e) { return setVolume(e.target.value); }} aria-label='Volume slider' style={{ background: gradient }}/>
            </div>
        </div>);
};
Volume.displayName = 'Volume';
export default Volume;
