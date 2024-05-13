/**
 * @name LoginForm
 * @file form.tsx
 * @description login form component
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
import { DEFAULT_USER, USER_KEY } from '@/core/constants/constant';

const LoginForm = () => {
  const router = useRouter();
  const [, saveUser] = useLocalStorage(USER_KEY, null);
  const { replaceClassName } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({});
  const [formError, setFormError] = React.useState('');

  /**
   *
   * Handle form `onSubmit` event
   * @param data
   */
  const submitForm = async (data) => {
    await postData('/api/login', data).then(async (response) => {
      if (response.status === SUCCESSFUL) {
        setFormError('');
        // Change {DEFAULT_USER} with your data.
        const result = response.data;
        //console.log('results are', result);
        const user = result.data;
        //console.log('user', user);
        saveUser(user);
        router.push('/music');
      } else {
        //console.log('error', error);
        setFormError('Incorrect password or username');
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
            <span className={replaceClassName('ms-2')}>Login with Google</span>
          </span>
        </button>
      </div>
      <div className='mb-4'>
        <div className='auth__or mx-auto fw-medium'></div>
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
            minLength: { value: 5, message: '5' },
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
      <div className={replaceClassName('mb-4 text-end')}>
        <Link href='/auth/forgot' className='link-primary fw-medium'>
          Forgot Password?
        </Link>
      </div>
      <div className='mb-5'>
        <button
          type='submit'
          disabled={isSubmitting}
          className={classNames(
            'btn btn-primary w-100 btn-loading',
            isSubmitting && 'active'
          )}
        >
          Login
        </button>
      </div>
      <div className='mb-4'>
        <div className='text-danger text-center'>
          <small>{formError}</small>
        </div>
      </div>

      <p>
        Not registered yet? <br />
        <Link href='/auth/register' className='fw-medium'>
          Register
        </Link>
      </p>
    </form>
  );
};

LoginForm.displayName = 'LoginForm';
export default LoginForm;
