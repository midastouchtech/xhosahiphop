/**
 * @name PasswordForm
 * @file form.tsx
 * @description forgot password form component
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
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
// Components
import Input from '@/core/components/input';
import ErrorHandler from '@/core/components/error';
// Utilities
import { postData } from '@/core/utils/api-call';
import { EMAIL } from '@/core/constants/regex';
import { SUCCESSFUL } from '@/core/constants/codes';
var PasswordForm = function () {
    var enqueueSnackbar = useSnackbar().enqueueSnackbar;
    var _a = useForm(), register = _a.register, handleSubmit = _a.handleSubmit, reset = _a.reset, _b = _a.formState, errors = _b.errors, isSubmitting = _b.isSubmitting;
    var submitForm = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var email;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = data;
                    email.Component = 'forgot';
                    email.subject = 'Reset your password';
                    email.recipient = data.email;
                    return [4 /*yield*/, postData('/api/send-mail', email).then(function (result) {
                            if (result.status === SUCCESSFUL) {
                                reset();
                                enqueueSnackbar('Sent mail successfully');
                            }
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (<form className='mt-5' onSubmit={handleSubmit(submitForm)}>
            <div className='mb-3'>
                <Input label='Email' id='password' className={classNames('form-control', (errors === null || errors === void 0 ? void 0 : errors.email) && 'is-invalid')} {...register('email', {
        required: true,
        pattern: { value: EMAIL, message: 'email' }
    })}/>
                {<ErrorHandler root={errors === null || errors === void 0 ? void 0 : errors.email}/>}
            </div>
            <button type='submit' disabled={isSubmitting} className={classNames('btn btn-primary w-100 btn-loading', isSubmitting && 'active')}>
                Submit
            </button>
        </form>);
};
PasswordForm.displayName = 'PasswordForm';
export default PasswordForm;
