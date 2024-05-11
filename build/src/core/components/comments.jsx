/**
 * @name Comments
 * @file Comments.tsx
 * @description comments component to display & comment form in details page.
 */
"use client";
// Modules
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { RiReplyLine, RiStarSFill } from '@remixicon/react';
// Context
import { useTheme } from '@/core/contexts/theme';
// Components
import Input from './input';
import ErrorHandler from './error';
// Utilities
import { getInt } from '../utils';
import { EMAIL } from '../constants/regex';
var propTypes = {
    /**
     * Set id
     */
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};
var Comments = function (_a) {
    var id = _a.id;
    var replaceClassName = useTheme().replaceClassName;
    var _b = useForm(), register = _b.register, handleSubmit = _b.handleSubmit, errors = _b.formState.errors;
    /**
     *
     * Handle form `onSubmit` event
     * @param data
     */
    var submitForm = function (data) {
    };
    /**
     *
     * Get star rating view
     * @param rating
     * @returns
     */
    var getRatings = function (rating) {
        var num = getInt(rating);
        var stars = [];
        for (var i = 0; i < num; i++) {
            stars.push(<RiStarSFill key={i}/>);
        }
        return <div className='text-warning d-flex mb-1'>{stars}</div>;
    };
    return (
    // Section [[ Find at scss/framework/section.scss ]]
    <div className='section'>
            <div className='section__head'>
                <h3 className='mb-0'>Comments</h3>
            </div>
            <div className='row'>
                <div className='col-xl-8'>
                    <form className='row' onSubmit={handleSubmit(submitForm)}>
                        <div className='col-12 mb-3 d-flex align-items-center'>
                            <span className='form-label mb-0'>Ratings:</span>
                            <div className={replaceClassName('ps-2')}>
                                <select className='form-select' style={{ minWidth: 100 }} aria-label='Select ratings'>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-6 mb-3'>
                            <Input label='name' id='name' className={classNames('form-control', (errors === null || errors === void 0 ? void 0 : errors.name) && 'is-invalid')} {...register('name', { required: true, minLength: { value: 5, message: '5' } })}/>
                            {<ErrorHandler root={errors === null || errors === void 0 ? void 0 : errors.name}/>}
                        </div>
                        <div className='col-6 mb-3'>
                            <Input label='Email' id='password' className={classNames('form-control', (errors === null || errors === void 0 ? void 0 : errors.email) && 'is-invalid')} {...register('email', { required: true, pattern: { value: EMAIL, message: 'email' } })}/>
                            {<ErrorHandler root={errors === null || errors === void 0 ? void 0 : errors.email}/>}
                        </div>
                        <div className='col-12 mb-4'>
                            <Input as='textarea' label='Message' id='message' className='form-control' placeholder='Write your comment' style={{ minHeight: 100 }} {...register('comment')}/>
                        </div>
                        <div className='col-12'>
                            <button type='submit' className={classNames('btn btn-primary btn-loading')} style={{ minWidth: 220 }}>
                                Submit
                            </button>
                        </div>
                    </form>
                    <div className='mt-5'>
                        <div className='avatar avatar--lg align-items-start'>
                            <div className='avatar__image'>
                                <Image width={128} height={128} src='/images/users/thumb.jpg' alt='User'/>
                            </div>
                            <div className='avatar__content'>
                                <span className='avatar__title mb-1'>Androws Kinny</span>
                                <span className='avatar__subtitle mb-2'>Apr 22, 2019</span>
                                {getRatings(4)}
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam vel necessitatibus suscipit dicta quasi velit ratione nemo, voluptatum debitis cum sit quod dolor pariatur laudantium cumque.</p>
                                <a role='button' className='btn btn-link'>
                                    <div className='btn__wrap'>
                                        <RiReplyLine size={16}/>
                                        <span>Reply</span>
                                    </div>
                                </a>
                                <div className='avatar avatar--lg align-items-start mt-4'>
                                    <div className='avatar__image'>
                                        <Image width={128} height={128} src='/images/users/thumb.jpg' alt='User'/>
                                    </div>
                                    <div className='avatar__content'>
                                        <span className='avatar__title'>Androws Kinny</span>
                                        <span className='avatar__subtitle mb-2'>Apr 23, 2019</span>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam vel necessitatibus suscipit dicta quasi velit ratione nemo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='avatar avatar--lg align-items-start mt-4'>
                            <div className='avatar__image'>
                                <Image width={128} height={128} src='/images/users/thumb.jpg' alt='User'/>
                            </div>
                            <div className='avatar__content'>
                                <span className='avatar__title mb-1'>Androws Kinny</span>
                                <span className='avatar__subtitle mb-2'>Apr 16, 2019</span>
                                {getRatings(4)}
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam vel necessitatibus suscipit dicta quasi velit ratione nemo, voluptatum debitis cum sit quod dolor pariatur laudantium cumque.</p>
                                <a role='button' className='btn btn-link'>
                                    <div className='btn__wrap'>
                                        <RiReplyLine size={16}/>
                                        <span>Reply</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};
Comments.propTypes = propTypes;
Comments.displayName = 'Comments';
export default Comments;
