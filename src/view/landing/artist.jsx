/**
 * @name Artist
 * @file artist.tsx
 * @description music landing page artist section component
 */
'use client';
// Modules
import React from 'react';
var Artist = function (_a) {
  var children = _a.children;
  return (
    // main section [[ Find at scss/framework/section.scss ]]
    <section className='main-section bg-light'>
      <div className='container'>
        <div className='col-xl-6 col-lg-8 mx-auto text-center fs-5 mb-5'>
          <h2>
            Iimvumi Ezisematheni
            <span className='text-primary'>Trending Artists</span>
          </h2>
          <p>
            Stay ahead of the curve and discover the hottest Xhosa rappers
            currently captivating the scene! Explore their latest tracks,
            connect with them on the platform, and witness the future of Xhosa
            HipHop unfold.
          </p>
        </div>
        {children}
      </div>
    </section>
  );
};
Artist.displayName = 'Artist';
export default Artist;
