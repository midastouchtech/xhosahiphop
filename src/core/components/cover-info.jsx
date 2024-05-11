/**
 * @name CoverInfo
 * @file cover-info.tsx
 * @description component use to show content of cover in the details pages
 */
"use client";
// Modules
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiDownload2Line, RiHeartFill, RiHeartLine, RiStarFill } from '@remixicon/react';
// Contexts
import { useTheme } from '../contexts/theme';
import { usePlayer } from '../contexts/player';
// Components
import TrackDropdown from './dropdown';
import PlayButton from './audio-player/play';
var propTypes = {
    /**
     * Set cover data
     */
    data: PropTypes.object.isRequired
};
var CoverInfo = function (_a) {
    var data = _a.data;
    var FavoriteIcon = data.favorite ? RiHeartFill : RiHeartLine;
    var pathname = usePathname();
    var replaceClassName = useTheme().replaceClassName;
    var playAll = usePlayer().playAll;
    /**
     *
     * Get the person list view based on array
     * @param title
     * @param list
     * @returns
     */
    var getPersonList = function (title, list) {
        return (list && (<p className='mb-2'>
                    {title} {' '}
                    {list.map(function (item, index) {
                return <Link key={item.id} className='text-dark fw-medium' href={'/music/artist/' + item.id}>
                            {item.name}{index !== list.length - 1 ? ', ' : ''}
                        </Link>;
            })}
                </p>));
    };
    /**
     *
     * Get the section information
     * @returns
     */
    var getSectionInfoList = function () {
        return (pathname.includes('album')
            ? (<>
                    <li>Album</li>
                    <li>{data.songs.length} Songs</li>
                </>) : (<>
                    {data.categories && (<li>
                            {data.categories.map(function (category, index) { return category.name
                    + (index !== data.categories.length - 1 ? ', ' : ''); })}
                        </li>)}
                    {data.totalAlbums && (<li>{data.totalAlbums} Albums</li>)}
                    {data.totalSongs && (<li>{data.totalSongs} Songs</li>)}
                </>));
    };
    return (
    //  Section [[ Find at scss/framework/section.scss ]]
    <div className='section'>
            <div className='row'>
                <div className='col-xl-3 col-md-4'>
                    {/* Cover [[ Find at scss/components/cover.scss ]] */}
                    <div className='cover cover--round'>
                        <div className='cover__image'>
                            <div className='ratio ratio-1x1'>
                                <Image width={320} height={320} src={data.cover} alt={data.title ? data.title : data.name}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-1 d-none d-xl-block'></div>
                <div className='col-md-8 mt-5 mt-md-0'>
                    <div className='d-flex align-items-center flex-wrap'>
                        <span className={replaceClassName('text-dark fs-4 fw-semibold pe-2')}>
                            {data.title ? data.title : data.name}
                        </span>
                        <TrackDropdown className={replaceClassName('dropstart d-inline-flex ms-auto')} data={data} queue={!data.songs} play playlist/>
                    </div>

                    {/* Info list [[ Find at scss/components/list.scss ]] */}
                    <ul className='info-list info-list--dotted mt-2'>
                        {getSectionInfoList()}
                        {data.duration && (<li>{data.duration}</li>)}
                        <li>{data.dob ? data.dob : data.date}</li>
                        {data.company && (<li>{data.company}</li>)}
                    </ul>

                    {(data.artists ||
            data.composers ||
            data.lyricists ||
            data.directors) && (<div className='mt-3'>
                            {getPersonList('By:', data.artists)}
                            {getPersonList('Compose by:', data.composers)}
                            {getPersonList('Lyrics by:', data.lyricists)}
                            {getPersonList('Music director:', data.directors)}
                        </div>)}                    

                    {data.description && (<div className='mt-4' dangerouslySetInnerHTML={{ __html: data.description }}/>)}

                    {/* Info list [[ Find at scss/components/list.scss ]] */}
                    <ul className='info-list mt-5'>
                        <li>
                            <div className='d-flex align-items-center'>
                                {data.songs ? (<button type='button' className='btn btn-primary' onClick={function () { return playAll(data.songs); }}>
                                        Play all
                                    </button>) : (<>
                                        <PlayButton primaryButton song={data}/>
                                        <span className={replaceClassName('ps-2 fw-semibold text-dark')}>
                                            {data.played}
                                        </span>
                                    </>)}
                            </div>
                        </li>
                        <li>
                            <a role='button' aria-label='Favorite' className='d-flex align-items-center text-dark'>
                                <FavoriteIcon className={classNames(data.favorite && 'text-danger')}/>
                                <span className={replaceClassName('ps-2 fw-semibold')}>
                                    {data.favorites}
                                </span>
                            </a>
                        </li>
                        {data.downloads && (<li>
                                <a role='button' className='text-dark d-flex align-items-center' aria-label='Download'>
                                    <RiDownload2Line />
                                    <span className={replaceClassName('ps-2 fw-semibold')}>
                                        {data.downloads}
                                    </span>
                                </a>
                            </li>)}
                        <li>
                            <span className='text-dark d-flex align-items-center'>
                                <RiStarFill className='text-warning'/>
                                <span className={replaceClassName('ps-2 fw-semibold')}>
                                    {data.rating}
                                </span>
                            </span>
                        </li>
                    </ul>

                    {data.lyrics && (<div className='mt-5'>
                            <span className='d-block text-dark fs-6 fw-semibold mb-3'>Lyrics</span>
                            <div dangerouslySetInnerHTML={{ __html: data.lyrics }}/>
                        </div>)}
                </div>
            </div>
        </div>);
};
CoverInfo.propTypes = propTypes;
CoverInfo.displayName = 'CoverInfo';
export default CoverInfo;
