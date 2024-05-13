/**
 * @name AlbumForm
 * @file form.tsx
 * @description song form component
 */
'use client';

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
import FindSelect from '@/core/components/find-select';
import Form from 'react-bootstrap/Form';

// Utilities
import { SongTypes } from '@/core/types';

const propTypes = {
  /**
   * Set file `attachmentId` HTML id attribute
   */
  attachmentId: PropTypes.string.isRequired,
};

const AlbumForm = ({ attachmentId, onChange, onFormSubmit, data }) => {
  const { replaceClassName } = useTheme();
  const {
    register,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**
   *
   * Handle dropzone `onDrop` event
   */
  const handleDrop = useCallback((url) => {
    //console.log('url', url);
    onChange({ target: { name: 'cover', value: url } });
  }, []);

  const handleSongFileDrop = useCallback((url) => {
    //console.log('song url', url);
    onChange({ target: { name: 'src', value: url } });
  }, []);

  const onSubmit = (data) => {
    //console.log('data', data);
    onFormSubmit(data);
  };

  const handleErrors = (errors) => {
    //console.log(errors);
  };

  return (
    <form
      className='row g-4'
      onChange={(e) => onChange(e)}
      onSubmit={handleSubmit(onSubmit, handleErrors)}
    >
      <div className='col-12'>
        <label className='fw-bold mb-2'>Cover image</label>
        <Controller
          name='cover'
          control={control}
          render={() => (
            <Dropzone
              noClick
              title='Drag & Drop or click to upload Cover Image'
              infoText='320x320 (Max: 120KB)'
              type='image'
              onDrop={handleDrop}
            />
          )}
        />
        {<ErrorHandler root={errors?.cover} />}
      </div>
      <div className='col-12'>
        <label className='fw-bold mb-2'>Name</label>
        <Input
          id='name'
          placeholder='Album name'
          className={classNames('form-control', errors?.name && 'is-invalid')}
          {...register('name', {
            required: true,
            minLength: { value: 5, message: '5' },
          })}
        />
        {<ErrorHandler root={errors?.name} />}
      </div>
      <div className='col-12'>
        <label className='fw-bold mb-2'>Release Date</label>
        <Input
          id='release'
          type='date'
          className={classNames(
            'form-control',
            errors?.release && 'is-invalid'
          )}
          {...register('release', {
            required: true,
          })}
        />
        {<ErrorHandler root={errors?.release} />}
      </div>
      <div className='col-sm-12'>
        <FindSelect
          name='artists'
          type='artists'
          onChange={onChange}
          labelKey='stageName'
          value={data.artists}
        />
      </div>
      <div className='col-sm-12'>
        <FindSelect
          name='composers'
          type='artists'
          onChange={onChange}
          labelKey='stageName'
          value={data.composers}
        />
        {<ErrorHandler root={errors?.composers} />}
      </div>
      <div className='col-sm-12'>
        <FindSelect
          name='lyricists'
          type='artists'
          onChange={onChange}
          labelKey='stageName'
          value={data.lyricists}
        />
        {<ErrorHandler root={errors?.lyricists} />}
      </div>
      <div className='col-sm-12'>
        <FindSelect
          name='directors'
          type='artists'
          onChange={onChange}
          labelKey='stageName'
          value={data.directors}
        />
        {<ErrorHandler root={errors?.directors} />}
      </div>
      <div className='col-sm-6'>
        <FindSelect
          name='record-label'
          type='labels'
          onChange={onChange}
          labelKey='name'
          value={data['record-label']}
          isSingleSelect
        />
        {<ErrorHandler root={errors?.directors} />}
      </div>
      <div className='col-6'>
        <FindSelect
          name='categories'
          type='categories'
          onChange={onChange}
          value={data.categories}
          labelKey='name'
        />
        {<ErrorHandler root={errors?.categories} />}
      </div>
      <div className='col-12'>
        <div className='d-flex align-items-center mb-2'>
          <div className={replaceClassName('form-check me-4')}>
            <input
              id='free'
              name='isFree'
              className='form-check-input'
              type='checkbox'
              checked={data['isFree'] ? true : false}
            />
            <label className='form-check-label' htmlFor='isFree'>
              Free
            </label>
          </div>
          <div className='form-check'>
            <input
              id='paid'
              name='isPaid'
              className='form-check-input'
              type='checkbox'
              checked={data['isPaid'] ? true : false}
            />
            <label className='form-check-label' htmlFor='isPaid'>
              Paid
            </label>
          </div>
        </div>
        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            R
          </span>
          <input
            type='text'
            className='form-control'
            placeholder='Song price'
            name='price'
          />
        </div>
        <div className='form-text mb-4 mt-4'>
          Please add album price if album is paid
        </div>
        <div className='card-footer text-center'>
          <input
            className='btn btn-primary text-white'
            style={{ minWidth: 120 }}
            type='submit'
            value={'Save Album'}
          />
          <button
            className={replaceClassName('btn btn-outline-secondary ms-2')}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

AlbumForm.propTypes = propTypes;
AlbumForm.displayName = 'SongForm';

export default AlbumForm;
