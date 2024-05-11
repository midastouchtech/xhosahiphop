/**
 * @name TrackList
 * @file list.tsx
 * @description list component to display list items
 */
"use client";
// Modules
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import { RiCloseLine, RiHeartFill, RiHeartLine, RiVipCrownFill } from '@remixicon/react';
// Contexts
import { useTheme } from '@/core/contexts/theme';
import { usePlayer } from '../contexts/player';
// Components
import TrackDropdown from './dropdown';
import PlayButton from './audio-player/play';
var propTypes = {
    /**
     * Set track data
     */
    data: PropTypes.any.isRequired,
    /**
     * Set dropdown options
     */
    dropdown: PropTypes.bool,
    /**
     * Display track duration
     */
    duration: PropTypes.bool,
    /**
     * Set link on card
     */
    link: PropTypes.bool,
    /**
     * Set to close/remove item from the list
     */
    remove: PropTypes.bool,
};
var TrackList = function (_a) {
    var data = _a.data, download = _a.download, dropdown = _a.dropdown, duration = _a.duration, favorite = _a.favorite, queue = _a.queue, playlist = _a.playlist, play = _a.play, link = _a.link, remove = _a.remove;
    var replaceClassName = useTheme().replaceClassName;
    var removeSong = usePlayer().removeSong;
    var Component = link ? Link : 'div';
    var FavoriteIcon = data.favorite ? RiHeartFill : RiHeartLine;
    var attr = link ? { href: data.href } : {};
    /**
     *
     * Get list options view
     * @returns
     */
    var listOptionView = function () {
        if (remove) {
            return (<li className='list__icon-hover'>
                    <a role='button' className='d-inline-flex' onClick={function () { return removeSong(data.id); }}>
                        <RiCloseLine size={16}/>
                    </a>
                </li>);
        }
        else if (data.premium) {
            return (<li>
                    <span className='badge rounded-pill bg-info'>
                        <RiVipCrownFill size={16}/>
                    </span>
                </li>);
        }
        else {
            return <></>;
        }
    };
    return (<div className='list__item'>
            <div className='list__cover'>
                <Component className='ratio ratio-1x1' {...attr}>
                    <Image src={data.cover} width={320} height={320} alt={data.title ? data.title : data.name}/>
                </Component>

                {play && (<PlayButton className='p-2 border-0' iconSize={16} song={data}/>)}
            </div>

            <div className='list__content'>
                <Link className='list__title text-truncate' href={data.href}>
                    {data.title ? data.title : data.name}
                </Link>
                {data.artists && (<div className='list__subtitle text-truncate'>
                        {data.artists.map(function (artist, index) { return (<Link key={index} href={'/music/artist/' + artist.id}>
                                {artist.name}
                                {data.artists.length - 1 === index ? '' : ', '}
                            </Link>); })}
                    </div>)}
            </div>

            <ul className='list__option'>
                {listOptionView()}
                <li>
                    <a role='button' aria-label='Favorite' className={classNames('d-inline-flex', data.favorite && 'active')}>
                        <FavoriteIcon className={classNames(data.favorite && 'text-danger')}/>
                    </a>
                </li>
                {(duration && data.duration) && (<li>{data.duration}</li>)}
                {dropdown && (<li>
                        <TrackDropdown className={replaceClassName('dropstart d-inline-flex')} download={download} favorite={favorite} play={play} playlist={playlist} queue={queue} data={data} href={data.href}/>
                    </li>)}
            </ul>
        </div>);
};
TrackList.propTypes = propTypes;
TrackList.displayName = 'TrackList';
export default TrackList;
