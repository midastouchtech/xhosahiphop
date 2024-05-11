/**
 * @name ProfileForm
 * @file form.tsx
 * @description profile form component
 */
"use client";
// Modules
import React from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
// Contexts
import { useTheme } from '@/core/contexts/theme';
// Components
import Input from '@/core/components/input';
import ErrorHandler from '@/core/components/error';
var ProfileForm = function () {
    var replaceClassName = useTheme().replaceClassName;
    var _a = useForm({
        defaultValues: {
            image: '/images/users/thumb.jpg',
            firstName: 'Androws',
            lastName: 'Kinny',
            displayName: 'Androws Kinny',
            location: 'Australia',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero aspernatur veniam eum distinctio repudiandae. Nihil cum quas dolores. Beatae odio temporibus quisquam quae! Possimus repellat sapiente incidunt.',
        }
    }), register = _a.register, handleSubmit = _a.handleSubmit, getValues = _a.getValues, errors = _a.formState.errors;
    /**
     *
     * Handle form `onSubmit` event
     * @param data
     */
    var submitForm = function (data) {
    };
    return (<form className={replaceClassName('px-4 pt-2 pe-xl-0 pt-sm-0 mt-4 mb-3 my-sm-0 w-100')} onSubmit={handleSubmit(submitForm)}>
            <div className='d-flex align-items-center mb-4'>
                <div className='avatar avatar--xl'>
                    <div className='avatar__image'>
                        <Image src={getValues().image} className='img-fluid' width={128} height={128} alt='User avatar'/>
                    </div>
                </div>
                <div className={replaceClassName('ps-3')}>
                    <input type='file' id='profile' className='d-none' {...register('image')}/>
                    <label htmlFor='profile' className='btn btn-white rounded-pill'>
                        Change image
                    </label>
                </div>
            </div>
            <div className='row g-4'>
                <div className='col-sm-6'>
                    <Input label='First name' id='f_name' className={classNames('form-control', (errors === null || errors === void 0 ? void 0 : errors.firstName) && 'is-invalid')} {...register('firstName', { required: true })}/>
                    {<ErrorHandler root={errors === null || errors === void 0 ? void 0 : errors.firstName}/>}
                </div>
                <div className='col-sm-6'>
                    <Input label='Last name' id='l_name' className={classNames('form-control', (errors === null || errors === void 0 ? void 0 : errors.lastName) && 'is-invalid')} {...register('lastName', { required: true })}/>
                    {<ErrorHandler root={errors === null || errors === void 0 ? void 0 : errors.lastName}/>}
                </div>
                <div className='col-sm-6'>
                    <Input label='Display name' id='d_name' className={classNames('form-control', (errors === null || errors === void 0 ? void 0 : errors.displayName) && 'is-invalid')} {...register('displayName', { required: true })}/>
                    {<ErrorHandler root={errors === null || errors === void 0 ? void 0 : errors.displayName}/>}
                </div>
                <div className='col-sm-6'>
                    <Input label='Location' id='location' className={classNames('form-control', (errors === null || errors === void 0 ? void 0 : errors.location) && 'is-invalid')} {...register('location', { required: true })}/>
                    {<ErrorHandler root={errors === null || errors === void 0 ? void 0 : errors.location}/>}
                </div>
                <div className='col-12'>
                    <Input as='textarea' label='About' id='description' className='form-control' placeholder='Write here...' style={{ minHeight: 100 }} {...register('description')}/>
                </div>
            </div>
            <button type='submit' className={classNames('mt-4 btn btn-primary btn-loading')}>
                Save changes
            </button>
        </form>);
};
ProfileForm.displayName = 'ProfileForm';
export default ProfileForm;
