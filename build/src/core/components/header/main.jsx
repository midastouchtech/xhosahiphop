/**
 * @name MainHeader
 * @file main.tsx
 * @description music main pages header component
 */
'use client';
// Modules
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiMenu3Fill } from '@remixicon/react';
// Contexts
import { useTheme } from '@/core/contexts/theme';
// Components
import Brand from '../brand';
// Utilities
import { addClass, removeClass } from '@/core/utils';
import { NAVBAR_LINK, USER_KEY } from '@/core/constants/constant';
var MainHeader = function () {
  var pathname = usePathname();
  var replaceClassName = useTheme().replaceClassName;
  var navRef = useRef(null);
  var btnRef = useRef(null);
  // Change `music` link to `login` is user not exist
  useEffect(
    function () {
      console.log('MainHeader -> useEffect -> navRef.current', navRef.current);
      var user = JSON.parse(localStorage.getItem(USER_KEY));
      if (navRef.current) {
        var links = document.querySelectorAll('.nav-link');
        links.forEach(function (link) {
          var href = link.getAttribute('href');
          if (href === '/music' || href === '/auth/login') {
            link.setAttribute('href', !user ? '/auth/login' : href);
          }
        });
      }
    },
    [navRef.current]
  );
  // Collapse menu in mobile
  useEffect(
    function () {
      var btn = btnRef.current;
      var nav = navRef.current;
      if (btn && nav) {
        addClass(btn, 'collapsed');
        btn.setAttribute('aria-expanded', 'false');
        removeClass(nav, 'show');
      }
    },
    [pathname]
  );
  /**
   *
   * Navbar link view
   * @param nav
   * @returns
   */
  var navLink = function (nav) {
    return (
      <li key={nav.name} className='nav-item'>
        <Link
          className='nav-link'
          href={nav.href + (nav.fragment ? '#'.concat(nav.fragment) : '')}
        >
          {nav.name}
        </Link>
      </li>
    );
  };
  return (
    // header [[ Find at scss/framework/header.scss ]]
    <header id='main_header'>
      <div className='container'>
        <nav className='navbar navbar-expand-lg'>
          <Brand />
          <div className='d-flex align-items-center navbar-ex'>
            <Link className='btn btn-primary text-white' href='/soon'>
              Try it free
            </Link>
            <button
              ref={btnRef}
              className={replaceClassName('navbar-toggler ms-3 ms-sm-4')}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#top_navbar'
              aria-controls='top_navbar'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <RiMenu3Fill />
            </button>
          </div>
          <div
            ref={navRef}
            className='collapse navbar-collapse'
            id='top_navbar'
          >
            <ul className='navbar-nav mt-4 mt-lg-0 mx-auto fw-semibold'>
              {NAVBAR_LINK.map(function (nav) {
                return navLink(nav);
              })}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
MainHeader.displayName = 'MainHeader';
export default MainHeader;
