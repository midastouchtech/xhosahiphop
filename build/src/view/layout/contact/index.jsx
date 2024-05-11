/**
 * @name Contact
 * @file index.tsx
 * @description contact page component
 */
"use client";
// Modules
import React from 'react';
// Contexts
import { useTheme } from '@/core/contexts/theme';
// Components
import ContactForm from './form';
var Contact = function () {
    var replaceClassName = useTheme().replaceClassName;
    return (
    // Main section [[ Find at scss/framework/section.scss ]]
    <div className='main-section'>
            <div className='container'>
                <div className='col-xl-6 col-lg-8 mx-auto text-center fs-5 mb-5'>
                    <h2>Get In <span className='text-primary'>Touch</span></h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus sit aliquid molestiae sint ab illo.</p>
                </div>
                <div className='col-xl-7 col-lg-9 mx-auto mb-5'>
                    <div className='card p-lg-4'>
                        <div className='card-body'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
                <div className={replaceClassName('col-xl-6 col-lg-8 mx-auto fs-6 text-center text-sm-start')}>
                    <div className='row g-4'>
                        <div className='col-sm-6'>
                            <div className='fs-5 fw-semibold text-dark mb-2'>USA</div>
                            <p>1721 Galleria Blvd, Franklin, <br />Tennessee - 37067</p>
                        </div>
                        <div className='col-sm-6'>
                            <div className='fs-5 fw-semibold text-dark mb-2'>Canada</div>
                            <p>905 Dunsmuir St, Vancouver, <br />British Columbia - V6C 2G2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};
Contact.displayName = 'Contact';
export default Contact;
