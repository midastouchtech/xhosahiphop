/**
 * @name CollectionCard
 * @file collection.tsx
 * @description collection card component
 */
"use client";
// Modules
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
var propTypes = {
    /**
     * Set collection data
     */
    data: PropTypes.any.isRequired,
    /**
     * Display collection information
     */
    info: PropTypes.bool
};
var CollectionCard = function (_a) {
    var data = _a.data, info = _a.info;
    return (
    // Cover [[ Find at scss/components/cover.scss ]]
    <div className='cover cover--round scale-animation'>
            <div className='cover__image'>
                <Link className='ratio ratio-16x9 d-block' href={data.href}>
                    <Image src={data.cover} width={540} height={320} alt={data.title}/>
                </Link>
                <div className='cover__image__content'>
                    <Link href={data.href} className='cover__title mb-1 fs-6 text-truncate'>
                        {data.title}
                    </Link>
                    {info && (<span className='cover__subtitle'>
                            {data.songs.length} Songs
                            {(data === null || data === void 0 ? void 0 : data.likes) ? '| ' + (data === null || data === void 0 ? void 0 : data.likes) + ' Favorites' : ''}
                        </span>)}
                </div>
            </div>            
        </div>);
};
CollectionCard.propTypes = propTypes;
CollectionCard.displayName = 'CollectionCard';
export default CollectionCard;
