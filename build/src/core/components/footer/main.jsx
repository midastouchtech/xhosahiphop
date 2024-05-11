/**
 * @name MainFooter
 * @file main.tsx
 * @description music main pages footer component
 */
'use client';
// Modules
import React from 'react';
import Link from 'next/link';
import moment from 'moment';
// Components
import DownloadApp from './download-app';
// Utilities
import { BRAND, SOCIAL } from '@/core/constants/constant';
var MainFooter = function () {
    var year = moment().year();
    return (<>
      <section className='container'>
        {/* Newsletter [[ Find at scss/base/core.scss ]] */}
        <div className='newsletter text-white'>
          <div className='col-xl-7 col-lg-10 fs-5 mx-auto text-center'>
            <h2 className='text-white'>Join the Xhosa HipHop Movement</h2>
            <p>
              Xhosa HipHop is more than just music; it's a cultural movement.
              Join our vibrant community, discover and support Xhosa rap talent,
              and celebrate the power of your roots through the rhythm of
              HipHop.
            </p>
            <Link href='/soon' className='btn btn-lg btn-white mt-3'>
              Register now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer [[ Find at scss/framework/footer.scss ]] */}
      <footer id='main_footer'>
        <div className='container'>
          <div className='col-xl-6 col-lg-8 col-md-10 mx-auto text-center'>
            <h3 className='mb-5'>
              <span className='text-primary'>
                {' '}
                Millions of Xhosa rap tracks{' '}
              </span>
              at your fingertips. All you need is your love for the culture to
              join the movement. Sign up for free and start exploring today!
            </h3>
            <DownloadApp />
          </div>
          <div className='last-footer py-4'>
            <span>
              &copy {year} {BRAND.name}. All rights reserved.
            </span>
            <ul className='social'>
              {SOCIAL.map(function (item, index) { return (<li key={index}>
                  <Link href={item.href} target='_blank' aria-label={item.name}>
                    <item.icon size={16}/>
                  </Link>
                </li>); })}
            </ul>
          </div>
        </div>
      </footer>
    </>);
};
MainFooter.displayName = 'MainFooter';
export default MainFooter;
