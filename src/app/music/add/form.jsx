/**
 * @name SongForm
 * @file form.tsx
 * @description song form component
 */
"use client";
// Modules
import React, { useCallback } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { RiMoneyDollarCircleLine } from '@remixicon/react';
// Contexts
import { useTheme } from '@/core/contexts/theme';
// Components
import Dropzone from '@/core/components/dropzone';
import Input from '@/core/components/input';
import ErrorHandler from '@/core/components/error';
var propTypes = {
    /**
     * Set file `attachmentId` HTML id attribute
     */
    attachmentId: PropTypes.string.isRequired
};
var SongForm = function (_a) {
    var attachmentId = _a.attachmentId;
    var replaceClassName = useTheme().replaceClassName;
    var _b = useForm(), register = _b.register, setValue = _b.setValue, control = _b.control, errors = _b.formState.errors;
    /**
     *
     * Handle dropzone `onDrop` event
     */
    var handleDrop = useCallback(function (acceptedFiles) {
        var path = acceptedFiles[0].path;
        setValue('cover', path, { shouldValidate: true });
    }, []);
    return (<div className='row g-4'>
            <div className='col-12'>
                <Controller name='cover' control={control} render={function () {
            return <Dropzone noClick title='Drag & Drop or click to Song Upload' infoText='320x320 (Max: 120KB)' onDrop={handleDrop}/>;
        }}/>
                {<ErrorHandler root={errors === null || errors === void 0 ? void 0 : errors.cover}/>}
            </div>
            <div className='col-12'>
                <Input id='title' placeholder='Song name' className={classNames('form-control', (errors === null || errors === void 0 ? void 0 : errors.title) && 'is-invalid')} {...register('title', {
        required: true,
        minLength: { value: 5, message: '5' }
    })}/>
                {<ErrorHandler root={errors === null || errors === void 0 ? void 0 : errors.title}/>}
            </div>
            <div className='col-12'>
                <label htmlFor={attachmentId} className='form-label'>
                    Song file
                </label>
                <input type='file' id={attachmentId} className={classNames('form-control', (errors === null || errors === void 0 ? void 0 : errors.src) && 'is-invalid')} {...register('src', { required: true })}/>
            </div>
            <div className='col-sm-6'>
                <Input id='artists' type='artists' placeholder='Artist' className={classNames('form-control', (errors === null || errors === void 0 ? void 0 : errors.artists) && 'is-invalid')} {...register('artists', { required: true })}/>
                {<ErrorHandler root={errors === null || errors === void 0 ? void 0 : errors.artists}/>}
            </div>
            <div className='col-sm-6'>
                <Input id='composers' placeholder='Composer' className={classNames('form-control', (errors === null || errors === void 0 ? void 0 : errors.composers) && 'is-invalid')} {...register('composers', { required: true })}/>
                {<ErrorHandler root={errors === null || errors === void 0 ? void 0 : errors.composers}/>}
            </div>
            <div className='col-sm-6'>
                <Input id='lyricists' placeholder='Lyricist' className={classNames('form-control', (errors === null || errors === void 0 ? void 0 : errors.lyricists) && 'is-invalid')} {...register('lyricists', { required: true })}/>
                {<ErrorHandler root={errors === null || errors === void 0 ? void 0 : errors.lyricists}/>}
            </div>
            <div className='col-sm-6'>
                <Input id='directors' placeholder='Music director' className={classNames('form-control', (errors === null || errors === void 0 ? void 0 : errors.directors) && 'is-invalid')} {...register('directors', { required: true })}/>
                {<ErrorHandler root={errors === null || errors === void 0 ? void 0 : errors.directors}/>}
            </div>
            <div className='col-12'>
                <select className='form-select' aria-label='Select category' {...register('categories', { required: true })}>
                    <option value='Remix'>Remix</option>
                    <option value='Pop'>Pop</option>
                    <option value='DJ'>DJ</option>
                </select>
                {<ErrorHandler root={errors === null || errors === void 0 ? void 0 : errors.categories}/>}
            </div>
            <div className='col-12'>
                <Input as='textarea' id='lyrics' placeholder='Lyrics' className={classNames('form-control', (errors === null || errors === void 0 ? void 0 : errors.lyrics) && 'is-invalid')} style={{ minHeight: 80 }} {...register('lyrics')}/>
            </div>
            <div className='col-12'>
                <div className='d-flex align-items-center mb-2'>
                    <div className={replaceClassName('form-check me-4')}>
                        <input id='free' name='price' className='form-check-input' type='radio'/>
                        <label className='form-check-label' htmlFor='free'>
                            Free
                        </label>
                    </div>
                    <div className='form-check'>
                        <input id='paid' name='price' className='form-check-input' type='radio'/>
                        <label className='form-check-label' htmlFor='paid'>
                            Paid
                        </label>
                    </div>
                </div>
                <div className='input-group'>
                    <span className='input-group-text' id='basic-addon1'>
                        <RiMoneyDollarCircleLine />
                    </span>
                    <input type='text' className='form-control' placeholder='Song price'/>
                </div>
                <div className='form-text'>
                    Please add song price if Song is paid
                </div>                
            </div>
        </div>);
};
SongForm.propTypes = propTypes;
SongForm.displayName = 'SongForm';
export default SongForm;
