/**
 * @name Hero
 * @file hero.tsx
 * @description music landing page hero section component
 */
'use client';
// Modules
import React from 'react';
import Link from 'next/link';
// Contexts
import { useTheme } from '@/core/contexts/theme';
var Hero = function () {
  var replaceClassName = useTheme().replaceClassName;
  return (
    <section className='container-fluid px-xl-4'>
      {/* Main hero [[ Find at scss/framework/hero.scss ]] */}
      <div className='main-hero mx-auto'>
        <div className='container'>
          <div className='col-xl-6 col-lg-8 col-md-9 fs-5'>
            <h1 className='main-hero__title mb-3'>Home of Xhosa Rap Music</h1>
            <div className={replaceClassName('me-sm-5')}>
              <p className='text-white'>
                Dive into the vibrant world of Xhosa rap music. Discover new
                tracks, connect with artists, and celebrate Xhosa culture
                through HipHop. Your journey into the heart of Xhosa HipHop
                starts here.
              </p>
              <div className='d-flex gap-2'>
                <Link
                  className='btn btn-lg btn-white flex-sm-grow-0 flex-grow-1'
                  href='/auth/register'
                >
                  Try it free
                </Link>
                <Link
                  className='btn btn-lg btn-outline-light flex-sm-grow-0 flex-grow-1'
                  href='/auth/register'
                >
                  Discover
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
Hero.displayName = 'Hero';
export default Hero;
