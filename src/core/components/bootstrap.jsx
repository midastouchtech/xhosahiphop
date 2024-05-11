/**
 * @name Bootstrap
 * @file bootstrap.tsx
 * @description importing bootstrap javascript
 */
"use client";
// Modules
import { useEffect } from 'react';
var Bootstrap = function () {
    useEffect(function () {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    return null;
};
Bootstrap.displayName = 'Bootstrap';
export default Bootstrap;
