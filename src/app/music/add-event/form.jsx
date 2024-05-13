/**
 * @name EventForm
 * @file form.tsx
 * @description event form component
 */
'use client';
// Modules
import React, { useCallback } from 'react';
import classNames from 'classnames';
import { useForm, Controller } from 'react-hook-form';
import { RiMoneyDollarCircleLine } from '@remixicon/react';
// Contexts
import { useTheme } from '@/core/contexts/theme';
// Components
import Dropzone from '@/core/components/dropzone';
import Input from '@/core/components/input';
import ErrorHandler from '@/core/components/error';
// Utilities
import { EMAIL, PHONE } from '@/core/constants/regex';
import FindSelect from '@/core/components/find-select';
import { Form } from 'react-bootstrap';

var EventForm = function ({ onChange, data, onFormSubmit }) {
  var replaceClassName = useTheme().replaceClassName;
  var _a = useForm(),
    register = _a.register,
    handleSubmit = _a.handleSubmit,
    setValue = _a.setValue,
    control = _a.control,
    errors = _a.formState.errors;
  /**
   *
   * Handle form `onSubmit` event
   * @param data
   */
  var submitForm = function (data) {
    console.log('submitting form', data);
    onFormSubmit();
  };
  /**
   *
   * Handle dropzone `onDrop` event
   */
  var handleDrop = useCallback(function (url) {
    console.log('url', url);
    onChange({
      target: {
        name: 'image',
        value: url,
      },
    });
  }, []);

  const handleTimeChange = (time) => {
    console.log(time); // <- prints "3600" if "01:00" is picked
    this.setState({ time });
  };

  return (
    <form
      className='card'
      onSubmit={handleSubmit(submitForm)}
      onChange={(e) => onChange(e)}
    >
      <div className='card-header'>
        <h4 className='mb-0'>
          Create <span className='text-primary'>Event</span>
        </h4>
      </div>
      <div className='card-body'>
        <div className='row g-4'>
          <div className='col-12'>
            <Controller
              name='image'
              control={control}
              render={function () {
                return (
                  <Dropzone
                    noClick
                    onDrop={handleDrop}
                    type='image'
                    title='Drag & Drop or click to upload Event Photo'
                  />
                );
              }}
            />
            {
              <ErrorHandler
                root={
                  errors === null || errors === void 0 ? void 0 : errors.image
                }
              />
            }
          </div>
          <div className='col-12'>
            <Input
              id='title'
              placeholder='Event name'
              className={classNames(
                'form-control',
                (errors === null || errors === void 0
                  ? void 0
                  : errors.title) && 'is-invalid'
              )}
              {...register('title', {
                required: true,
                minLength: { value: 5, message: '5' },
              })}
            />
            {
              <ErrorHandler
                root={
                  errors === null || errors === void 0 ? void 0 : errors.title
                }
              />
            }
          </div>
          <div className='col-12'>
            <FindSelect
              name='venue'
              type='venues'
              onChange={onChange}
              labelKey='name'
              value={data.venue}
              isSingleSelect={true}
            />
            {<ErrorHandler root={errors?.title} />}
          </div>
          <div className='col-12'>
            <FindSelect
              name='artists'
              type='artists'
              onChange={onChange}
              labelKey='stageName'
              value={data.artists}
              createEntityType='artist'
            />
            {<ErrorHandler root={errors?.title} />}
          </div>
          <div className='col-12'>
            <label className='fw-bold mb-2'>Special Perfomance</label>
            <FindSelect
              name='specialPerfomance'
              type='artists'
              onChange={onChange}
              labelKey='stageName'
              value={data.specialPerfomance}
              createEntityType='artist'
              hideLabel={true}
            />
            {<ErrorHandler root={errors?.title} />}
          </div>
          <label className='fw-bold mb-2 text-secondary'>Organisers</label>
          <div className='row bg-dark p-3 pb-4 rounded rounded-sm'>
            <div className='col-12'>
              <FindSelect
                name='people'
                type='artists'
                onChange={onChange}
                labelKey='stageName'
                value={data.people}
                createEntityType='organiser'
              />
              {<ErrorHandler root={errors?.title} />}
            </div>
            <div className='col-12'>
              <FindSelect
                name='companies'
                type='labels'
                onChange={onChange}
                labelKey='name'
                value={data.companies}
              />
              {<ErrorHandler root={errors?.title} />}
            </div>
          </div>
          <div className='col-12'>
            <label className='fw-bold mb-2'>Event Type</label>
            <FindSelect
              name='event-type'
              type='event-types'
              onChange={onChange}
              labelKey='name'
              value={data['event-type']}
              hideLabel
            />
            {<ErrorHandler root={errors?.title} />}
          </div>
          <div className='col-sm-6'>
            <label className='fw-bold mb-2'>Date</label>
            <Input
              id='date'
              type='date'
              className={classNames(
                'form-control',
                (errors === null || errors === void 0 ? void 0 : errors.date) &&
                  'is-invalid'
              )}
              {...register('date', { required: true })}
            />
            {
              <ErrorHandler
                root={
                  errors === null || errors === void 0 ? void 0 : errors.date
                }
              />
            }
          </div>
          <div className='col-sm-6'>
            <label className='fw-bold mb-2'>Email</label>
            <Input
              id='email'
              placeholder='Organizer email'
              className={classNames(
                'form-control',
                (errors === null || errors === void 0
                  ? void 0
                  : errors.email) && 'is-invalid'
              )}
              {...register('email', {
                required: true,
                pattern: { value: EMAIL, message: 'email' },
              })}
            />
            {
              <ErrorHandler
                root={
                  errors === null || errors === void 0 ? void 0 : errors.email
                }
              />
            }
          </div>
          <div className='col-sm-6'>
            <label className='fw-bold mb-2'>Contact Number</label>
            <Input
              id='phone'
              placeholder='Organizer phone'
              className={classNames(
                'form-control',
                (errors === null || errors === void 0
                  ? void 0
                  : errors.phone) && 'is-invalid'
              )}
              {...register('phone', {
                required: true,
                pattern: { value: PHONE, message: 'phone' },
              })}
            />
            {
              <ErrorHandler
                root={
                  errors === null || errors === void 0 ? void 0 : errors.phone
                }
              />
            }
          </div>
          <div className='col-sm-6'>
            <label className='fw-bold mb-2'>Seats</label>
            <Input
              id='seats'
              name='seats'
              type='number'
              placeholder='Event seats'
              className='form-control'
              {...register('seats')}
            />
          </div>
          <div className='col-sm-6'>
            <label className='fw-bold mb-2'>Event Start Time</label>
            <Form.Control
              type='time'
              id='startTime'
              name='startTime'
              placeholder='Enter HH:mm e.g 16:30'
              className='form-control'
              {...register('startTime')}
            />
          </div>
          <div className='col-sm-6'>
            <label className='fw-bold mb-2'>Event Duration In Minutes</label>
            <Input
              id='duration'
              name='duration'
              type='number'
              placeholder='Enter amount of time in minutes e.g 180'
              className='form-control'
              {...register('duration')}
            />
          </div>
          <div className='col-12'>
            <div className='d-flex flex-column align-items-start mb-2'>
              <div className={replaceClassName('form-check me-4 mb-2')}>
                <Input
                  id='free'
                  name='alchoholToBeSoldOnPremise'
                  className='form-check-input'
                  type='checkbox'
                  checked={data['alchoholToBeSoldOnPremise'] ? true : false}
                  {...register('alchoholToBeSoldOnPremise', {
                    optional: true,
                  })}
                />
                <label
                  className='form-check-label'
                  htmlFor='alchoholToBeSoldOnPremise'
                >
                  Alchohol sold on premise?
                </label>
              </div>
              <div className={replaceClassName('form-check me-4 mb-2')}>
                <Input
                  id='free'
                  name='snacksToBeSoldOnPremise'
                  className='form-check-input'
                  type='checkbox'
                  checked={data['snacksToBeSoldOnPremise'] ? true : false}
                  {...register('snacksToBeSoldOnPremise', {
                    optional: true,
                  })}
                />
                <label
                  className='form-check-label'
                  htmlFor='snacksToBeSoldOnPremise'
                >
                  Food & Snacks sold on premise?
                </label>
              </div>
              <div className={replaceClassName('form-check me-4 mb-2')}>
                <Input
                  id='free'
                  name='isBringYourOwnBeer'
                  className='form-check-input'
                  type='checkbox'
                  checked={data['isBringYourOwnBeer'] ? true : false}
                />
                <label
                  className='form-check-label'
                  htmlFor='isBringYourOwnBeer'
                >
                  Bring Your Own Beer?
                </label>
              </div>
            </div>
          </div>

          <div className='col-12'>
            <Input
              as='textarea'
              id='description'
              placeholder='Write few words about event'
              className='form-control'
              style={{ minHeight: 100 }}
              {...register('description')}
            />
            <div className='form-text'>Describe event in 100 words.</div>
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
                  {...register('isFree', {
                    optional: true,
                  })}
                />
                <label className='form-check-label' htmlFor='free'>
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
                  {...register('isPaid', {
                    optional: true,
                  })}
                />
                <label className='form-check-label' htmlFor='paid'>
                  Paid
                </label>
              </div>
            </div>
            <div className='input-group'>
              <span className='input-group-text' id='basic-addon1'>
                <RiMoneyDollarCircleLine />
              </span>
              <input
                type='text'
                className='form-control'
                placeholder='Ticket price'
              />
            </div>
            <div className='form-text mb-4'>
              Please add ticket price if Event is paid
            </div>
            <div className='card-footer text-center'>
              <input
                className='btn btn-primary text-white'
                style={{ minWidth: 120 }}
                type='submit'
                value={'Save Event'}
              />
              <button
                className={replaceClassName('btn btn-outline-secondary ms-2')}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
EventForm.displayName = 'EventForm';
export default EventForm;
