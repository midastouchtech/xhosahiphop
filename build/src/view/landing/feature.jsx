/**
 * @name Feature
 * @file feature.tsx
 * @description music landing page hero section component
 */
'use client';
// Modules
import React from 'react';
import { RiCalendarEventFill, RiDonutChartFill, RiMusic2Fill, RiQuestionAnswerFill, RiRadioFill, RiUser4Fill, RiVipCrownFill, } from '@remixicon/react';
var Feature = function () {
    return (
    // Main section [[ Find at scss/framework/section.scss ]]
    <section className='main-section'>
      <div className='container'>
        <div className='col-xl-6 col-lg-8 mx-auto text-center fs-5 mb-5'>
          <h2>Amaqhinga Onke</h2>
          <p>
            Xhosa HipHop isn't just a platform, it's a portal to a world of
            features designed to supercharge your experience, whether you're a
            die-hard fan or a rising Xhosa rap star.
          </p>
        </div>

        {/* Feature [[ Find at scss/base/core.scss ]] */}
        <div className='feature'>
          <div className='row g-4 g-md-5'>
            <div className='col-xl-3 col-lg-4 col-sm-6'>
              <div className='card h-100 py-2'>
                <div className='card-body'>
                  <div className='feature__icon' style={{ color: 'var(--bs-blue)' }}>
                    <RiMusic2Fill />
                  </div>
                  <h3 className='h5 mt-4 mb-3'>
                    Inqwaba Yomculo
                    <br />
                    <span className='h6 text-primary'>Millions of tracks</span>
                  </h3>
                  <p>
                    Explore a vast library of Xhosa rap tracks, from underground
                    beats to chart-topping hits. There's something for every
                    fan!
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-sm-6'>
              <div className='card h-100 py-2'>
                <div className='card-body'>
                  <div className='feature__icon' style={{ color: 'var(--bs-pink)' }}>
                    <RiQuestionAnswerFill />
                  </div>
                  <h3 className='h5 mt-4 mb-3'>
                    Ukuxoxa Nokubhala
                    <br />
                    <span className='h6 text-primary'>Comments & Reviews</span>
                  </h3>
                  <p>
                    Share your thoughts on music, engage with artists, and build
                    the Xhosa HipHop community through insightful discussions.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-sm-6'>
              <div className='card h-100 py-2'>
                <div className='card-body'>
                  <div className='feature__icon' style={{ color: 'var(--bs-purple)' }}>
                    <RiCalendarEventFill />
                  </div>
                  <h3 className='h5 mt-4 mb-3'>
                    Iimbadla
                    <br />
                    <span className='h6 text-primary'>Musical Events</span>
                  </h3>
                  <p>
                    Stay updated on upcoming concerts, cyphers, and live shows
                    featuring your favorite Xhosa rappers. Never miss a beat!
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-sm-6'>
              <div className='card h-100 py-2'>
                <div className='card-body'>
                  <div className='feature__icon' style={{ color: 'var(--bs-indigo)' }}>
                    <RiDonutChartFill />
                  </div>
                  <h3 className='h5 mt-4 mb-3'>
                    Uhlalutyo Lwedatha
                    <br />
                    <span className='h6 text-primary'>Data Analytics</span>
                  </h3>
                  <p>
                    Artists, gain valuable insights into your audience and track
                    performance with our data analytics tools.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-sm-6'>
              <div className='card h-100 py-2'>
                <div className='card-body'>
                  <div className='feature__icon' style={{ color: 'var(--bs-red)' }}>
                    <RiRadioFill />
                  </div>
                  <h3 className='h5 mt-4 mb-3'>
                    Imiboniso ephilayo
                    <br />
                    <span className='h6 text-primary'>Live streaming</span>
                  </h3>
                  <p>
                    Experience the energy of Xhosa HipHop live! Catch exclusive
                    performances and connect with artists in real-time.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-sm-6'>
              <div className='card h-100 py-2'>
                <div className='card-body'>
                  <div className='feature__icon' style={{ color: 'var(--bs-orange)' }}>
                    <RiVipCrownFill />
                  </div>
                  <h3 className='h5 mt-4 mb-3'>
                    Iinkqubo Zobhaliso
                    <br />
                    <span className='h6 text-primary'>Subscription Plans</span>
                  </h3>
                  <p>
                    Choose the plan that fits your style. Stream ad-free, create
                    playlists, unlock downloads, and support the scene!
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-sm-6'>
              <div className='card h-100 py-2'>
                <div className='card-body'>
                  <div className='feature__icon' style={{ color: 'var(--bs-green)' }}>
                    <RiUser4Fill />
                  </div>
                  <h3 className='h5 mt-4 mb-3'>
                    Ulawulo Lomsebenzisi
                    <br />
                    <span className='h6 text-primary'>User Management</span>
                  </h3>
                  <p>
                    Create a personalized profile, follow artists, curate
                    playlists, and manage your account with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
};
Feature.displayName = 'Feature';
export default Feature;
