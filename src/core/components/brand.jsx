/**
 * @name Brand
 * @file brand.tsx
 * @description music brand component
 */
'use client';
// Modules
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BRAND, SIDEBAR_TOGGLE } from '../constants/constant';
var Brand = function () {
    /**
     *
     * Handle link `onClick` event
     */
    var handleClick = function () {
        document.body.removeAttribute(SIDEBAR_TOGGLE);
    };
    return (<Link className='brand' href={BRAND.href} onClick={handleClick}>
      <Image src={BRAND.logo} width={50} height={50} alt={BRAND.name} priority/>
    </Link>);
};
Brand.displayName = 'Brand';
export default Brand;
