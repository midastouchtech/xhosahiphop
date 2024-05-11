/**
 * @name RegisterForm
 * @file form.tsx
 * @description register form component
 */
"use client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var RegisterForm = function () {
    var router = useRouter();
    var _a = useLocalStorage(USER_KEY, null), saveUser = _a[1];
    var replaceClassName = useTheme().replaceClassName;
    var _b = useForm({
        defaultValues: {
            agreed: true
        }
    }), register = _b.register, handleSubmit = _b.handleSubmit, _c = _b.formState, errors = _c.errors, isSubmitting = _c.isSubmitting;
    /**
     *
     * Handle form `onSubmit` event
     * @param data
     */
    var submitForm = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, postData('/api/register', data).then(function (result) {
                        if (result.status === SUCCESSFUL) {
                            saveUser(data);
                            router.push('/music');
                        }
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    /**
     *
     * Handle Google login `onClick` event
     */
    var loginWithGoogle = function () {
        // Do google login code here.
    };
    return (<form className='mt-5' onSubmit={handleSubmit(submitForm)}>
            <div className='mb-5'>
                <button type='button' className='btn btn-white w-100' onClick={loginWithGoogle}>
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
                <Input label='Username' id='username' className={classNames('form-control', (errors === null || errors === void 0 ? void 0 : errors.username) && 'is-invalid')} {...register('username', {
        required: true,
        minLength: { value: 5, message: '5' }
    })}/>
                {<ErrorHandler root={errors === null || errors === void 0 ? void 0 : errors.username}/>}
            </div>
            <div className='mb-3'>
                <Input label='Password' id='password' type='password' className={classNames('form-control', (errors === null || errors === void 0 ? void 0 : errors.password) && 'is-invalid')} {...register('password', {
        required: true,
        pattern: { value: PASSWORD, message: 'password' }
    })}/>
                {<ErrorHandler root={errors === null || errors === void 0 ? void 0 : errors.password}/>}
            </div>
            <div className='mb-3'>
                <Input label='Confirm Password' id='c_password' type='password' className={classNames('form-control', (errors === null || errors === void 0 ? void 0 : errors.cPassword) && 'is-invalid')} {...register('cPassword', {
        required: true,
        pattern: { value: PASSWORD, message: 'password' }
    })}/>
                {<ErrorHandler root={errors === null || errors === void 0 ? void 0 : errors.cPassword}/>}
            </div>
            <div className='mb-4'>
                <div className='form-check mb-0'>
                    <input className='form-check-input' type='checkbox' id='agree' {...register('agreed', { required: true })}/>
                    <label className='form-check-label' htmlFor='agree'>
                        I agree <Link href='/'>Terms & Condition</Link>
                    </label>
                </div>
            </div>
            <div className='mb-5'>
                <button type='submit' className={classNames('btn btn-primary w-100 btn-loading', isSubmitting && 'active')} disabled={isSubmitting}>
                    Register
                </button>
            </div>
            <p>Do you have an Account? <br />
                <Link href='/auth/login' className='fw-medium'>Login</Link>
            </p>
        </form>);
};
RegisterForm.displayName = 'RegisterForm';
export default RegisterForm;
