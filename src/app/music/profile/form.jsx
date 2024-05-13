/**
 * @name ProfileForm
 * @file form.tsx
 * @description profile form component
 */
'use client';
// Modules
import React, { useCallback } from 'react';
import classNames from 'classnames';
import { useForm, Controller } from 'react-hook-form';
import Image from 'next/image';
// Contexts
import { useTheme } from '@/core/contexts/theme';
// Components
import Input from '@/core/components/input';
import ErrorHandler from '@/core/components/error';
import { useAuthentication } from '@/core/contexts/authentication';
import Dropzone from '@/core/components/dropzone';
import { DEFAULT_USER, USER_KEY } from '@/core/constants/constant';
import { useLocalStorage } from 'usehooks-ts';

import axios from 'axios';
var ProfileForm = function () {
  const { currentUser } = useAuthentication();
  var replaceClassName = useTheme().replaceClassName;
  var _a = useForm({
      defaultValues: {
        _id: currentUser._id || '',
        image: currentUser.image || '/images/users/thumb.jpg',
        firstName: currentUser.firstName || '',
        lastName: currentUser.lastName || '',
        stageName: currentUser.stageName || '',
        username: currentUser.username || '',
        location: currentUser.location || '',
        description: currentUser.description || '',
      },
    }),
    register = _a.register,
    handleSubmit = _a.handleSubmit,
    getValues = _a.getValues,
    setValue = _a.setValue,
    control = _a.control,
    errors = _a.formState.errors;

  const [, saveUser] = useLocalStorage(USER_KEY, null);

  /**
   *
   * Handle form `onSubmit` event
   * @param data
   */
  var submitForm = function (data) {
    console.log('submitting data', data);
    axios
      .post('/api/artists/update', data)
      .then(function (response) {
        console.log('response', response);
        if (response.status === 200) {
          var result = response.data;
          console.log('results are', result);
          var user = result.data;
          console.log('user', user);
          saveUser(user);
        } else {
          console.log('error', error);
        }
      })
      .catch(function (error) {
        console.log('error', error);
      });
  };

  const handleDrop = useCallback((data) => {
    console.log('url', data);
    setValue('image', data.fileUrl);
  });

  return (
    <form
      className={replaceClassName(
        'px-4 pt-2 pe-xl-0 pt-sm-0 mt-4 mb-3 my-sm-0 w-100'
      )}
      onSubmit={handleSubmit(submitForm)}
    >
      <div className='d-flex align-items-center mb-4'>
        <div className='col-12'>
          <label className='fw-bold mb-2'>Profile Picture</label>
          <Controller
            name='image'
            control={control}
            render={() => (
              <Dropzone
                noClick
                title='Drag & Drop or click to upload picture'
                infoText='(Max: 10mb)'
                onDrop={handleDrop}
                type='image'
                label='Upload Image File'
              />
            )}
            {...register('image', { required: true })}
          />
          {<ErrorHandler root={errors?.image} />}
        </div>
      </div>
      <div className='row g-4'>
        <div className='col-sm-6'>
          <Input
            label='First name'
            id='f_name'
            className={classNames(
              'form-control',
              (errors === null || errors === void 0
                ? void 0
                : errors.firstName) && 'is-invalid'
            )}
            {...register('firstName', { required: true })}
          />
          {
            <ErrorHandler
              root={
                errors === null || errors === void 0 ? void 0 : errors.firstName
              }
            />
          }
        </div>
        <div className='col-sm-6'>
          <Input
            label='Last name'
            id='l_name'
            className={classNames(
              'form-control',
              (errors === null || errors === void 0
                ? void 0
                : errors.lastName) && 'is-invalid'
            )}
            {...register('lastName', { required: true })}
          />
          {
            <ErrorHandler
              root={
                errors === null || errors === void 0 ? void 0 : errors.lastName
              }
            />
          }
        </div>
        <div className='col-sm-6'>
          <Input
            label='Stage name'
            id='d_name'
            className={classNames(
              'form-control',
              (errors === null || errors === void 0
                ? void 0
                : errors.stageName) && 'is-invalid'
            )}
            {...register('stageName', { required: true })}
          />
          {
            <ErrorHandler
              root={
                errors === null || errors === void 0 ? void 0 : errors.stageName
              }
            />
          }
        </div>
        <div className='col-sm-6'>
          <Input
            label='Location'
            id='location'
            className={classNames(
              'form-control',
              (errors === null || errors === void 0
                ? void 0
                : errors.location) && 'is-invalid'
            )}
            {...register('location', { required: true })}
          />
          {
            <ErrorHandler
              root={
                errors === null || errors === void 0 ? void 0 : errors.location
              }
            />
          }
        </div>
        <div className='col-12'>
          <Input
            label='Username'
            id='d_name'
            className={classNames(
              'form-control',
              (errors === null || errors === void 0
                ? void 0
                : errors.username) && 'is-invalid'
            )}
            {...register('username', { required: true })}
          />
          {
            <ErrorHandler
              root={
                errors === null || errors === void 0 ? void 0 : errors.username
              }
            />
          }
        </div>
        <div className='col-12'>
          <Input
            as='textarea'
            label='About'
            id='description'
            className='form-control'
            placeholder='Write here...'
            style={{ minHeight: 100 }}
            {...register('description')}
          />
        </div>
      </div>
      <button
        type='submit'
        className={classNames('mt-4 btn btn-primary btn-loading')}
      >
        Save changes
      </button>
    </form>
  );
};
ProfileForm.displayName = 'ProfileForm';
export default ProfileForm;
