/**
 * @name Contact
 * @file index.tsx
 * @description contact page component
 */
'use client';
// Modules
import React, { useEffect, useState } from 'react';
// Components
import Sidebar from '@/core/components/sidebar';
// Utilities
import { USER_KEY } from '@/core/constants/constant';
import { useTheme } from '@/core/contexts/theme';
var Contact = function (_a) {
  var children = _a.children;
  var _b = useState(null),
    user = _b[0],
    setUser = _b[1];
  useEffect(function () {
    var data = JSON.parse(localStorage.getItem(USER_KEY));
    setUser(data);
  }, []);
  const { headerSkin } = useTheme();
  return user ? (
    <>
      <Sidebar />

      {/* Page content [[ Find at scss/framework/wrapper.scss ]] */}
      <main data-header={headerSkin} id='page_content'>
        {children}
      </main>

      {/* Backdrop [[ Find at scss/framework/wrapper.scss ]] */}
      <div id='backdrop'></div>
    </>
  ) : null;
};
Contact.displayName = 'Contact';
export default Contact;
