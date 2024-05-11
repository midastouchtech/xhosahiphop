/**
 * @name Dropzone
 * @file dropzone.tsx
 * @description dropzone component
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
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { RiUploadCloud2Line } from '@remixicon/react';
var propTypes = {
    /**
     * Dropzone title
     */
    title: PropTypes.string,
    /**
     * Dropzone information text
     */
    infoText: PropTypes.string,
    /**
     * Button label
     */
    label: PropTypes.string,
    /**
     * Set multiple file upload option
     */
    multiple: PropTypes.bool,
    /**
     * Dropzone `onChange` event
     */
    onChange: PropTypes.func
};
var Dropzone = function (_a) {
    var _b = _a.title, title = _b === void 0 ? 'Drag & Drop or click to Upload' : _b, _c = _a.infoText, infoText = _c === void 0 ? '540x320 (Max: 300KB)' : _c, _d = _a.label, label = _d === void 0 ? 'Upload cover image' : _d, multiple = _a.multiple, onChange = _a.onChange, props = __rest(_a, ["title", "infoText", "label", "multiple", "onChange"]);
    var _e = useDropzone(__assign({ multiple: multiple, noClick: true }, props)), getRootProps = _e.getRootProps, getInputProps = _e.getInputProps, open = _e.open;
    return (<div className='dropzone text-center' {...getRootProps()}>
            <input {...getInputProps({ onChange: onChange })}/>
            <div className='dz-message'>
                <RiUploadCloud2Line className='text-gray' size={40}/>
                <div className='fs-6 mt-2'>{title}</div>
                <div className='form-text mb-4'>{infoText}</div>
                <button type='button' className='btn btn-light-primary' onClick={open}>
                    {label}
                </button>
            </div>
        </div>);
};
Dropzone.propTypes = propTypes;
Dropzone.displayName = 'Dropzone';
export default Dropzone;
