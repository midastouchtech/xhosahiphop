/**
 * @name useCSSVar
 * @file useCSSVar.tsx
 * @description useful to get element css variable value.
 */
"use client";
// Modules
import { useState, useEffect } from 'react';
/**
 *
 * Get css variable value from it's name.
 * @param name
 * @param el
 * @returns
 */
export default function useCSSVar(name, el) {
    var _a = useState(), style = _a[0], setStyle = _a[1];
    useEffect(function () {
        if (!el)
            el = document.documentElement;
        var value = getComputedStyle(el).getPropertyValue('--bs-' + name);
        setStyle(value);
    }, [name]);
    return style;
}
