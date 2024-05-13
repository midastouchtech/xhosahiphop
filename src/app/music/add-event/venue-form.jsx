/**
 * @name VenueForm
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

var VenueForm = function ({ onChange, data, onFormSubmit }) {
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
    onFormSubmit(data);
  };
  /**
   *
   * Handle dropzone `onDrop` event
   */
  const handleDrop = (id) =>
    useCallback((url) => {
      //console.log(id, url);
      onChange({ target: { name: id, value: url } });
    }, []);

  return (
    <form
      className='card'
      onSubmit={handleSubmit(submitForm)}
      onChange={(e) => onChange(e)}
    >
      <div className='card-header'>
        <h4 className='mb-0'>
          Create <span className='text-primary'>Venue</span>
        </h4>
      </div>
      <div className='card-body'>
        <div className='row g-4'>
          <div className='col-12'>
            <label className='form-label mb-2 fw-bold'>Venue Image</label>
            <Controller
              name='image'
              control={control}
              render={function () {
                return (
                  <Dropzone
                    noClick
                    title='Drag & Drop or click to upload Venue Image'
                    infoText='320x320 (Max: 200KB)'
                    type='image'
                    onDrop={handleDrop('cover')}
                  />
                );
              }}
            />
            {
              <ErrorHandler
                root={
                  errors === null || errors === void 0 ? void 0 : errors.cover
                }
              />
            }
          </div>
          <div className='col-12'>
            <label className='fw-bold mb-2'>Promo video</label>
            <Controller
              name='promo'
              control={control}
              render={function () {
                return (
                  <Dropzone
                    noClick
                    title='Drag & Drop or click to upload Venue Promo Video'
                    infoText='320x320 (Max: 20MB)'
                    type='video'
                    onDrop={handleDrop('promo')}
                  />
                );
              }}
            />
            {
              <ErrorHandler
                root={
                  errors === null || errors === void 0 ? void 0 : errors.promo
                }
              />
            }
          </div>
          <div className='col-12'>
            <label className='fw-bold mb-2'>Venue Name</label>
            <Input
              id='name'
              placeholder='Event name'
              className={classNames(
                'form-control',
                (errors === null || errors === void 0 ? void 0 : errors.name) &&
                  'is-invalid'
              )}
              {...register('name', {
                required: true,
                minLength: { value: 5, message: '5' },
              })}
            />
            {
              <ErrorHandler
                root={
                  errors === null || errors === void 0 ? void 0 : errors.name
                }
              />
            }
          </div>
          <label className='fw-bold mb-2'>Address</label>
          <div className='col-6'>
            <label className='fw-bold mb-2'>Street</label>
            <Input
              id='street1'
              placeholder='Street'
              className={classNames(
                'form-control',
                (errors === null || errors === void 0 ? void 0 : errors.name) &&
                  'is-invalid'
              )}
              {...register('street1', {
                required: true,
                minLength: { value: 5, message: '5' },
              })}
            />
            {
              <ErrorHandler
                root={
                  errors === null || errors === void 0 ? void 0 : errors.name
                }
              />
            }
          </div>
          <div className='col-6'>
            <label className='fw-bold mb-2'>Street</label>
            <Input
              id='street2'
              placeholder='Street'
              className={classNames(
                'form-control',
                (errors === null || errors === void 0 ? void 0 : errors.name) &&
                  'is-invalid'
              )}
              {...register('street2', {
                required: true,
                minLength: { value: 5, message: '5' },
              })}
            />
            {
              <ErrorHandler
                root={
                  errors === null || errors === void 0 ? void 0 : errors.name
                }
              />
            }
          </div>
          <div className='col-6'>
            <label className='fw-bold mb-2'>Suburb</label>
            <Input
              id='suburb'
              placeholder='Suburb'
              className={classNames(
                'form-control',
                (errors === null || errors === void 0 ? void 0 : errors.name) &&
                  'is-invalid'
              )}
              {...register('suburb', {
                required: true,
                minLength: { value: 5, message: '5' },
              })}
            />
            {
              <ErrorHandler
                root={
                  errors === null || errors === void 0 ? void 0 : errors.name
                }
              />
            }
          </div>
          <div className='col-6'>
            <label className='fw-bold mb-2'>City</label>
            <Input
              id='city'
              placeholder='City'
              className={classNames(
                'form-control',
                (errors === null || errors === void 0 ? void 0 : errors.name) &&
                  'is-invalid'
              )}
              {...register('city', {
                required: true,
                minLength: { value: 5, message: '5' },
              })}
            />
            {
              <ErrorHandler
                root={
                  errors === null || errors === void 0 ? void 0 : errors.name
                }
              />
            }
          </div>
          <div className='col-6'>
            <label className='fw-bold mb-2'>Province</label>
            <Input
              id='province'
              placeholder='Province'
              className={classNames(
                'form-control',
                (errors === null || errors === void 0 ? void 0 : errors.name) &&
                  'is-invalid'
              )}
              {...register('province', {
                required: true,
                minLength: { value: 5, message: '5' },
              })}
            />
            {
              <ErrorHandler
                root={
                  errors === null || errors === void 0 ? void 0 : errors.name
                }
              />
            }
          </div>
          <div className='col-6'>
            <label className='fw-bold mb-2'>Country</label>
            <Input
              id='country'
              placeholder='Country'
              className={classNames(
                'form-control',
                (errors === null || errors === void 0 ? void 0 : errors.name) &&
                  'is-invalid'
              )}
              {...register('country', {
                required: true,
                minLength: { value: 5, message: '5' },
              })}
            />
            {
              <ErrorHandler
                root={
                  errors === null || errors === void 0 ? void 0 : errors.name
                }
              />
            }
          </div>

          <div className='col-12'>
            <label className='form-label'>
              Good for hosting which kind of events
            </label>
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
            <label className='fw-bold mb-2'>Email</label>
            <Input
              id='email'
              placeholder='Email'
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
              id='contactNumber'
              placeholder='Contact number'
              className={classNames(
                'form-control',
                (errors === null || errors === void 0
                  ? void 0
                  : errors['contactNumber']) && 'is-invalid'
              )}
              {...register('contactNumber', {
                required: true,
                pattern: { value: PHONE, message: 'phone' },
              })}
            />
            {
              <ErrorHandler
                root={
                  errors === null || errors === void 0
                    ? void 0
                    : errors['contactNumber']
                }
              />
            }
          </div>
          <div className='col-sm-12'>
            <label className='fw-bold mb-2'>Additional Contact Number</label>
            <Input
              id='additionalContactNumber'
              placeholder='Additional contact number'
              className={classNames(
                'form-control',
                (errors === null || errors === void 0
                  ? void 0
                  : errors['additionalContactNumber']) && 'is-invalid'
              )}
              {...register('additionalContactNumber', {
                required: true,
                pattern: { value: PHONE, message: 'phone' },
              })}
            />
            {
              <ErrorHandler
                root={
                  errors === null || errors === void 0
                    ? void 0
                    : errors['contactNumber2']
                }
              />
            }
          </div>
          <div className='col-12'>
            <div className='d-flex flex-column align-items-start mb-2'>
              <div className={replaceClassName('form-check me-4 mb-2')}>
                <Input
                  id='free'
                  name='allowsGoodsSale'
                  className='form-check-input'
                  type='checkbox'
                  checked={data['allowsGoodsSale'] ? true : false}
                  {...register('allowsGoodsSale', {
                    required: true,
                  })}
                />
                <label className='form-check-label' htmlFor='allowsGoodsSale'>
                  Allows sale of goods?
                </label>
              </div>
              <div className='form-check mb-2'>
                <Input
                  id='paid'
                  name='allowsAlchoholSale'
                  className='form-check-input'
                  type='checkbox'
                  checked={data['allowsAlchoholSale'] ? true : false}
                  {...register('allowsAlchoholSale', {
                    required: true,
                  })}
                />
                <label
                  className='form-check-label'
                  htmlFor='allowsAlchoholSale'
                >
                  Allows sale of alchohol?
                </label>
              </div>
              <div className='form-check mb-2'>
                <Input
                  id='paid'
                  name='allowsAlchoholConsumption'
                  className='form-check-input'
                  type='checkbox'
                  checked={data['allowsAlchoholConsumption'] ? true : false}
                  {...register('allowsAlchoholConsumption', {
                    required: true,
                  })}
                />
                <label
                  className='form-check-label'
                  htmlFor='allowsAlchoholConsumption'
                >
                  Allows consumption of alchohol?
                </label>
              </div>
              <div className='form-check mb-2'>
                <Input
                  id='paid'
                  name='hasToilets'
                  className='form-check-input'
                  type='checkbox'
                  checked={data['hasToilets'] ? true : false}
                  {...register('hasToilets', {
                    required: true,
                  })}
                />
                <label className='form-check-label' htmlFor='hasToilets'>
                  Has Toilets?
                </label>
              </div>
              <div className='form-check mb-2'>
                <Input
                  id='paid'
                  name='hasWifi'
                  className='form-check-input'
                  type='checkbox'
                  checked={data['hasWifi'] ? true : false}
                  {...register('hasWifi', {
                    required: true,
                  })}
                />
                <label className='form-check-label' htmlFor='hasWifi'>
                  Has Wifi?
                </label>
              </div>
              <div className='form-check mb-2'>
                <Input
                  id='paid'
                  name='isIndoors'
                  className='form-check-input'
                  type='checkbox'
                  checked={data['isIndoors'] ? true : false}
                  {...register('isIndoors', {
                    required: true,
                  })}
                />
                <label className='form-check-label' htmlFor='isIndoors'>
                  This venue is indoors?
                </label>
              </div>
              <div className='form-check mb-2'>
                <Input
                  id='paid'
                  name='isOutdoors'
                  className='form-check-input'
                  type='checkbox'
                  checked={data['isOutdoors'] ? true : false}
                  {...register('isOutdoors', {
                    required: true,
                  })}
                />
                <label className='form-check-label' htmlFor='isOutdoors'>
                  This venue is outdoors?
                </label>
              </div>
            </div>
          </div>
          <div className='col-sm-12'>
            <Input
              id='size'
              placeholder='Size in square meters'
              className='form-control'
              {...register('size')}
            />
          </div>
          <div className='col-12'>
            <Input
              as='textarea'
              id='description'
              placeholder='Write few words about the venue'
              className='form-control'
              style={{ minHeight: 100 }}
              {...register('description')}
            />
            <div className='form-text'>Describe venue in 250 words.</div>
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
                placeholder='Price per hour in Rands'
                name='price'
              />
            </div>
            <div className='form-text mb-4 mt-4'>
              Please add venue price if is a paid venue
            </div>
            <div className='card-footer text-center'>
              <input
                className='btn btn-primary text-white'
                style={{ minWidth: 120 }}
                type='submit'
                value={'Save Venue'}
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
VenueForm.displayName = 'VenueForm';
export default VenueForm;
