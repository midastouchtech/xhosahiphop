/**
 * @name SongCard
 * @file card.tsx
 * @description add song card component
 */
"use client";
// Modules
import React, { useCallback } from 'react';
import classNames from 'classnames';
import { useForm, Controller } from 'react-hook-form';
import { RiAddLine } from '@remixicon/react';
// Contexts
import { useTheme } from '@/core/contexts/theme';
// Components
import Tab from '@/core/components/tab';
import SongForm from './form';
import Dropzone from '@/core/components/dropzone';
import Input from '@/core/components/input';
import ErrorHandler from '@/core/components/error';
var SongCard = function () {
    var replaceClassName = useTheme().replaceClassName;
    var _a = useForm(), register = _a.register, handleSubmit = _a.handleSubmit, setValue = _a.setValue, control = _a.control, errors = _a.formState.errors;
    // 
    // Data for tab list view
    var tabs = [
        {
            id: 'music',
            name: 'Add Music'
        },
        {
            id: 'album',
            name: 'Add Album'
        }
    ];
    /**
     *
     * Handle form `onSubmit` event
     * @param data
     */
    var submitForm = function (data) {
    };
    /**
     *
     * Handle dropzone `onDrop` event
     */
    var handleDrop = useCallback(function (acceptedFiles) {
        var path = acceptedFiles[0].path;
        setValue('cover', path, { shouldValidate: true });
    }, []);
    return (<form className='card' onSubmit={handleSubmit(submitForm)}>
            <div className='card-header pb-0'>
                <Tab id='add_music'>
                    {tabs.map(function (tab, index) { return (<li key={tab.id} className='nav-item' role='presentation'>
                            <button className={classNames('nav-link', index === 0 && 'active')} id={tab.id} data-bs-toggle='tab' data-bs-target={'#' + tab.id + '_pane'} type='button' role='tab' aria-controls={tab.id + '_pane'} aria-selected={index === 0 ? true : false}>
                                {tab.name}
                            </button>
                        </li>); })}
                </Tab>
            </div>
            <div className='card-body'>
                <div className='tab-content' id='add_music_content'>
                    <div className='tab-pane fade show active' id='music_pane' role='tabpanel' aria-labelledby='music' tabIndex={0}>
                        <SongForm attachmentId='song_file_1'/>
                    </div>
                    <div className='tab-pane fade' id='album_pane' role='tabpanel' aria-labelledby='album' tabIndex={0}>
                        <div className='mb-4'>
                            <Controller name='cover' control={control} render={function () {
            return <Dropzone noClick title='Drag & Drop or click to Album Upload' infoText='320x320 (Max: 120KB)' onDrop={handleDrop}/>;
        }}/>
                            {<ErrorHandler root={errors === null || errors === void 0 ? void 0 : errors.cover}/>}
                        </div>
                        <div className='mb-4'>
                            <Input id='name' placeholder='Album name' className={classNames('form-control', (errors === null || errors === void 0 ? void 0 : errors.name) && 'is-invalid')} {...register('title', {
        required: true,
        minLength: { value: 5, message: '5' }
    })}/>
                            {<ErrorHandler root={errors === null || errors === void 0 ? void 0 : errors.name}/>}
                        </div>
                        <SongForm attachmentId='song_file_2'/>
                        <button type='button' className='btn btn-sm btn-light-primary mt-3'>
                            <div className='btn__wrap'>
                                <RiAddLine size={20}/>
                                <span>Add New</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className='card-footer text-center'>
                <button className='btn btn-primary' style={{ minWidth: 120 }}>
                    Add Music
                </button>
                <button className={replaceClassName('btn btn-outline-secondary ms-2')}>
                    Cancel
                </button>
            </div>
        </form>);
};
SongCard.displayName = 'SongCard';
export default SongCard;
