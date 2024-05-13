/**
 * @name RegisterForm
 * @file form.tsx
 * @description register form component
 */
'use client';

// Modules
import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { RiGoogleFill } from '@remixicon/react';
import { useLocalStorage } from 'usehooks-ts';
// Contexts
import { useTheme } from '@/core/contexts/theme';
// Components
import Input from '@/core/components/input';
import ErrorHandler from '@/core/components/error';
// Utilities
import { postData } from '@/core/utils/api-call';
import { PASSWORD } from '@/core/constants/regex';
import { SUCCESSFUL } from '@/core/constants/codes';
import { USER_KEY } from '@/core/constants/constant';

const RegisterForm = () => {
  const router = useRouter();
  const [user, saveUser] = useLocalStorage(USER_KEY, null);
  const { replaceClassName } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      agreed: true,
    },
  });

  /**
   *
   * Handle form `onSubmit` event
   * @param data
   */
  const submitForm = async (data) => {
    await postData('/api/register', data).then((result) => {
      //console.log('results are', result);
      if (result.status === SUCCESSFUL) {
        //saveUser(data);
        router.push('/auth/login');
      }
    });
  };

  /**
   *
   * Handle Google login `onClick` event
   */
  const loginWithGoogle = () => {
    // Do google login code here.
  };

  return (
    <form className='mt-5' onSubmit={handleSubmit(submitForm)}>
      <div className='mb-5'>
        <button
          type='button'
          className='btn btn-white w-100'
          onClick={loginWithGoogle}
        >
          <span className='btn__wrap'>
            <RiGoogleFill />
            <span className={replaceClassName('ms-2')}>
              Register with Google
            </span>
          </span>
        </button>
      </div>
      <div className='mb-4'>
        <div className='auth__or mx-auto fw-medium'></div>
      </div>
      <div className='mb-3'>
        <Input
          label='First name'
          id='firstName'
          className={classNames(
            'form-control',
            errors?.firstName && 'is-invalid'
          )}
          {...register('firstName', {
            required: true,
            minLength: { value: 2, message: '5' },
          })}
        />
        {<ErrorHandler root={errors?.firstName} />}
      </div>
      <div className='mb-3'>
        <Input
          label='Email'
          id='email'
          className={classNames('form-control', errors?.email && 'is-invalid')}
          {...register('email', {
            required: true,
            minLength: { value: 2, message: '5' },
          })}
        />
        {<ErrorHandler root={errors?.email} />}
      </div>
      <div className='mb-3'>
        <Input
          label='Last name'
          id='lastName'
          className={classNames(
            'form-control',
            errors?.lastName && 'is-invalid'
          )}
          {...register('lastName', {
            required: true,
            minLength: { value: 2, message: '5' },
          })}
        />
        {<ErrorHandler root={errors?.lastName} />}
      </div>
      <div className='mb-3'>
        <Input
          label='Stage Name'
          id='stageName'
          className={classNames(
            'form-control',
            errors?.stageName && 'is-invalid'
          )}
          {...register('stageName', {
            required: true,
            minLength: { value: 5, message: '5' },
          })}
        />
        {<ErrorHandler root={errors?.stageName} />}
      </div>
      <div className='mb-3'>
        <Input
          label='Username'
          id='username'
          className={classNames(
            'form-control',
            errors?.username && 'is-invalid'
          )}
          {...register('username', {
            required: true,
            minLength: { value: 2, message: '5' },
          })}
        />
        {<ErrorHandler root={errors?.username} />}
      </div>
      <div className='mb-3'>
        <Input
          label='Password'
          id='password'
          type='password'
          className={classNames(
            'form-control',
            errors?.password && 'is-invalid'
          )}
          {...register('password', {
            required: true,
            pattern: { value: PASSWORD, message: 'password' },
          })}
        />
        {<ErrorHandler root={errors?.password} />}
      </div>
      <div className='mb-3'>
        <Input
          label='Confirm Password'
          id='c_password'
          type='password'
          className={classNames(
            'form-control',
            errors?.cPassword && 'is-invalid'
          )}
          {...register('cPassword', {
            required: true,
            pattern: { value: PASSWORD, message: 'password' },
          })}
        />
        {<ErrorHandler root={errors?.cPassword} />}
      </div>
      <div className='mb-4'>
        <div className='form-check mb-0'>
          <input
            className='form-check-input'
            type='checkbox'
            id='agree'
            {...register('agreed', { required: true })}
          />
          <label className='form-check-label' htmlFor='agree'>
            I agree <Link href='/'>Terms & Condition</Link>
          </label>
        </div>
      </div>
      <div className='mb-5'>
        <button
          type='submit'
          className={classNames(
            'btn btn-primary w-100 btn-loading',
            isSubmitting && 'active'
          )}
          disabled={isSubmitting}
        >
          Register
        </button>
      </div>
      <p>
        Do you have an Account? <br />
        <Link href='/auth/login' className='fw-medium'>
          Login
        </Link>
      </p>
    </form>
  );
};

RegisterForm.displayName = 'RegisterForm';
export default RegisterForm;
